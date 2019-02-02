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

var oq = document.createElement('textarea');
oq.cols = 40;
oq.rows = 20;
oq.style.bottom = oq.style.right = 0;
oq.style.font = 'medium Consolas';
oq.style.position = 'fixed';
oq.style.zIndex = 6;
oq.textContent = dh.join('\n');

document.body.append(oq);
