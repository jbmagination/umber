/* quirksmode.org/dom/innerhtml.html
 * stackoverflow.com/q/267704
 * stackoverflow.com/q/2090551
 * * * */
function get_query_var(querystring, variable) {
    // vars is an array of name=value pairs
    var vars = querystring.split('&');
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable) {
            return unescape(pair[1]);
        }
    }
}

function get_quality(url) {
    switch (true) {
        case url.indexOf('itag=5') > 0:
            return 'FLV H.263 240p';
        case url.indexOf('itag=34') > 0:
            return 'FLV H.264 Main 360p';
        case url.indexOf('itag=35') > 0:
            return 'FLV H.264 Main 480p';
        case url.indexOf('itag=18') > 0:
            return 'MP4 H.264 Baseline 360p';
        case url.indexOf('itag=22') > 0:
            return 'MP4 H.264 High 720p';
        case url.indexOf('itag=37') > 0:
            return 'MP4 H.264 High 1080p';
        case url.indexOf('itag=43') > 0:
            return 'WebM VP8 360p';
        case url.indexOf('itag=44') > 0:
            return 'WebM VP8 480p';
        case url.indexOf('itag=45') > 0:
            return 'WebM VP8 720p';
        case url.indexOf('itag=46') > 0:
            return 'WebM VP8 1080p';
    }
}

var fv = document.getElementById('movie_player').getAttribute('flashvars');

/* Get url_encoded_fmt_stream_map, IT IS AN ARRAY */
var stream_map = get_query_var(fv, 'url_encoded_fmt_stream_map').split(',');

var a_elements = new Array();

for (var i=0; i<stream_map.length; i++) {

    /* Get URL, IT IS A STRING */
    var url = get_query_var(stream_map[i], 'url');

    a_elements.push('<a href=' + url + '>' + get_quality(url) + '</a>');
}

document.getElementById('watch-player').innerHTML = a_elements.join('<br>');
