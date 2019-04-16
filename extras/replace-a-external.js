'use strict';
document.querySelectorAll('a').forEach(ab => {
   const ce = new URL(ab.href, location);
   if (ce.protocol == 'mailto:') {
      return;
   }
   /* covers optional "www." */
   if (ce.hostname.endsWith('facebook.com')) {
      return;
   }
   if (ce.hostname.endsWith('google.com')) {
      return;
   }
   if (ce.hostname.endsWith('linkedin.com')) {
      return;
   }
   if (ce.hostname.endsWith('reddit.com')) {
      return;
   }
   if (ce.hostname.endsWith('tumblr.com')) {
      return;
   }
   if (ce.hostname.endsWith('twitter.com')) {
      return;
   }
   if (ce.hostname == location.hostname) {
      return;
   }
   ab.textContent = ab.href;
   ab.style.color = '#c82121';
   ab.style.fontWeight = 'bold';
});
