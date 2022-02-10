var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Return the url part of the request object. So when accessed via http://localhost:8080/summer then 'summer' will be displayed.
    res.write(req.url);
    res.end();
}).listen(8080);
