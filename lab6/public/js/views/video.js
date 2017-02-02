/**
 *  Backbone View (stub code) using the #xx-yy-zz-template from DOM to render ... into target element #xx-yy-target
 *  Needs model to be set from outside
 *
 *
 *
 *  @author Clemens Buckert
 */
define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
    var VideoView = Backbone.View.extend({
        //html-tag
        tagName: "article",
        //assign index.html script (<script type="text/template" id="video-template">) via _template to backbone template
        template : _.template($("#video-template").text()),
        render: function () {
            //append model properties to the html template: see slides p. 74 or http://backbonejs.org/#Model-attributes
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        //look for model changes and render template if
        initialize : function () {
            this.listenTo(this.model, "change", this.render);
        }
    });
    return VideoView;
});

