
var http = require('http');
var us = require('upper-case');

http.createServer(function (req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(us('Hello World'));
    res.end();
}).listen(8080);