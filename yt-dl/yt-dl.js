'use strict';

function prune(src, dep, seen = new WeakSet()) {
  switch (typeof src) {
  case 'string':
    return JSON.stringify(src);
  case 'object':
    if (src == null)
      return null;
    let part = [];
    if (dep <= 0 || seen.has(src))
      return;
    seen.add(src);
    for (let [ky, vu] of Object.entries(src)) {
      let z = prune(vu, dep - 1, seen);
      if (z) {
        part.push('"' + ky + '":' + z);
      }
    }
    return '{' + part.join() + '}';
  }
}

function uniq(item, pos, self) {
  return self.indexOf(item) == pos;
}

let cfmt = {
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

let durl;
let gvd = prune(ytPubsubPubsubInstance, 20);
let xr = gvd.match(/https:[^"]+videoplayback[^"]+/g);
let ya = xr.filter(z => !/signature/.test(z));

if (ya.length) {
  let dsig = gvd.match(/[0123456789ABCDEF.]+(?=")/g)
    .filter(z => z.length > 20).filter(uniq);
  durl = ya.filter(uniq).map((item, pos) => item + '&signature=' + dsig[pos]);
} else {
  durl = xr.filter(uniq);
}

gvd = null;

for (let eurl of durl) {
  let usp = new URLSearchParams(eurl.split('?')[1]);
  let efmt = cfmt['_' + usp.get('itag')] || usp.get('itag');
  let fnam = (ytplayer.config.args.title + ' ' + efmt).replace(' AAC', '')
    .replace(' H.264', '').replace(/[!"#&'()*,:?@|~’”]/g, '')
    .replace(/[+./[\]]/g, ' ').replace(/ +/g, ' ').toLowerCase();
  let opro = `prompt("", "${fnam}"); return false`.replace(/"/g, '&quot;');
  cfmt['_' + usp.get('itag')] =
    `<a href="${eurl}&ratebypass" onclick="${opro}">${efmt}</a>`;
}

let fdiv = document.querySelector('#bm');
if (!fdiv) {
  fdiv = document.createElement('div');
  fdiv.id = 'bm';
  document.body.insertBefore(fdiv, document.body.firstChild);
}

fdiv.innerHTML = [
  new Date().toLocaleTimeString(),
  'Click to copy the filename, then right click to download',
  ...keys(cfmt).map(z => cfmt[z]).filter(z => /href/.test(z))
].join('<br>');

document.querySelector('#masthead-positioner').style.position = 'static';
document.querySelector('.skip-nav').style.display = 'none';
