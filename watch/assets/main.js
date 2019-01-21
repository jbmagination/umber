'use strict';
let urlp = new URLSearchParams(location.search);
let plyr = document.getElementById('player');
plyr.autoplay = 1;

async function main()
{
   let trks = await (await fetch('/mauve/assets/data.json')).json();
   let vdeo = trks.find(trck => trck[0] == urlp.get('v'));
   let attr = vdeo[2].split(',');
   plyr.src = 'https://v.redd.it/' + attr[1] + '/audio';
   plyr.poster = 'https://i.redd.it/' + attr[2] + '.jpg';
   document.getElementById('header').textContent = vdeo[3];
   document.title = vdeo[3] + ' | Mauve';
}

main();
