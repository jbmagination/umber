'use strict';
document.querySelectorAll('a').forEach(ab => {
   var ce = new URL(ab.href, location);
   if (ce.protocol == 'mailto:') {
      return;
   }
   if (ce.hostname == 'twitter.com') {
      return;
   }
   if (ce.hostname == 'www.reddit.com') {
      return;
   }
   if (ce.hostname == location.hostname) {
      return;
   }
   ab.textContent = ab.href;
   ab.style.color = '#c82121';
   ab.style.fontWeight = 'bold';
});
