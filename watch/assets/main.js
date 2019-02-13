'use strict';
const plyr = document.getElementById('player');

async function main()
{
   const vdeo = (await (await fetch('/mauve/assets/1.json')).json()).find(
      trck => trck[0] == new URLSearchParams(location.search).get('v')
   );
   const attr = vdeo[2].split('/');
   switch (attr[0]) {
   case 'g':
      plyr.src = 'https://github.com/cup/mauve/releases/download/' +
      attr[1] + '/' + attr[2];
      plyr.poster = 'https://github.com/cup/mauve/releases/download/' +
      attr[1] + '/image.jpg';
      break;
   case 'r':
      plyr.src = 'https://v.redd.it/' + attr[1] + '/audio';
      plyr.poster = 'https://i.redd.it/' + attr[2] + '.jpg';
   }
   document.getElementById('header').textContent = `${vdeo[3]} (${vdeo[1]})`;
   document.title = `${vdeo[3]} (${vdeo[1]}) - Mauve`;
}

main();
