/**
 * Created by Samy on 08.01.2017.
 */
var mongoose = require('mongoose');

var VideoSchema = new mongoose.Schema({

    //_id: {type: String},  //(String, von Außen nicht setzbar, automatisch bei POST)
    title: {type: String, required: true}, // (String, required)
    description: {type: String, default: ""}, // (String, optional, default '' [leerer String])
    src: {type: String, required: true}, // (String, required)
    length: {type: Number,  min:0, required: true}, //(Number; nicht negative Zahl für Sekundenangabe, required)
    timestamp: {createdAt: 'timestamp', type: String, default: Date.now }, // (String, nicht von Außen setzbar, automatisch bei POST)
    playcount: {type: Number, min:0, default: 0}, //(Number; nicht negative Zahl, optional, default 0)
    ranking: {type: Number, min:0, default: 0} //(Number; nicht negative Zahl, optional, default 0)
});
//name of collection in the db
module.exports.video = mongoose.model('videos', VideoSchema);