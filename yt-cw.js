function fo(go) {return document.querySelector(go)}
ho = document.createElement('iframe');
ho.src = fo('link[itemprop=embedURL]').href + '?autoplay=1';
ho.className = 'player-height player-width';
fo('#player-api').appendChild(ho);
fo('#player').className = 'content-alignment watch-small';
fo('#player-unavailable').style.display = 'none';
