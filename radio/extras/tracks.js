'use strict';
var qo = ae => document.querySelector(ae);
var sani = ae => ae.replace(/[#:]/g, '').replace(/'/g, '’');
var dh = JSON.parse(qo('[type="application/ld+json"]').innerText);
var np = '   ' + sani(dh.name) + ':\n';

/* tracklist */
dh.track.forEach(ae => {
   var min = ae.duration.split(/[TM]/)[1];
   np += '      ' + sani(ae.name);
   np += min >= 3 && min <= 15 ? ':\n' : ': len\n';
});

var oq = document.createElement('textarea');
oq.cols = 42;
oq.rows = 28;
oq.style.font = 'medium Consolas';
oq.style.position = 'fixed';
oq.style.right = oq.style.top = 0;
oq.style.zIndex = 6;

/* we need the full date as 2 releases can have the same year */
oq.textContent = np +
'      =:\n' +
'         rel: ' + dh.hasReleaseRegion[0].releaseDate + '\n' +
'         white: yes';

document.body.append(oq);
