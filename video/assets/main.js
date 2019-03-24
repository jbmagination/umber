'use strict';

async function main()
{
   let spar = new URLSearchParams(location.search);
   let furl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
   furl.searchParams.set('key', 'AIzaSyCrNB6t8QVxyjXpTSXwpWGCu-kR35Ba8JQ');
   furl.searchParams.set('maxResults', 50);
   furl.searchParams.set('part', 'snippet');
   furl.searchParams.set('playlistId', spar.get('playlistId'));
   document.getElementById('playlistId').value = spar.get('playlistId');

   if (spar.get('pageToken'))
   {
      furl.searchParams.set('pageToken', spar.get('pageToken'));
   }

   let pitm = await (await fetch(furl)).json();
   document.title = pitm.items[0].snippet.channelTitle + ' - Umber Video';
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
      e_fc.textContent = ab.snippet.publishedAt;
      e_a.append(e_i, e_d);
      e_fu.append(e_a, e_fc);
      document.getElementById('figures').append(e_fu);
   });

   if (pitm.nextPageToken)
   {
      spar.set('pageToken', pitm.nextPageToken);
      document.getElementById('next').href = '?' + spar.toString();
   }
   else
   {
      document.getElementById('next').remove();
   }

   if (pitm.prevPageToken)
   {
      spar.set('pageToken', pitm.prevPageToken);
      document.getElementById('prev').href = '?' + spar.toString();
   }
   else
   {
      document.getElementById('prev').remove();
   }

}

main();
