function qr(sr) {
  var qa = [];
  for (var prs of sr.split('&')) {
    var pra = prs.split('=');
    qa[pra[0]] = pra[1];
  }
  return qa;
}

function get_quality(url) {
  var qual = {
    5: '240p H.263 64k MP3',
    17: '144p MPEG-4 24k AAC',
    18: '360p H.264 96k AAC',
    22: '720p H.264 192k AAC',
    36: '240p MPEG-4 36k AAC',
    43: '360p VP8 128k Vorbis',
    82: '360p 3D 96k AAC',
    84: '720p 3D 192k AAC',
    100: '360p 3D 128k Vorbis',
    133: '240p H.264',
    134: '360p H.264',
    135: '480p H.264',
    136: '720p H.264',
    137: '1080p H.264',
    139: '48k AAC',
    140: '128k AAC',
    141: '256k AAC',
    160: '144p H.264',
    171: '128k Vorbis',
    172: '192k Vorbis',
  };
  var qs = qr(url);
  return qual[qs.itag] || itag
}

function rp(tx) {
  return tx.replace('"', '&quot;', 'g');
}

function dc(sg) {
  var xhr = new XMLHttpRequest();
  /* cors-anywhere.herokuapp.com */
  px = 'allow-any-origin.appspot.com/https:';
  xhr.open('get', 'https://' + px + ytplayer.config.assets.js, false);
  xhr.send();
  var rpt = xhr.responseText;
  var fcnm = rpt.match(/signature=([^(]+)/)[1];
  var fs = new RegExp('function ' + fcnm + '[^}]+}[^}]+}');
  eval(rpt.match(fs)[0]);
  return eval(fcnm + '("' + sg + '")');
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
    var href = unescape(qs.url);
    if (qs.sig)
      href += '&signature=' + qs.sig;
    if (qs.s)
      href += '&signature=' + dc(qs.s);
    var fn = (args.title + '-' + qq).toLowerCase()
             .replace(/[!"&'().:[\]|]/g,'')
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

document.querySelector('#masthead-positioner').style.position = 'static';
