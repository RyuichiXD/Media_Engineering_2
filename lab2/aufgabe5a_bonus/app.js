'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();


var start = process.hrtime();

setTimeout(function () {

    app.get('/time', function (req, res) {

        var fs = require('fs'),
            filePath = 'text.txt';

        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err;
            res.send(data)
        });
    });
    var end = process.hrtime(start);
    console.log(end);

}, 1000);

// Server starten
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
