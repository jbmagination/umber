'use strict';
var bc = (ae, df = document) => df.querySelector(ae);
var cb = (ae, df = document) => df.querySelectorAll(ae);
var dh = [];

cb('tr', bc('tbody')).forEach(bf => {
   var np = cb('td', bf);
   dh.unshift(
      '   ' + np[1].textContent + ':',
      '      <year: ' + np[0].textContent
   );
});

var oq = document.createElement('textarea');
oq.cols = 40;
oq.rows = 20;
oq.style.font = 'medium Consolas';
oq.style.position = 'fixed';
oq.style.right = oq.style.top = 0;
oq.style.zIndex = 6;
oq.textContent = dh.join('\n');

document.body.append(oq);
