var spawn = require('child_process').spawn
var http = require('http')
var gaze = require('gaze')
var path = require('path')

function relativePath(configPath, watchPath) {
  var configDir = path.resolve(path.dirname(configPath))
  var finalPath = path.resolve(configDir, watchPath)
  return finalPath
}

module.exports = function(host, port, config) {

  if(process.platform !== 'darwin') {
    console.log('Only OSX with fswatch is currently supported')
    process.exit()
  }

  var options = {
    host:   host,
    port:   port,
    method: 'POST'
  }

  config.tasks.forEach(function(task) {
    var watchPaths = []
    if(task.watch instanceof Array) {
      task.watch.forEach(function(watchPath) {
        watchPaths.push(relativePath(config.configPath, watchPath))
      })
    }else{
      watchPaths.push(relativePath(config.configPath, task.watch))
    }
    console.log('Starting: ', task.name)
    console.log('Watching: ' , watchPaths)
    gaze(watchPaths, function(err, watcher) {
      this.on('all', function(event, filepath) {
        var req = http.request(options)
        req.on('error', function() {
          console.log('No response from ' + host + ':' + port + ', make sure your Vagrant host is answering')
        })
        req.write(JSON.stringify({event: event, filepath: filepath, taskName: task.name}))
        req.end()
      })

    })
  })
}