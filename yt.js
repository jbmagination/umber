function get_query_val(qs, nm) {
  var fr = new RegExp(nm + '=([^&]+)');
  return qs.match(fr) ? unescape(qs.match(fr)[1]) : '';
}

function get_quality(url) {
  var qual = {
    5: '240p FLV h.263',
    17: '144p 3GP mpeg4',
    18: '360p MP4 h.264',
    22: '720p MP4 h.264',
    34: '360p FLV h.264',
    35: '480p FLV h.264',
    36: '240p 3GP mpeg4',
    37: '1080p MP4 h.264',
    43: '360p WebM vp8',
    44: '480p WebM vp8',
    45: '720p WebM vp8',
    46: '1080p WebM vp8',
    82: '360p MP4 3D',
    84: '720p MP4 3D',
    100: '360p WebM 3D',
    102: '720p WebM 3D',
    133: '240p MP4 DASH',
    134: '360p MP4 DASH',
    135: '480p MP4 DASH',
    136: '720p MP4 DASH',
    137: '1080p MP4 DASH',
    139: '48k M4A DASH',
    140: '128k M4A DASH',
    141: '256k M4A DASH',
    160: '192p MP4 DASH',
    171: '128k WebM DASH',
    172: '256k WebM DASH'
  };
  var k = url.match(/itag=(\d+)/)[1];
  return qual[k] || k;
}

var args = ytplayer.config.args;

for (var ft of [args.url_encoded_fmt_stream_map, args.adaptive_fmts]) {
  for (var z of ft ? ft.split(',') : '') {
    var qq = get_quality(z);
    var href = get_query_val(z, 'url') +
               '&signature=' + get_query_val(z, 'sig') +
               '&title=' + args.title + ' ' + qq;
    document.body.insertAdjacentHTML(
      'beforebegin',
      '<a href="' + href + '">' + qq + '</a><br>'
    );
  }
}
