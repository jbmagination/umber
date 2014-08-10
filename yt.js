function qr(sr) {
  var qa = [];
  for (var prs of sr.split('&')) {
    var pra = prs.split('=');
    qa[pra[0]] = pra[1];
  }
  return qa;
}

function rpc(tx) {
  return tx.replace('"', '&quot;', 'g');
}

function sprintf(nw) {
  var i = 0;
  while (/%s/.test(nw))
    nw = nw.replace('%s', arguments[++i])
  return nw;
}

function dc(sgn) {
  var xhr = new XMLHttpRequest();
  /* cors-anywhere.herokuapp.com */
  px = 'allow-any-origin.appspot.com/https:';
  xhr.open('get', 'https://' + px + ytplayer.config.assets.js, false);
  xhr.send();
  var rpt = xhr.responseText;
  eval(rpt.replace('(function(){', '').replace('})();', ''));
  var fcnm = rpt.match(/signature=([^(]+)/)[1];
  return eval(sprintf('%s("%s")', fcnm, sgn));
}

var qy = {
  _141: '256k AAC',
   _22: '720p H.264 192k AAC',
   _84: '720p 3D 192k AAC',
  _140: '128k AAC',
   _18: '360p H.264 96k AAC',
   _82: '360p 3D 96k AAC',
  _139: '48k AAC',
   _36: '240p MPEG-4 36k AAC',
   _17: '144p MPEG-4 24k AAC',
    _5: '240p H.263 64k MP3',
  _172: '192k Vorbis',
  _171: '128k Vorbis',
   _43: '360p VP8 128k Vorbis',
  _100: '360p 3D 128k Vorbis',
  _137: '1080p H.264',
  _136: '720p H.264',
  _135: '480p H.264',
  _134: '360p H.264',
  _133: '240p H.264',
  _160: '144p H.264',
  _248: '1080p VP9',
  _247: '720p VP9',
  _246: '480p 1400k VP9',
  _245: '480p 900k VP9',
  _244: '480p 500k VP9',
  _243: '360p VP9',
  _242: '240p VP9'
};

var args = ytplayer.config.args;

for (var ft of [args.url_encoded_fmt_stream_map, args.adaptive_fmts]) {
  for (var z of ft ? ft.split(',') : '') {
    var qs = qr(z);
    var qq = qy['_' + qs.itag] || qs.itag;
    var hf = unescape(qs.url);
    if (qs.sig)
      hf += '&signature=' + qs.sig;
    if (qs.s)
      hf += '&signature=' + dc(qs.s);
    var fn = (args.title + '-' + qq).toLowerCase()
             .replace(/[!"&'()+.:[\]|]/g,'')
             .replace(/[ /]/g,'-')
             .replace(/-+/g,'-');
    var pm = sprintf('prompt("","%s");return false', fn)
    qy['_' + qs.itag] = sprintf(
      '<a href="%s" onclick="%s">%s</a>', hf, rpc(pm), qq
    );
  }
}

var dw = document.querySelector('#bm');
if (!dw) {
  dw = document.createElement('div');
  dw.id = 'bm';
  document.body.insertBefore(dw, document.body.firstChild);
}

dw.innerHTML = [
  new Date().toLocaleTimeString(),
  'Click to copy the filename, then right click to download'
].concat(
  keys(qy).map(ky => qy[ky]).filter(vu => /href/.test(vu))
).join('<br>');

document.querySelector('#masthead-positioner').style.position = 'static';
