'use strict';

function qs(sct)
{
   return document.querySelector(sct);
}

function dr(s1)
{
   const h1 = s1 / (60 * 60) | 0;
   s1 %= 60 * 60;
   const m1 = s1 / 60 | 0;
   s1 %= 60;
   const h2 = h1 ? h1 + ':' : '';
   const m2 = h1 && m1 < 10 ? '0' + m1 : m1;
   const s2 = s1 < 10 ? '0' + s1 : s1;
   return h2 + m2 + ':' + s2;
}

async function main()
{
   const vd = qs('[itemprop="videoId"]').content;
   const fm = document.createElement('iframe');
   fm.src = 'embed/' + vd + '?autoplay=1';
   fm.className = 'player-height player-width';
   fm.setAttribute('allowFullScreen', '');
   qs('#player-api').append(fm);
   qs('#player-unavailable').style.display = 'none';
   qs('#player').className = 'content-alignment watch-small';
   qs('#watch7-sidebar-modules').innerHTML =
      '<ul id="watch-related" class="video-list"></ul>';
   const ft = await fetch('get_video_info?asv=3&eurl=https://.&video_id=' + vd);
   const vn = new URLSearchParams(await ft.text());
   vn.get('rvs').split(',').forEach(xr => {
      const qa = new URLSearchParams(xr);
      if (qa.get('list'))
      {
         return;
      }
      qs('ul#watch-related').innerHTML +=
      `<li class="video-list-item">
         <a href="watch?v=${qa.get('id')}">
            <span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related">
               <img src="//i.ytimg.com/vi/${qa.get('id')}/sd3.jpg">
               <span class="video-time">${dr(qa.get('length_seconds'))}</span>
            </span>
            <span class="title">${qa.get('title')}</span>
            <span class="stat">by ${qa.get('author')}</span>
         </a>
      </li>`;
   });
}

main();
