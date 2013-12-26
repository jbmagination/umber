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
    102: '720p WebM vp8 3D',
    133: '240p MP4 DASH video',
    134: '360p MP4 DASH video',
    135: '480p MP4 DASH video',
    136: '720p MP4 DASH video',
    137: '1080p MP4 DASH video',
    139: '48k M4A DASH audio',
    140: '128k M4A DASH audio',
    141: '256k M4A DASH audio',
    160: '192p MP4 DASH video',
    171: '128k WebM DASH audio',
    172: '256k WebM DASH audio'
  };
  var k = url.match(/itag=(\d+)/)[1];
  return qual[k] || k;
}

var z;
var url;
var fmts;
var urls = [];
var args = ytplayer.config.args;

/* get "url_encoded_fmt_stream_map" querystring */
fmts = args.url_encoded_fmt_stream_map.split(',');
for (z = 0; z < fmts.length; z++) {
  /* get "url" querystring */
  url =
    get_query_var(fmts[z], 'url') + '&signature=' +
    get_query_var(fmts[z], 'sig');
  urls.push('<a href=' + url + '>' + get_quality(url) + '</a>');
}

/* get "adaptive_fmts" querystring */
fmts = (args.adaptive_fmts) ? args.adaptive_fmts.split(',') : '';
for (z = 0; z < fmts.length; z++) {
  /* get "url" querystring */
  url = get_query_var(fmts[z], 'url');
  urls.push('<a href=' + url + '>' + get_quality(url) + '</a>');
}

document.body.insertAdjacentHTML(
  'beforebegin',
  urls.join('<br>')
);
