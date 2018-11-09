
// Append "This is my text." to the end of the file "mynewfile1.txt":
var fs = require('fs');
fs.appendFile('newfile1.txt', 'This is my text', function(err){
    if (err) throw err;
    console.log('newfile1.txt has been Updated!');
});


// Replace the content of the file "mynewfile3.txt":
var fs = require('fs');
fs.writeFile('newfile3.txt', 'This is my Text', function(err){
    if (err) throw err;
    console.log('newfile3.txt has been Updated!');
});