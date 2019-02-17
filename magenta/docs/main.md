Main
=====

"img" over "iframe"
-------------------

- `iframe` requires embedly in some cases
- Killing embeds makes loading faster
- Links will allow use of CSS `:focus` or `:active`
- Not all links can be embedded
- Using embeds breaks keyboard shortcuts

Bandcamp & SoundCloud
---------------------

No way to autoplay on mobile. Also MP3 transparency is at 175 kbit/s, and
these only uses 128:

~~~
$ youtube-dl -F http://fourtet.bandcamp.com/track/the-space-of-two-weeks
[Bandcamp] the-space-of-two-weeks: Downloading webpage
[info] Available formats for 3873199620:
format code  extension  resolution note
mp3-128      mp3        audio only mp3  @128k
~~~

~~~
$ youtube-dl -F soundcloud.com/wyeoak/mary-is-mary
[soundcloud] wyeoak/mary-is-mary: Resolving id
[info] Available formats for 312419154:
format code       extension  resolution note
hls_mp3_128_url   mp3        audio only audio@128k
~~~

YouTube
-------

YouTube offers these image formats:

Resolution | URL
-----------|-----------------------------------------------------
1280 x 720 | https://i.ytimg.com/vi/Lq3qF-EUXfo/maxresdefault.jpg
1280 x 720 | https://i.ytimg.com/vi/Lq3qF-EUXfo/maxres3.jpg
640 x 480  | https://i.ytimg.com/vi/Lq3qF-EUXfo/sddefault.jpg
640 x 480  | https://i.ytimg.com/vi/Lq3qF-EUXfo/sd3.jpg
480 x 360  | https://i.ytimg.com/vi/Lq3qF-EUXfo/hqdefault.jpg
480 x 360  | https://i.ytimg.com/vi/Lq3qF-EUXfo/hq3.jpg
320 x 180  | https://i.ytimg.com/vi/Lq3qF-EUXfo/mqdefault.jpg
320 x 180  | https://i.ytimg.com/vi/Lq3qF-EUXfo/mq3.jpg
120 x 90   | https://i.ytimg.com/vi/Lq3qF-EUXfo/default.jpg
120 x 90   | https://i.ytimg.com/vi/Lq3qF-EUXfo/3.jpg

We need to start by eliminating all the **maxres** and **default** URLs, as
they fail in some cases:

~~~
$ curl -I https://i.ytimg.com/vi/2Lpw3yMCWro/maxres3.jpg
HTTP/2 404

$ curl -I https://i.ytimg.com/vi/2Lpw3yMCWro/maxresdefault.jpg
HTTP/2 404

$ curl -I https://i.ytimg.com/vi/2Lpw3yMCWro/sd3.jpg
HTTP/2 200

$ curl -I https://i.ytimg.com/vi/2Lpw3yMCWro/sddefault.jpg
HTTP/2 404
~~~

Also **default** produces an image different from other API versions:

- https://i.ytimg.com/vi/SIBRmK74Tzk/sd3.jpg
- https://i.ytimg.com/vi/SIBRmK74Tzk/sddefault.jpg

Our minimum resolution is 426 x 240, so that leaves us with **sd3** and
**hq3**. **hq3** displays significant artifacts, so we end with **sd3**.
We cannot trust the source of the page, as some videos that offer the higher
resolutions appear to only offer the lower resolutions:

~~~sh
$ curl -s https://www.youtube.com/watch?v=Lq3qF-EUXfo |
> grep -E -o '/(maxres|sd|hq|mq|[[:digit:]])[^/]*\.jpg' | sort -u
/hqdefault.jpg
~~~

Note **sd3** fails with some videos:

- https://i.ytimg.com/vi/KbqzJYml520/sd3.jpg
- https://i.ytimg.com/vi/KbqzJYml520/hq3.jpg

but these videos are 360p or lower resolution. Typically we will be able to
find alternative videos of higher quality.
