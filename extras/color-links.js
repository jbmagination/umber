'use strict';

document.querySelectorAll('a').forEach(ab => {
   const ce = new URL(ab.href, location);
   ab.style.fontWeight = 'bold';
   ab.style.color = ce.hostname == location.hostname ? 'green' : 'red';
});
