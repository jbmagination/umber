'use strict';

async function main()
{
   let spar = new URLSearchParams(location.search);
   let furl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
   furl.searchParams.set('maxResults', 50);
   furl.searchParams.set('part', 'snippet');

   if (spar.get('t'))
   {
      furl.searchParams.set('pageToken', spar.get('t'));
   }

   // need to cover {YOUR_API_KEY}
   if (!spar.get('p') || spar.get('k').length < 15)
   {
      return;
   }

   furl.searchParams.set('key', spar.get('k'));
   document.getElementById('key').value = spar.get('k');
   furl.searchParams.set('playlistId', spar.get('p'));
   document.getElementById('playlistId').value = spar.get('p');
   let pitm = await (await fetch(furl)).json();
   document.title = pitm.items[0].snippet.channelTitle + ' - Umber Watch';
   pitm.items.forEach(ab => {
      let e_fu = document.createElement('figure');
      let e_a = document.createElement('a');
      let e_i = document.createElement('img');
      let e_d = document.createElement('div');
      let e_fc = document.createElement('figcaption');
      e_a.href = 'https://www.youtube.com/watch?v=' +
         ab.snippet.resourceId.videoId;
      e_i.src = ab.snippet.thumbnails.medium.url;
      // needs to cover &#39;
      e_d.innerHTML = ab.snippet.title;
      e_fc.textContent = new Date(ab.snippet.publishedAt).toDateString();
      e_a.append(e_i, e_d);
      e_fu.append(e_a, e_fc);
      document.getElementById('figures').append(e_fu);
   });

   if (pitm.nextPageToken)
   {
      spar.set('t', pitm.nextPageToken);
      document.getElementById('older').href = '?' + spar;
      document.getElementById('older').textContent = 'older';
   }

   if (pitm.prevPageToken)
   {
      spar.set('t', pitm.prevPageToken);
      document.getElementById('newer').href = '?' + spar;
      document.getElementById('newer').textContent = 'newer';
   }

}

main();
