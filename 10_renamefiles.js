
var fs = require('fs')

fs.rename('newfile1.txt', 'mynewfile1.txt', function(err){
    if (err) throw err;
    console.log('newfile1.txt has been Renamed to mynewfile1.txt');
})