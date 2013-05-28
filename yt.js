function get_query_var(querystring, name) {
  var filter = new RegExp(name + '=([^&]+)');
  return unescape(querystring.match(filter)[1]);
}

function get_quality(url) {
  var qual = {
    5: '240p FLV h.263',
    17: '144p 3GP mpeg4 simple',
    18: '360p MP4 h.264 baseline',
    22: '720p MP4 h.264 high',
    34: '360p FLV h.264 main',
    35: '480p FLV h.264 main',
    36: '240p 3GP mpeg4 simple',
    37: '1080p MP4 h.264 high',
    43: '360p WebM vp8',
    44: '480p WebM vp8',
    45: '720p WebM vp8',
    46: '1080p WebM vp8',
    82: '360p MP4 h.264 3D',
    84: '720p MP4 h.264 3D',
    100: '360p WebM vp8 3D',
    102: '720p WebM vp8 3D'
  };
  return qual[url.match(/itag=(\d+)/)[1]];
}

/* Get url_encoded_fmt_stream_map, IT IS AN ARRAY */
var stream_map = ytplayer.config.args.url_encoded_fmt_stream_map.split(',');
var a_elements = new Array();

for (var i = 0; i < stream_map.length; i++) {
  /* Get URL, IT IS A STRING */
  var url =
    get_query_var(stream_map[i], 'url') + '&signature=' +
    get_query_var(stream_map[i], 'sig');
  a_elements.push('<a href=' + url + '>' + get_quality(url) + '</a>');
}

var html = a_elements.join('<br>');
document.body.insertAdjacentHTML('beforebegin', html);
