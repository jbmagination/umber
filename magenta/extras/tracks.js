'use strict';
var $ = ae => document.querySelector(ae);
var cf = ae => ae.replace(/[#:]/g, '').replace(/'/g, '’');
var dh = JSON.parse($('[type="application/ld+json"]').innerText);

var np = [
   cf(dh.name) + ':',
   '   <year: ' + new Date(dh.hasReleaseRegion[0].releaseDate).getFullYear(),
   '   <flow: *low'
].map(ae => '   ' + ae);

/* tracklist */
dh.track.forEach(ae => {
   var minutes = ae.duration.split(/[TM]/)[1];
   np.push('      ' + cf(ae.name) + (minutes < 3 ? ': len' : ':'));
});

var oq = document.createElement('textarea');
oq.cols = 42;
oq.rows = 30;
oq.style.bottom = oq.style.right = 0;
oq.style.font = 'medium Consolas';
oq.style.position = 'fixed';
oq.style.zIndex = 6;
oq.textContent = np.join('\n');

document.body.append(oq);
