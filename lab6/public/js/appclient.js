/** Main application file to start the client side single page app (only a stub for Ü6)
 *
 * @author Johannes Konert
 */

requirejs.config({
    baseUrl: "/js",
    paths: {
        jquery: './_lib/jquery-1.11.3',
        underscore: './_lib/underscore-1.8.3',
        backbone: './_lib/backbone-1.2.3'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

// AMD conform require as provided by require.js
require(['jquery','backbone', 'models/user', 'views/user', 'models/video', 'models/video.collection', 'views/video', 'views/video-list'],
        function($, Backbone, User, UserView, Video, VideoCollection, VideoView, VideoListView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'main',
            '*whatever': 'main'
        },
        main: function(){
            var videoCollection = new VideoCollection();
            var videoListView = new VideoListView({collection: videoCollection});

            videoCollection.fetch({
                success: function(collection, response) {
                    if (response.length > 0) {
                        console.log("Number of videos : " + response.length);
                        console.log(videoCollection.at(0));
                        videoListView.render();
                    }
                },
                error: function(model, response) {
                    console.error("error ",model,response);
                }
            });
        }
    });

    var myRouter = new AppRouter();

    // finally start tracking URLs to make it a SinglePageApp (not really needed at the moment)
    Backbone.history.start({pushState: true}); // use new fancy URL Route mapping without #
});
