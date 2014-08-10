function qry(sr) {
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

var qua = {
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

var args = [
  ytplayer.config.args.adaptive_fmts,
  ytplayer.config.args.url_encoded_fmt_stream_map
].join(',').split(',')

for (var frt of args) {
  var qst = qry(frt);
  var qty = qua['_' + qst.itag] || qst.itag;
  var hrf = unescape(qst.url);
  if (qst.sig)
    hrf += '&signature=' + qst.sig;
  if (qst.s) {
    if (typeof xhr == 'undefined') {
      var xhr = new XMLHttpRequest();
      /* cors-anywhere.herokuapp.com */
      xhr.open('get',
        'https://allow-any-origin.appspot.com/https:' +
        ytplayer.config.assets.js, false);
      xhr.send();
      var rpt = xhr.responseText;
      eval(rpt.replace('(function(){', '').replace('})();', ''));
      var fcnm = /signature=([^(]+)/.exec(rpt)[1];
    }
    hrf += '&signature=' + eval(sprintf('%s("%s")', fcnm, qst.s));
  }
  var fn = (ytplayer.config.args.title + '-' + qty)
    .toLowerCase()
    .replace(/[!"&'()+.:[\]|]/g,'')
    .replace(/[ /]/g,'-')
    .replace(/-+/g,'-');
  var pm = sprintf('prompt("","%s");return false', fn)
  qua['_' + qst.itag] = sprintf(
    '<a href="%s" onclick="%s">%s</a>', hrf, rpc(pm), qty
  );
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
  Object.keys(qua).map(ky => qua[ky]).filter(vu => /href/.test(vu))
).join('<br>');

document.querySelector('#masthead-positioner').style.position = 'static';
