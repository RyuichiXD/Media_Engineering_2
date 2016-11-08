'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

// app.use(function (req, res) {
//     res.send('Hello world\n');
// });


// app.all('*' , function (req, res) {
//     res.send('Hello world\n');
// });

// Server starten
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
