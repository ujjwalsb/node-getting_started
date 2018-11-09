
var http = require('http');     // to include a module, use require() function with the name of module
// http --> To make Node.js act as an HTTP server  
var dt = require('./2_myfirstmodule');        // Includes the module file from 2_myfirstmodule.js  

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});   // status code, obj containing response headers.
    res.write('The current date and time is: ' + dt.myDateTime());      // write a response to client
    res.end();      // end of response
}).listen(8080);        // server object listens on port 8080.
console.log('Open browser and enter http://127.0.0.1:8080')