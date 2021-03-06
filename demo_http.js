var http = require('http');

//create a server object:
//a req argument represents the request from the client, as an object (http.IncomingMessage object).
http.createServer(function (req, res) {
    //The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080