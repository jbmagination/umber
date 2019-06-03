'use strict';
let lstn = document.getElementById('listen');

(async () => {
   let vdeo = (await (await fetch('/umber/radio/assets/data.json')).json())
   .find(trck => trck[0] == new URLSearchParams(location.search).get('v'));

   let attr = vdeo[2].slice(2);

   lstn.src = 'https://github.com/cup/umber/releases/download/' +
   attr + '/' + vdeo[0];

   lstn.poster = 'https://github.com/cup/umber/releases/download/' +
   attr + '/image.jpg';

   document.title = vdeo[3] + ' - Umber Listen';
   document.getElementById('artist').textContent = vdeo[3];

   document.getElementById('date').textContent = 'released ' + vdeo[1] +
   ' - posted ' + new Date(vdeo[0] * 1000).toDateString();
})();

