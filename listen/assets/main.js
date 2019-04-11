'use strict';
let lstn = document.getElementById('listen');

async function main() {
   let vdeo = (await (
      await fetch('/umber/radio/assets/data.json')
   ).json()).find(
      trck => trck[0] == new URLSearchParams(location.search).get('v')
   );
   let attr;

   switch (vdeo[2].slice(0, 2)) {
   case 'gh':
      attr = vdeo[2].slice(3);
      lstn.src = 'https://github.com/cup/umber/releases/download/' +
      attr + '/' + vdeo[0];
      lstn.poster = 'https://github.com/cup/umber/releases/download/' +
      attr + '/image.jpg';
      break;
   case 'rd':
      attr = vdeo[2].split('_');
      lstn.src = 'https://v.redd.it/' + attr[1] + '/audio';
      lstn.poster = 'https://i.redd.it/' + attr[2] + '.jpg';
   }

   document.title = vdeo[3] + ' - Umber Listen';
   document.getElementById('artist').textContent = vdeo[3];
   document.getElementById('date').textContent = 'released ' + vdeo[1] +
   ' - posted ' + new Date(vdeo[0] * 1000).toDateString();
}

main();
