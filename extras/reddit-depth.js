'use strict';
var bc = (ae, df = document) => df.querySelector(ae);
var cb = (ae, df = document) => df.querySelectorAll(ae);

/* we cant match the <ul> */
cb('.first').forEach(ae => {
   var cf = new URL(bc('.bylink', ae).href);
   cf.hostname = 'www.reddit.com';
   cf.searchParams.set('depth', 3);
   cf.searchParams.set('sort', 'confidence');

   var np = document.createElement('a');
   np.href = cf.href;
   np.style.color = '#BF1449';
   np.style.fontWeight = 'bold';
   np.textContent = 'depth';
   bc('.embed-comment, .post-sharing-button', ae.parentNode).replaceWith(np);
});
