var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/blog', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});

app.get('/blog2', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'blog2.html'));
});

app.get('/blog3', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'blog3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/diwali-115a.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'diwali-115a.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
