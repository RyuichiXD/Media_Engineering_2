/**
 *  Backbone Model (stub) video.collection
 *  Connected to REST API /video
 *
 *  @type {Collection}
 *  @author Clemens Buckert
 */

define(["backbone", 'models/video'], function (Backbone, VideoModel) {
    var VideoCollection = Backbone.Collection.extend({
        model: VideoModel,
        url: "/videos",
        initialize: function () {
            this.on("add", function (video) {
                if(video.isValid() && video.isNew()) {
                    video.save();
                }
            })
        }
    });
    return VideoCollection;
});