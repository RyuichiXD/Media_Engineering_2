/**
 *  Backbone View (stub code) using the #xx-yy-zz-template from DOM to render ... into target element #xx-yy-target
 *  Needs model to be set from outside
 *
 *  (file can be deleted or changed für Ü6 videos)
 *
 *  @author Clemens Buckert
 */
define(['backbone', 'jquery', 'underscore', 'views/video'], function (Backbone, $, _, VideoView) {
    var VideoListView = Backbone.View.extend({
        el: '#video-list',
        template: undefined,
        render: function () {
            this.$el.empty();
            this.collection.each(function (video) {
                var videoView = new VideoView({model: video});
                this.$el.prepend(videoView.render().$el);
            }, this);
            return this;
        },
        initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
        }
    });
    return VideoListView;
});
