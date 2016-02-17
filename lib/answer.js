var http = require('http')
var exec = require('child_process').exec
var _ = require('lodash')

function runTask(task, cb) {
  var timeStamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') 
  console.log('Running: ', task.cmd)
  var cmd = exec(task.cmd, function(err, stdout, stderr) {
    cb(err, stdout, stderr)
  })
}

module.exports = function(host, port, config) {

  var server = http.createServer(function(req, res) {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    })
    req.on('end', function() {
      var taskName = JSON.parse(body).taskName
      var task = _.find(config.tasks, {name: taskName})
      runTask(task, function(err, output) {
        console.log(output)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'done' }))
      })
    })
  })
  server.listen(port)

}
