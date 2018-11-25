'use strict';
document.querySelectorAll('p, li, td').forEach(z =>
   z.innerHTML = z.innerHTML.replace(
      RegExp('https?://[^ "<]+(?![^<>]*(>|</a>))', 'g'), '<a href="$&">$&</a>'
   )
);
