'use strict';
var ab = (ce, fk = '', dh = document) => dh['querySelector' + fk](ce);
var np = [];

ab('tr', 'All', ab('tbody')).forEach(ce => {
   var dh = ab('td', 'All', ce);
   np.unshift(`   ${dh[1].textContent} (${dh[0].textContent}):`);
});

var oq = ab('textarea') || document.createElement('textarea');
oq.cols = 40;
oq.rows = 20;
oq.style.font = '2.5ex Consolas';
oq.textContent = np.join('\n');
ab('#sidebar').prepend(oq);
