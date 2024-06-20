const http = require('http');
http.createServer(function(req, res) {
    res.end('Hello Ghana')
    console.log('Testing the server')

}).listen(8080);