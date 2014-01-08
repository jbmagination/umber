function qr(sr) {
  var qa = [];
  for (var prs of sr.split('&')) {
    var pra = prs.split('=');
    qa[pra[0]] = pra[1];
  }
  return qa;
}

/* ytplayer.config.assets.js */
function Ok(a) {
  a = a.split('');
  a = Pk(a, 32);
  a = a.reverse();
  a = a.slice(3);
  a = a.reverse();
  a = a.slice(1);
  a = a.reverse();
  a = Pk(a, 19);
  a = Pk(a, 24);
  a = a.slice(3);
  return a.join('');
}

function Pk(a, b) {
  var c = a[0];
  a[0] = a[b % a.length];
  a[b] = c;
  return a;
}

function get_quality(url) {
  var qual = {
    5: '240p FLV H.263',
    17: '144p 3GP MPEG-4',
    18: '360p MP4 H.264',
    22: '720p MP4 H.264',
    34: '360p FLV H.264',
    35: '480p FLV H.264',
    36: '240p 3GP MPEG-4',
    37: '1080p MP4 H.264',
    43: '360p WebM VP8',
    44: '480p WebM VP8',
    45: '720p WebM VP8',
    46: '1080p WebM VP8',
    82: '360p MP4 3D',
    84: '720p MP4 3D',
    100: '360p WebM 3D',
    102: '720p WebM 3D',
    133: '240p DASH H.264',
    134: '360p DASH H.264',
    135: '480p DASH H.264',
    136: '720p DASH H.264',
    137: '1080p DASH H.264',
    139: '48k DASH AAC',
    140: '128k DASH AAC',
    141: '256k DASH AAC',
    160: '192p DASH H.264',
    171: '128k DASH Vorbis',
    172: '192k DASH Vorbis'
  };
  var qs = qr(url);
  var itag = qs['itag'];
  return qual[itag] || itag;
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
    var qs = qr(z);
    var href = unescape(qs['url']);
    if (qs['sig'])
      href += '&signature=' + qs['sig'];
    if (qs['s'])
      href += '&signature=' + Ok(qs['s']);
    var fn = (args.title + '-' + qq).toLowerCase()
             .replace(/[().]/g,'')
             .replace(/ /g,'-')
             .replace(/-+/g,'-');
    var onclick = 'prompt("","' + fn + '");return false';
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
