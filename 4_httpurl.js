
var https = require('http');

https.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(req.url);     // url --> hold the part of data after domain name
    // req --> holds reques from the client.
    res.end();
}).listen(8080);
console.log('Open browser and enter http://127.0.0.1:8080')
console.log('Also try opening http://127.0.0.1:8080/summer or http://127.0.0.1:8080/winter')