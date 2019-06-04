'use strict';
const gei = dd => document.getElementById(dd);
const lstn = gei('listen');
const path = 'https://github.com/cup/umber/releases/download';

fetch('/umber/radio/assets/data.json').then(ee => ee.json()).then(ee => {
   const vpar = new URLSearchParams(location.search).get('v');
   const vdeo = ee.find(trck => trck[0] == vpar);
   const dstr = new Date(vdeo[0] * 1000).toDateString();

   lstn.src = path + '/' + vdeo[2].slice(2) + '/' + vdeo[0];
   lstn.poster = path + '/' + vdeo[2].slice(2) + '/image.jpg';
   document.title = vdeo[3] + ' - Umber Listen';
   gei('artist').textContent = vdeo[3];
   gei('date').textContent = 'released ' + vdeo[1] + ' - posted ' + dstr;
});
