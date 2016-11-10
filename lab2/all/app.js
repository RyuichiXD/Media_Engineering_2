'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

//U3
app.use('/public', express.static('static'));

//U1

// // app.use würde auch wenn statt * /go stehen würde alles auch nach /go/bla nehmen
// app.use('*' , function (req, res) {
//     res.send('Hello world\n');
// });


//U4
//time als plain text at http://localhost:8080/time
app.get('/time', function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var secounds = date.getSeconds();
    var milisecounds = date.getMilliseconds();

    res.end(hours + " Uhr und " + minutes + " Minuten, exakt " + secounds + " Sekunden und " + milisecounds + " Millisekunden");
});

//U5a
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


app.all('*' , function (req, res) {
    res.type('text/plain');
    res.send('Hello world\n');
});


// Server starten
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
