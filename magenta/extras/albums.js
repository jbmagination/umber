'use strict';
var $ = (ae, bf = document) => bf.querySelector(ae);
var $$ = (ae, bf = document) => bf.querySelectorAll(ae);
var dh = [];

$$('tr', $('tbody')).forEach(bf => {
   var np = $$('td', bf);
   dh.unshift(
      '   ' + np[1].textContent + ':',
      '      <year: ' + np[0].textContent
   );
});

var oq = $('textarea') || document.createElement('textarea');
oq.cols = 40;
oq.rows = 20;
oq.style.font = '2.5ex Consolas';
oq.textContent = dh.join('\n');
$('#sidebar').prepend(oq);
