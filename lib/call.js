var spawn = require('child_process').spawn
var http = require('http')

module.exports = function(host, port, paths) {

  if(process.platform !== 'darwin') {
    console.log('Only OSX with fswatch is currently supported')
    process.exit()
  }

  var options = {
    host: host,
    port: port
  }

  var fswatch = spawn('fswatch', paths)

  fswatch.stdout.on('data', function(data) {
    console.log('Change: ' + data.toString().replace(/\n$/, ''))
    var req = http.request(options, function() {
      // console.log('Call Answered')
    })
    req.on('error', function() {
      console.log('No response from ' + host + ':' + port + ', make sure your Vagrant host is answering')
    })
    req.end()
  })

  fswatch.on('close', function() {
    console.log('Hanging up...')
  })

}