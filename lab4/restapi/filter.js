/**
 * Created by Clemens on 13.12.2016.
 */

exports.filterVideo = function (filterOptions, video) {
    var err;
    var filteredVideo = {};
    filterOptions.forEach(function (filter) {
        if (video.hasOwnProperty(filter)) {
            filteredVideo[filter] = video[filter];
        } else {
            err = new Error('{"error": { "message": "Attribut does not exist.", "code": 400 } }');
            err.status = 400;
            throw err;
        }
    });
    return filteredVideo;
};

exports.getLimit = function(limit, videoArray) {
    if (limit !== undefined) {
        var temp = parseInt(limit);
        if (isNaN(temp)) {
            var err = new Error('error: {"message": "Limit must be a number", "code": 400}');
            err.status = 400;
            throw err;
        }
        if (limit != 0) {
            if (limit < 0) {
                var err = new Error('error: {"message": "Limit must be positive", "code": 400}');
                err.status = 400;
                throw err;
            }
            videoArray = videoArray.slice(0, limit);
        } else {
            var err = new Error('error: {"message": "Limit cannot be 0", "code": 400}');
            err.status = 400;
            throw err;
        }
    }
    return videoArray;
};

exports.getOffset = function(offset, video) {
    if (offset !== undefined) {
        var temp = parseInt(offset);
        if (isNaN(temp)) {
            var err = new Error('error: {"message": "Offset must be a number", "code": 400}');
            err.status = 400;
            throw err;
        }
        if (offset != 0) {
            if (offset < 0) {
                var err = new Error('error: {"message": "Offset must be positive", "code": 400}');
                err.status = 400;
                throw err;
            }
            if (offset >= video.length) {
                var err = new Error('error: {"message": "Offset must smaller than length of video list", "code": 400}');
                err.status = 400;
                throw err;
            }
            video = video.slice(offset, video.length);
        }
    }
    return video;
};