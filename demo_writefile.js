var fs = require('fs');

//'data' part is replaced in the html file when changed
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});