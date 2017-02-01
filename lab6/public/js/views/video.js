/**
 *  Backbone View (stub code) using the #xx-yy-zz-template from DOM to render ... into target element #xx-yy-target
 *  Needs model to be set from outside
 *
 *  (file can be deleted or changed für Ü6 videos)
 *
 *  @author Clemens Buckert
 */
define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
    var VideoView = Backbone.View.extend({
        tagName: "article",
        template : _.template($("#video-template").text()),
        render: function () {
            //append model properties to the html: see http://backbonejs.org/#Model-attributes
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        initialize : function () {
            this.listenTo(this.model, "change", this.render);
        }
    });
    return VideoView;
});

