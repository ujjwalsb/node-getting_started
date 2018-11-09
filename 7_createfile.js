
// Create a new file using the appendFile() method:
var fs = require('fs');
fs.appendFile('newfile1.txt', 'hello Content !', function(err){
    if (err) throw err;
    console.log('newfile1.txt Saved!');
});


// Create a new, empty file using the open() method:
var fs = require('fs');
fs.open('newfile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('newfile2.txt Saved!');
});


// Create a new file using the writeFile() method:
var fs  = require('fs');
fs.writeFile('newfile3.txt', 'Hello Content !', function(err){
    if (err) throw err;
    console.log('newfile3.txt Saved!');
});
