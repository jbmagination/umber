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
      Object.keys(oc).filter(x => typeof oc[x] == 'string')
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
  Object.keys(ypsi).filter(x => x.includes(',signature')).map(x => ypsi[x])
).values();
let vqua = Object.keys(ypsi).filter(x => x.includes(',qualityLabel'))
  .map(x => ypsi[x])[Symbol.iterator]();

ypsi = [];

for (let eurl of durl) {
  let nurl = new URL(eurl);
  let nusp = nurl.searchParams;
  nusp.set('ratebypass', 'yes');
  nusp.set('signature', dsig.next().value);
  let squa = nusp.get('mime').includes('video') ?
    vqua.next().value :
    ~~(nusp.get('clen') * 8 / (1000 * nusp.get('dur'))) + 'k';
  ypsi.push(`
    <!--${nusp.get('mime') + `${9999 - parseInt(squa)}`.padStart(4)}-->
    <p><a href="${nurl.href}">${squa} ${nusp.get('mime')}</a></p>
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
