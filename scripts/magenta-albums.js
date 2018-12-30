'use strict';
var ab = (ce, dh = document, fk) => dh[`querySelector${fk ? 'All' : ''}`](ce);
var np = [];

ab('tr', ab('tbody'), 1).forEach(ce => {
   var dh = ab('td', ce, 1);
   np.unshift(`   ${dh[1].textContent} (${dh[0].textContent}):`);
});

var oq = ab('textarea') || document.createElement('textarea');
oq.cols = oq.rows = 30;
oq.style.font = '2.5ex Consolas';
oq.textContent = np.join('\n');
ab('#sidebar').prepend(oq);
