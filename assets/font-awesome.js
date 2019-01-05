'use strict';
document.querySelectorAll('h2').forEach(z => {
   let e_a = document.createElement('a');
   e_a.className = 'fa fa-link fa-pull-right';
   e_a.href = '#' + z.id;
   z.append(e_a);
});
