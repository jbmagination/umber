'use strict';

function flatten(src, path = [], seen = new Map()) {
  for (let [ky, vu] of Object.entries(src)) {
    if (typeof vu == 'object' && vu != null) {
      if (!seen.has(vu)) {
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

let ypsi = flatten(ytPubsubPubsubInstance);

let durl = values(ypsi).filter(
  x => x.includes('videoplayback?') && !x.includes('range=')
);
let dsig = new Set(
  keys(ypsi).filter(x => x.includes(',signature')).map(x => ypsi[x])
).values();

ypsi = [];

for (let eurl of durl) {
  let nurl = new URL(eurl);
  let nusp = nurl.searchParams;
  nusp.set('ratebypass', 'yes');
  nusp.set('signature', dsig.next().value);
  let kbps = ~~(nusp.get('clen') * 8 / (1000 * nusp.get('dur')));
  ypsi.push(`
    <!--${nusp.get('mime') + `${9999 - kbps}`.padStart(4)}-->
    <p><a href="${nurl.href}">${kbps} kb/s ${nusp.get('mime')}</a></p>
  `);
}

let fdiv = document.querySelector('#yt-dl');
if (!fdiv) {
  fdiv = document.createElement('div');
  fdiv.id = 'yt-dl';
  fdiv.style = `right: 0; bottom: 0; z-index: 6; width: 12em; padding: 1em;
    border-radius: 1em; position: fixed; background: plum`;
  document.body.prepend(fdiv);
}

fdiv.innerHTML = ypsi.sort().join('');
