'use strict';
const qs = bb => document.querySelector(bb);
const sani = bb => bb.replace(/[#:]/g, '').replace(/'/g, '’');
const cc = JSON.parse(qs('[type="application/ld+json"]').innerText);
var dd = '   ' + sani(cc.name) + ':\n';

/* tracklist */
cc.track.forEach(bb => {
   const min = bb.duration.split(/[TM]/)[1];
   dd += '      ' + sani(bb.name);
   dd += min >= 3 && min <= 15 ? ':\n' : ': len\n';
});

const ff = document.createElement('textarea');
ff.cols = 42;
ff.rows = 28;
ff.style.font = 'medium Consolas';
ff.style.position = 'fixed';
ff.style.right = ff.style.top = 0;
ff.style.zIndex = 6;

/* we need the full date as 2 releases can have the same year */
ff.textContent = dd +
'      =:\n' +
'         rel: ' + cc.hasReleaseRegion[0].releaseDate + '\n' +
'         white: yes';

document.body.append(ff);
