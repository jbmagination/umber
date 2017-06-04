'use strict';

function prune(value, depthDecr, seen) {
  if (typeof seen == 'undefined')
    seen = [];
  switch (typeof value) {
  case 'string':
    return JSON.stringify(value);
  case 'object':
    var partial = [];
    if (depthDecr <= 0 || seen.indexOf(value) >= 0)
      return;
    seen.push(value);
    for (var q in value)
      if (Object.prototype.hasOwnProperty.call(value, q)) {
        var z = prune(value[q], depthDecr - 1, seen);
        if (z) {
          partial.push('"' + q + '":' + z);
        }
      }
    return '{' + partial.join() + '}';
  }
}

function uniq(item, pos, self) {
  return self.indexOf(item) == pos;
}

var cfmt = {
  _141: '256k AAC',
  _140: '128k AAC',
  _251: '160k Opus',
  _250: '70k Opus',
  _249: '50k Opus',
  _171: '128k Vorbis',
  _266: '2160p H.264',
  _264: '1440p H.264',
  _299: '1080p60 H.264',
  _137: '1080p H.264',
  _298: '720p60 H.264',
  _136: '720p H.264',
  _135: '480p H.264',
  _134: '360p H.264',
  _133: '240p H.264',
  _160: '144p H.264',
  _313: '2160p VP9',
  _308: '1440p60 VP9',
  _271: '1440p VP9',
  _303: '1080p60 VP9',
  _248: '1080p VP9',
  _302: '720p60 VP9',
  _247: '720p VP9',
  _244: '480p VP9',
  _243: '360p VP9',
  _242: '240p VP9',
  _278: '144p VP9'
};

var durl;
var ypa = yt.player.Application.create('player-api', ytplayer.config);
ypa.dispose();
var gvd = prune(ypa, 9);
var xr = gvd.match(/https:[^"]+videoplayback[^"]+/g);
var ya = xr.filter(z => !/signature/.test(z));

if (ya.length) {
  var dsig = gvd.match(/[0123456789ABCDEF.]+(?=")/g)
    .filter(z => z.length > 20).filter(uniq);
  durl = ya.filter(uniq).map((item, pos) => item + '&signature=' + dsig[pos]);
} else {
  durl = xr.filter(uniq);
}

ypa = gvd = null;

for (var eurl of durl) {
  var usp = new URLSearchParams(eurl.split('?')[1]);
  var efmt = cfmt['_' + usp.get('itag')] || usp.get('itag');
  var fnam = (ytplayer.config.args.title + ' ' + efmt).replace(' AAC', '')
    .replace(' H.264', '').replace(/[!"#&'()*,:?@|~’”]/g, '')
    .replace(/[+./[\]]/g, ' ').replace(/ +/g, ' ').toLowerCase();
  var opro = `prompt("", "${fnam}"); return false`.replace(/"/g, '&quot;');
  cfmt['_' + usp.get('itag')] =
    `<a href="${eurl}&ratebypass" onclick="${opro}">${efmt}</a>`;
}

var fdiv = document.querySelector('#bm');
if (!fdiv) {
  fdiv = document.createElement('div');
  fdiv.id = 'bm';
  document.body.insertBefore(fdiv, document.body.firstChild);
}

fdiv.innerHTML = [
  new Date().toLocaleTimeString(),
  'Click to copy the filename, then right click to download'
].concat(
  keys(cfmt).map(z => cfmt[z]).filter(z => /href/.test(z))
).join('<br>');

document.querySelector('#masthead-positioner').style.position = 'static';
document.querySelector('.skip-nav').style.display = 'none';
