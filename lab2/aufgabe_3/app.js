'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

// http://localhost:8080/index.html möglich da der Inhalt von static freigegeben wird
//app.use(express.static('static'));

// gibt den Inhalt vom Ordner static frei wenn der prefix /public im Link vorhanden ist
app.use('/public', express.static('static'));

// Server starten
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
