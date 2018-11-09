
var http = require('http');     // to include a module, use require() function with the name of module
// http --> To make Node.js act as an HTTP server  

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
console.log('Open browser and enter http://127.0.0.1:8080')