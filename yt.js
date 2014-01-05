function get_query_val(qs, nm) {
  var fr = new RegExp(nm + '=([^&]+)');
  return qs.match(fr) ? unescape(qs.match(fr)[1]) : '';
}

function get_quality(url) {
  var qual = {
    5: '240p FLV h263',
    17: '144p 3GP mpeg4',
    18: '360p MP4 h264',
    22: '720p MP4 h264',
    34: '360p FLV h264',
    35: '480p FLV h264',
    36: '240p 3GP mpeg4',
    37: '1080p MP4 h264',
    43: '360p WebM vp8',
    44: '480p WebM vp8',
    45: '720p WebM vp8',
    46: '1080p WebM vp8',
    82: '360p MP4 3D',
    84: '720p MP4 3D',
    100: '360p WebM 3D',
    102: '720p WebM 3D',
    133: '240p DASH h264',
    134: '360p DASH h264',
    135: '480p DASH h264',
    136: '720p DASH h264',
    137: '1080p DASH h264',
    139: '48k DASH AAC',
    140: '128k DASH AAC',
    141: '256k DASH AAC',
    160: '192p DASH h264',
    171: '128k DASH vorbis',
    172: '192k DASH vorbis'
  };
  var k = url.match(/itag=(\d+)/)[1];
  return qual[k] || k;
}

function rp(tx) {
  return tx.replace('"', '&quot;', 'g');
}

var args = ytplayer.config.args;
var html = [
    new Date().toLocaleString(),
    'Click to copy the filename, then right click to download'
];

for (var ft of [args.url_encoded_fmt_stream_map, args.adaptive_fmts]) {
  for (var z of ft ? ft.split(',') : '') {
    var qq = get_quality(z);
    var href = get_query_val(z, 'url');
    if (!href.match(/signature/))
        href += '&signature=' + get_query_val(z, 'sig');
    var onclick = 'prompt("","' + args.title + ' ' + qq + '");return false';
    html.push(
      '<a href="' + href + '" onclick="' + rp(onclick) + '">' + qq + '</a>'
    );
  }
}

var dw = document.querySelector('#bm');

if (!dw) {
  dw = document.createElement('div');
  dw.id = 'bm';
  document.body.insertBefore(dw, document.body.firstChild);
}

dw.innerHTML = html.join('<br>');
