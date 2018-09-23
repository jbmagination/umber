'use strict';
let vd = document.querySelector('video');
browser.runtime.onMessage.addListener(
   () => vd[vd.paused ? 'play' : 'pause']()
);
