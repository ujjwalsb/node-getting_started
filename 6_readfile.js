
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data){
    res.writeHead(200, {'Content_type' : 'text/html'});
    res.write(data);
    res.end();
});
}).listen(8080);
console.log('This will read the html file of demofile1.html')