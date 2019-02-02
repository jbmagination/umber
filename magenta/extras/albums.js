'use strict';
var $ = (ae, bd = document) => bd.querySelector(ae);
var $$ = (ae, bd = document) => bd.querySelectorAll(ae);
var cf = [];

$$('tr', $('tbody')).forEach(bd => {
   var hk = $$('td', bd);
   cf.unshift(
      '   ' + hk[1].textContent + ':',
      '      <year: ' + hk[0].textContent
   );
});

var np = $('textarea') || document.createElement('textarea');
np.cols = 40;
np.rows = 20;
np.style.font = '2.5ex Consolas';
np.textContent = cf.join('\n');
$('#sidebar').prepend(np);
