Notes
=====

Bandcamp
--------

No way to autoplay on mobile. Also MP3 transparency is at 175 kbit/s, and
Bandcamp only uses 128:

~~~
$ youtube-dl -F http://fourtet.bandcamp.com/track/the-space-of-two-weeks
[Bandcamp] the-space-of-two-weeks: Downloading webpage
[info] Available formats for 3873199620:
format code  extension  resolution note
mp3-128      mp3        audio only mp3  @128k
~~~

"img" over "iframe"
-------------------

- `iframe` requires embedly in some cases
- I did not utilize embeds on Reddit even though they are offered
- Killing embeds makes loading faster
- Links will allow use of CSS `:focus` or `:active`
- Not all links can be embedded
- Using embeds breaks keyboard shortcuts

MusicBrainz
-----------

When adding musicbrainz release, make sure to include:

- release title
- artist
- type
- status
- date
- country
- label
- release link
- format
- track titles
- track lengths

Sort
-----

JavaScript does not respect numeric key order:

~~~js
q = {2: 'c', 1: 'b', 0: 'a'}
Object [ "a", "b", "c" ]

q = {'2': 'c', '1': 'b', '0': 'a'}
Object [ "a", "b", "c" ]
~~~

only string key order:

~~~js
q = {'z': 'c', 'y': 'b', 'x': 'a'}
Object { z: "c", y: "b", x: "a" }
~~~

so if we want objects that are sortable, we need to use string keys or numeric
values.

SoundCloud
----------

No way to autoplay on mobile. Also, MP3 transparency is at 175 kbit/s,
SoundCloud only uses 128:

~~~
$ youtube-dl -F soundcloud.com/wyeoak/mary-is-mary
[soundcloud] wyeoak/mary-is-mary: Resolving id
[info] Available formats for 312419154:
format code       extension  resolution note
hls_mp3_128_url   mp3        audio only audio@128k
~~~

"artworks" image:

https://soundcloud.com/ideoforms/windows-95-startup-sound

"avatars" image:

https://soundcloud.com/pdis_inpartmaint/harold-budd-perhaps-moss
