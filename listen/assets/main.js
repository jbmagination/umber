'use strict';
const lstn = document.getElementById('listen');

async function main()
{
   const vdeo = (await (
      await fetch('/umber/radio/assets/data.json')
   ).json()).find(
      trck => trck[0] == new URLSearchParams(location.search).get('v')
   );
   const attr = vdeo[2].split('/');
   switch (attr[0]) {
   case 'g':
      lstn.src = 'https://github.com/cup/umber/releases/download/' +
      attr[1] + '/' + attr[2];
      lstn.poster = 'https://github.com/cup/umber/releases/download/' +
      attr[1] + '/image.jpg';
      break;
   case 'r':
      lstn.src = 'https://v.redd.it/' + attr[1] + '/audio';
      lstn.poster = 'https://i.redd.it/' + attr[2] + '.jpg';
   }
   document.title = vdeo[3] + ' - Umber Listen';
   document.getElementById('artist').textContent = vdeo[3];
   document.getElementById('date').textContent = 'released ' + vdeo[1] +
   ' - posted ' + new Date(vdeo[0] * 1000).toDateString();
}

main();
