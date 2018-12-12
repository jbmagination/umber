'use strict';

// autolinks
document.querySelectorAll('p, li, td').forEach(z =>
   z.innerHTML = z.innerHTML.replace(
      RegExp('https?://[^ "<]+(?![^<>]*(>|</a>))', 'g'), '<a href="$&">$&</a>'
   )
);

// ordered list start
document.querySelectorAll('ol a').forEach(z =>
   // .href returns absolute path
   z.closest('ol').start = z.getAttribute('href')
);
