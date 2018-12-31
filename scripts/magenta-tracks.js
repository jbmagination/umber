'use strict';
var qs = (sc, pn = document) => pn.querySelector(sc);
var sn = tn => tn.replace(/[#:]/g, '').replace(/'/g, '’');
var rls = [
   '   ' + sn(qs('bdi').textContent) + ':\n      $: *gr'
];
/* tracklist */
for (var z of document.querySelectorAll('tr[id]'))
{
   var minutes = qs('.treleases', z).textContent.split(':')[0];
   var title = qs('td > :first-child bdi', z).textContent;
   rls.push('      ' + sn(title) + (minutes < 3 ? ': S' : ':'));
}
var tx = qs('textarea') || document.createElement('textarea');
tx.cols = 42;
tx.rows = 30;
tx.style.font = '2.5ex Consolas';
tx.textContent = rls.join('\n');
qs('#sidebar').prepend(tx);
