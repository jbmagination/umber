'use strict';

(async () => {
   let chan = await (await fetch('/umber/tv/assets/data.json')).json();

   chan.forEach(ab => {
      let e_a = document.createElement('a');
      let e_d = document.createElement('div');
      let e_fc = document.createElement('figcaption');
      let e_fu = document.createElement('figure');
      let e_i = document.createElement('img');
      let spar = new URLSearchParams;
      spar.set('c', ab[2]);

      // need final "/" to maintain HTTPS
      e_a.href = '/umber/watch/?' + spar;
      e_i.src = 'https://yt3.ggpht.com/' + ab[3];

      // needs to cover &#39;
      e_d.innerHTML = ab[1];
      e_fc.textContent = 'posted ' + new Date(ab[0] * 1000).toDateString();
      e_a.append(e_i, e_d);
      e_fu.append(e_a, e_fc);
      document.getElementById('figures').append(e_fu);
   });
})();
