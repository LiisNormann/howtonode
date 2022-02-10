var fs = require('fs');

//'data' part is added to the end of the html file as a way to update the file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});