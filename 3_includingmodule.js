
var http = require('http');     // to include a module, use require() function with the name of module
// http --> To make Node.js act as an HTTP server  
var dt = require('./2_myfirstmodule');        // Includes the module file from 2_myfirstmodule.js  

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The current date and time is: ' + dt.myDateTime());
    res.end();
}).listen(8080);
console.log('Open browser and enter http://127.0.0.1:8080')