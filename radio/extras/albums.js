'use strict';
{
   const qs = (bb, cc = document) => cc.querySelector(bb);
   const qsa = (bb, cc = document) => [...cc.querySelectorAll(bb)];
   const dd = [];

   qsa('tr', qs('tbody')).forEach(bb => {
      /* if you are logged in a column is prepended with checkboxes. also and
      "Artist" column may or may not exist. To resolve, get index of first
      column with a "class" */
      const ff = qsa('td', bb);
      const hh = ff.findIndex(bb => bb.className);
      dd.unshift('      rel: ' + ff[hh].textContent);
      dd.unshift('   ' + ff[hh + 1].textContent + ':');
   });

   const kk = document.createElement('textarea');
   kk.cols = 40;
   kk.rows = 20;
   kk.style.font = 'medium Consolas';
   kk.style.position = 'fixed';
   kk.style.right = kk.style.top = 0;
   kk.style.zIndex = 6;
   kk.textContent = dd.join('\n');
   document.body.append(kk);
}
