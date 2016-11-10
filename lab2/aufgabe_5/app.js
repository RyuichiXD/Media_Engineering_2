'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;

// App
const app = express();

// gibt den Inhalt vom Ordner static frei wenn der prefix /public im Link vorhanden ist
// somit ist  http://localhost:8080/public/index.html möglich
app.use('/public', express.static('static'));


app.get('/file.txt', function (req, res) {

    var time = process.hrtime();

    fs.readFile('text.txt', 'utf8', function(err, contents) {

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(contents+'<br>');
        var diff = process.hrtime(time);
        console.log(contents);
        res.end('after calling readFile: '+ (diff[0]*1e9+ diff[1]+ ' nanosekunden'));
    });

});


// Server starten
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
