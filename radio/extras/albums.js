'use strict';
var qo = (ae, df = document) => df.querySelector(ae);
var qa = (ae, df = document) => [...df.querySelectorAll(ae)];
var np = [];

qa('tr', qo('tbody')).forEach(ae => {
   /* if you are logged in a column is prepended with checkboxes. also and
   "Artist" column may or may not exist. To resolve, get index of first column
   with a "class" */
   var oq = qa('td', ae);
   var rv = oq.findIndex(ae => ae.className);
   np.unshift(
      '   ' + oq[rv + 1].textContent + ':',
      '      <date: ' + oq[rv].textContent
   );
});

var sx = document.createElement('textarea');
sx.cols = 40;
sx.rows = 20;
sx.style.font = 'medium Consolas';
sx.style.position = 'fixed';
sx.style.right = sx.style.top = 0;
sx.style.zIndex = 6;
sx.textContent = np.join('\n');

document.body.append(sx);
