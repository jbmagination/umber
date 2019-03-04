'use strict';
var cf = ae => ae.replace(/[#:]/g, '').replace(/'/g, '’');

var dh = JSON.parse(
   document.querySelector('[type="application/ld+json"]').innerText
);

var np = [
   cf(dh.name) + ':',
   '   <date: ' + new Date(dh.hasReleaseRegion[0].releaseDate).getFullYear(),
   '   <<: *low'
].map(ae => '   ' + ae);

/* tracklist */
dh.track.forEach(ae => {
   var min = ae.duration.split(/[TM]/)[1];
   np.push('      ' + cf(ae.name) + (min >= 3 && min <= 15 ? ':' : ': len'));
});

var oq = document.createElement('textarea');
oq.cols = 42;
oq.rows = 28;
oq.style.font = 'medium Consolas';
oq.style.position = 'fixed';
oq.style.right = oq.style.top = 0;
oq.style.zIndex = 6;
oq.textContent = np.join('\n');

document.body.append(oq);
