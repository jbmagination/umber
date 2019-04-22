'use strict';
var qo = (ae, df = document) => df.querySelector(ae);
var qa = (ae, df = document) => df.querySelectorAll(ae);

qa('.report-button').forEach(ae => {
   var cf = new URL(qo('.bylink', ae.parentNode).href);
   cf.hostname = 'www.reddit.com';
   cf.searchParams.set('depth', 3);
   cf.searchParams.set('sort', 'confidence');

   var np = document.createElement('a');
   np.href = cf.href;
   np.style.color = '#BF1449';
   np.style.fontWeight = 'bold';
   np.textContent = 'depth';
   ae.replaceWith(np);
});
