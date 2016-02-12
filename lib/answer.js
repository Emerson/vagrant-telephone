var http = require('http')
var spawn = require('child_process').spawn

module.exports = function(host, port, restartFile) {

  var server = http.createServer(function(req, res) {
    var timeStamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') 
    var touch = spawn('touch', [restartFile])
    console.log('Restarting', timeStamp)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({ message: 'answered' }))
  })
  server.listen(port)

}
