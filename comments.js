// Create web server
// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var comments = [];
var server = http.createServer(function (req, res) {
    var parseUrl = url.parse(req.url);
    var parseQuery = querystring.parse(parseUrl.query);
    if (parseUrl.pathname == '/add') {
        comments.push(parseQuery.comment);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Comment added');
        res.end();
    } else if (parseUrl.pathname == '/list') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(comments.join('\n'));
        res.end();
    } else {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});
server.listen(8080);
console.log('Server is running on http://localhost:8080');
// Run the app by putting your browser to http://localhost:8080
// Open your browser and put http://localhost:8080 in the address bar
// You will see the form to add comments
// Add comments and click the Add button
// You will see the added comments
// Open another browser and put http://localhost:8080/list in the address bar
// You will see the added comments
// Open another browser and put http://localhost:8080 in the address bar
// You will see the form to add comments
// Add comments and click the Add button
// You will see the added comments
// Open another browser and put http://localhost:8080/list in the address bar
// You will see the added comments
// That's how you can share the data between different clients
// You can also send a POST request to add comments
// You can use the curl command to send a POST request
// Open a terminal
// Type curl -d "comment=Hello" http://localhost:8080/add
// You will see Comment added
// Type curl http://localhost:8080/list
// You will see Hello
// Type curl -d "comment=World" http://localhost:8080/add
// You will see Comment added
