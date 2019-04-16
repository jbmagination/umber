'use strict';
var msrc = new MediaSource;
var vdeo = document.createElement('video');
vdeo.controls = 1;
vdeo.src = URL.createObjectURL(msrc);
document.querySelector('.expando').replaceWith(vdeo);

async function abuf(evnt, mime, path) {
   evnt.target.addSourceBuffer(mime).appendBuffer(await (
      await fetch(document.querySelector('.link').dataset.url + path)
   ).arrayBuffer());
}

msrc.addEventListener('sourceopen', function(evnt) {
   abuf(evnt, 'audio/mp4', '/audio');
   abuf(evnt, 'video/mp4', '/DASH_2_4_M');
});
