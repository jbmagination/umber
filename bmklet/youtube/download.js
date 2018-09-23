'use strict';
function flatten(src, path = [], seen = new Map())
{
   for (var [ky, vu] of Object.entries(src))
   {
      if (typeof vu == 'object' && vu != null)
      {
         if (!seen.has(vu))
         {
            seen.set(vu, path);
            flatten(vu, [...path, ky], seen);
         }
      }
   }
   if (!path.length)
   {
      var op = {};
      for (var [oc, pt] of seen)
      {
         Object.keys(oc).filter(x => typeof oc[x] == 'string')
         .forEach(x => op[[...pt, x]] = oc[x]);
      }
      return op;
   }
}
var ypsi = flatten(ytPubsubPubsubInstance);

var durl = Object.values(ypsi).filter(
   x => x.includes('videoplayback?') && !x.includes('range=')
);

var dsig = new Set(Object.keys(ypsi).filter(
   x => x.includes(',signature')
).map(x => ypsi[x])).values();

var vqua = Object.keys(ypsi).filter(
   x => x.includes(',qualityLabel')
).map(x => ypsi[x])[Symbol.iterator]();

ypsi = [];
for (var eurl of durl)
{
   var nurl = new URL(eurl);
   var nusp = nurl.searchParams;
   nusp.set('ratebypass', 'yes');
   if (!nusp.get('signature'))
   {
      nusp.set('signature', dsig.next().value);
   }
   var squa = nusp.get('mime').includes('video') ?
      vqua.next().value :
      ~~(nusp.get('clen') * 8 / (1000 * nusp.get('dur'))) + 'k';
   ypsi.push(
      `<!--${nusp.get('mime') + `${9999 - parseInt(squa)}`.padStart(4)}-->
      <p><a href="${nurl.href}">${squa} ${nusp.get('mime')}</a></p>`
   );
}
var fdiv = document.querySelector('#yt-dl');
if (!fdiv)
{
   fdiv = document.createElement('div');
   fdiv.id = 'yt-dl';
   fdiv.style.background = 'plum';
   fdiv.style.borderRadius = '2ex';
   fdiv.style.bottom = 0;
   fdiv.style.padding = '2ex';
   fdiv.style.position = 'fixed';
   fdiv.style.right = 0;
   fdiv.style.width = '25ex';
   fdiv.style.zIndex = 6;

   document.body.prepend(fdiv);
}
fdiv.innerHTML = ypsi.sort().join('');
