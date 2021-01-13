var express = require('express');
var fs = require('fs')
var app = express();
var bodyParser = require('body-parser');

app.use("/images", express.static(__dirname + '/images'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/html", express.static(__dirname + '/html'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/json", express.static(__dirname + '/json'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// root
app.get('/', function (request, response) {
    console.log('GET /')
    fs.readFile('index.html', function (err, html) {
        if (err) {
            throw err; 
        } 
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    });  
})


port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)