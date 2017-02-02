/**
 *  Backbone View (stub code) using the #xx-yy-zz-template from DOM to render ... into target element #xx-yy-target
 *  Needs model to be set from outside
 *
 *
 *
 *  @author Clemens Buckert
 */
define(['backbone', 'jquery', 'underscore', 'views/video'], function (Backbone, $, _, VideoView) {
    var VideoListView = Backbone.View.extend({
        //html root element
        el: '#video-list',
        //we use videoView as template => Delegator View
        template: undefined,
        render: function () {
            //empty the #video-list
            this.$el.empty();
            //loop trough model.video data
            this.collection.each(function (video) {
                var videoView = new VideoView({model: video});
                //videoView.render() calls videoView itself, so we append $el to the DOM via jquery
                this.$el.prepend(videoView.render().$el);
            }, this);
            return this;
        },
        //Loop
        initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
        }
    });
    return VideoListView;
});

