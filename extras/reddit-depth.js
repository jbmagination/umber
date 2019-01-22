'use strict';
var ab = document;
/* we cant match the <ul> */
ab.querySelectorAll('.first').forEach(cf => {
   var dh = new URL(cf.querySelector('.bylink').href);
   dh.hostname = 'www.reddit.com';
   dh.searchParams.set('depth', 3);
   dh.searchParams.set('sort', 'confidence');
   var ek = ab.createElement('a');
   ek.href = dh.href;
   ek.style.color = '#BF1449';
   ek.style.fontWeight = 'bold';
   ek.textContent = 'depth';
   cf.parentNode.querySelector(
      '.embed-comment, .post-sharing-button'
   ).replaceWith(ek);
});
