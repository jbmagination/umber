'use strict';

function flatten(src, path = [], seen = new Map()) {
  for (let [ky, vu] of Object.entries(src)) {
    if (typeof vu == 'object' && vu != null) {
      if (!seen.has(vu) || path.length < seen.get(vu).length) {
        seen.set(vu, path);
        flatten(vu, [...path, ky], seen);
      }
    }
  }
  if (!path.length) {
    let op = {};
    for (let [oc, pt] of seen) {
      keys(oc).filter(x => typeof oc[x] == 'string')
      .forEach(x => op[[...pt, x]] = oc[x]);
    }
    return op;
  }
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

let gvd = flatten(ytPubsubPubsubInstance);

let durl = values(gvd).filter(
  x => ~x.indexOf('videoplayback?') && !~x.indexOf('range=')
);
let dsig = Array.from(
  new Set(keys(gvd).filter(x => ~x.indexOf(',signature')).map(x => gvd[x]))
);

gvd = null;

for (let eurl in durl) {
  let nurl = new URL(durl[eurl]);
  let nusp = nurl.searchParams;
  nusp.set('ratebypass', 'yes');
  nusp.set('signature', dsig[eurl]);
  let efmt = cfmt['_' + nusp.get('itag')] || nusp.get('itag');
  let fnam = (ytplayer.config.args.title + ' ' + efmt).replace(' AAC', '')
    .replace(' H.264', '').replace(/[!"#&'()*,:?@|~’”]/g, '')
    .replace(/[+./[\]]/g, ' ').replace(/ +/g, ' ').toLowerCase();
  let opro = `prompt("", "${fnam}"); return false`.replace(/"/g, '&quot;');
  cfmt['_' + nusp.get('itag')] =
  `<p><a href="${nurl.href}" onclick="${opro}">${efmt}</a></p>`;
}

let fdiv = document.querySelector('#yt-dl');
if (!fdiv) {
  fdiv = document.createElement('div');
  fdiv.id = 'yt-dl';
  fdiv.style = `right: 0; bottom: 0; z-index: 6; width: 10em; padding: 1em;
    border-radius: 1em; position: fixed; background: plum`;
  document.body.prepend(fdiv);
}

fdiv.innerHTML = `${new Date().toLocaleTimeString()}
  Click to copy the filename, then right click to download
  ${values(cfmt).filter(z => /href/.test(z)).join('')}`;
