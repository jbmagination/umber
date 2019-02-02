'use strict';
var $ = (ae, bd = document) => bd.querySelector(ae);
var $$ = (ae, bd = document) => bd.querySelectorAll(ae);

/* we cant match the <ul> */
$$('.first').forEach(ae => {
   var cf = new URL($('.bylink', ae).href);
   cf.hostname = 'www.reddit.com';
   cf.searchParams.set('depth', 3);
   cf.searchParams.set('sort', 'confidence');

   var np = document.createElement('a');
   np.href = cf.href;
   np.style.color = '#BF1449';
   np.style.fontWeight = 'bold';
   np.textContent = 'depth';
   $('.embed-comment, .post-sharing-button', ae.parentNode).replaceWith(np);
});
