'use strict';
document.getElementById('pauseVideo').click();
isCheckedNextTrack();
isCheckedNextTrackLast(nextVideoNo, totalSongCount);
playVideoById(videoID, videoMediaSource, videoSongUrl);
location.hash = nextVideoNo;
scrollBy(0, -320);
