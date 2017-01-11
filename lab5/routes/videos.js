/** This module defines the routes for videos using a mongoose model
 *
 * @author Johannes Konert
 * @licence CC BY-SA 4.0
 *
 * @module routes/videos
 * @type {Router}
 */

// remember: in modules you have 3 variables given by CommonJS
// 1.) require() function
// 2.) module.exports
// 3.) exports (which is module.exports)

// modules
var express = require('express');
var logger = require('debug')('me2u5:videos');

// TODO add here your require for your own model file
var schema = require('../model/video');
var Video = schema.video;

var videos = express.Router();


// routes **********************
videos.route('/')
    .get(function(req, res, next) {
        // TODO replace store and use mongoose/MongoDB
        ///------------------------ START NEW CODE----------------
        Video.find({ },function (err,videosCollection) {
            if (err)
            {
                console.log("Fehler beim finden der Videos "+ err);
                res.status(500).send("Serverfehler!");
            }

            if(!videosCollection.length)
            {
                console.log("Videos nicht gefunden");
                res.status(404).send("Videos nicht gefunden!");
            }
            else
            {
                console.log("Tracksesion(s) gefunden");
                res.status(200).json(videosCollection);
                console.log(videosCollection);
            }
        })
        ///------------------------ END NEW CODE----------------
       // res.locals.processed = true;
      //  next();
    })
    .post(function(req,res,next) {
        console.log("post Befehl");
        req.body.timestamp = new Date().getTime();

        // TODO replace store and use mongoose/MongoDB
        // var id = store.insert(storeKey, req.body);

        ///------------------------ START NEW CODE----------------
        var mongoDB_video = new Video(req.body);

        mongoDB_video.save(function(err) {
            if (err) {
                console.log(err);
                //res.status(400).send("Fehler beim speichern!");

                err = new Error('{"error": { "message": "Error while saving in database", "code": 400 } }');
                err.status = 400;
                next(err);
            }
            else
            {
                console.log('Video added');
                res.status(201).send("Video " +req.body.title +" added in database!");
            }
        });
        ///------------------------ END NEW CODE----------------

        // TODO replace store and use mongoose/MongoDB
        // res.locals.items = store.select(storeKey, id);
        res.locals.processed = true;
        //next();
    })
    .all(function(req, res, next) {
        if (res.locals.processed) {
            next();
        } else {
            // reply with wrong method code 405
            var err = new Error('this method is not allowed at ' + req.originalUrl);
            err.status = codes.wrongmethod;
            next(err);
        }
    });

videos.route('/:id')
    .get(function(req, res,next) {
        // TODO replace store and use mongoose/MongoDB
        // res.locals.items = store.select('videos', req.params.id);
        //--------------START NEW CODE --------------------------
        Video.find({_id: req.params.id},function (err,videoContent) {
            console.log(req.params.id)
            if (err)
            {
                console.log("Fehler beim finden der Videos "+ err);
                res.status(500).send("Serverfehler!");
            }

            if(!videoContent.length)
            {
                console.log("Videos nicht gefunden");
                res.status(404).send("Videos nicht gefunden!");
            }
            else
            {
                console.log("Video gefunden");
                //res.sendStatus(200);
                res.status(200).json(videoContent);
            }
        });
        //--------------END NEW CODE --------------------------


        res.locals.processed = true;
       // next();
    })
    .put(function(req, res,next) {
        var id = parseInt(req.params.id);
        if (id === req.body.id) {
            // TODO replace store and use mongoose/MongoDB
            // store.replace(storeKey, req.body.id, req.body);
            res.status(200);
            res.locals.items = store.select(storeKey, id);
            res.locals.processed = true;
            next();
        }
        else {
            var err = new Error('id of PUT resource and send JSON body are not equal ' + req.params.id + " " + req.body.id);
            err.status = codes.wrongrequest;
            next(err);
        }
    })
    .delete(function(req,res,next) {
        var id = parseInt(req.params.id);

        // TODO replace store and use mongoose/MongoDB
        // store.remove(storeKey, id);

        // ...
        //    var err = new Error('No element to delete with id ' + req.params.id);
        //    err.status = codes.notfound;
        //    next(err);
        // ...

        Video.remove({_id: req.params.id},function (err) {
            console.log(req.params.id)
            if (err)
            {
                //console.log("Fehler beim finden des zu löschenden Videos "+ err);
                //res.status(500).send("Serverfehler!");

                err = new Error('{"error": { "message": "Fehler beim finden des zu löschenden Videos", "code": 500 } }');
                err.status = 500;
                next(err);

            }
            else {
                console.log("Video gelöscht");
                res.status(200).send("Video gelöscht!");
            }
        });
        //--------------END NEW CODE --------------------------


        res.locals.processed = true;
        //next();
    })
    .patch(function(req,res,next) {
        // TODO replace these lines by correct code with mongoose/mongoDB
        var err = new Error('Unimplemented method!');
        err.status = 500;
        next(err);
    })

    .all(function(req, res, next) {
        if (res.locals.processed) {
            next();
        } else {
            // reply with wrong method code 405
            var err = new Error('this method is not allowed at ' + req.originalUrl);
            err.status = codes.wrongmethod;
            next(err);
        }
    });


// this middleware function can be used, if you like or remove it
// it looks for object(s) in res.locals.items and if they exist, they are send to the client as json
videos.use(function(req, res, next){
    // if anything to send has been added to res.locals.items
    if (res.locals.items) {
        // then we send it as json and remove it
        res.json(res.locals.items);
        delete res.locals.items;
    } else {
        // otherwise we set status to no-content
        res.set('Content-Type', 'application/json');
        res.status(204).end(); // no content;
    }
});

module.exports = videos;