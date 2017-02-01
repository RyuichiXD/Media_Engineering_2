/**
 *  Backbone Model (stub) for video and video.collection
 *  Connected to REST API /video
 *
 *  @type {Model}
 *  @author Clemens Buckert
 */

define(["backbone", "underscore"], function (Backbone, _) {
    var VideoModel = Backbone.Model.extend({
        idAttribute: "_id",
        urlRoot: '/videos',
        length: "length",
        defaults: {
            description: '',
            timestamp: new Date(),
            playcount: 0,
            ranking: 0,
            src: undefined,
            title: undefined,
            length: undefined
        }
    });
    return VideoModel;
});