GitHub
======

Create annotated tag
--------------------

~~~sh
git tag -F - 1000000000 <<eof
ARTIST - ALBUM
1000000001: SONG
1000000002: SONG
eof
git push --tags
~~~

Length
------

The issue right now is that our GitHub records are too long. Currently in one
case the line is 145 characters. The artist and song title is hard to do
anything about. We could radix-64 encode the year, but it saves 0 characters:

~~~py
>>> strb(2019, 64)
'VZ'
~~~

We can radix-64 encode the post date, which will save only 2 characters:

~~~py
>>> strb(1554855953, 64)
'1ShJWH'
~~~

We have most potential with **video_id**. However first some questions need to
be answered. First, some of our uploaded files are M4A and some MP3. If we
include a file extension in our uploaded files it makes for more clarity, but
then we need to include that data in our **video_id**. After some testing
everything seems to work fine without an extension, so we should do that. Note
that images can be be called **image.jpg**. That takes us from this:

~~~
gh_harold-budd-through-hill/03-geography_great_valley_of_gongs.m4a
~~~

to this:

~~~
gh_harold-budd-through-hill/03-geography_great_valley_of_gongs
~~~

Next, we want songs under the same album to be listed under the same release.
This prevents duplicate cover art. However this means we need to store the tag
and the filename. To deal with this, we can set the **video_id** as the tag:

~~~
gh_1000000000
~~~

then use the post date to differentiate songs on the same album.

Tag message vs release description
----------------------------------

For each release, we need to be putting artist, album and song listings in the
description. What is confusing is that GitHub has 2 ways to do this:

- https://developer.github.com/v3/git/tags#create-a-tag-object
- https://developer.github.com/v3/repos/releases#create-a-release

If we go with releases, we can create them using the website including the tag
name, title and description. However releases have some drawbacks:

1. release title and description cannot be searched via the website
2. `git ls-remote` only lists the tag names
3. release titles and descriptions are not available via the local repo either

The only way to access that data is via the GitHub API. In regard to tags,
GitHub website has poor support. If you visit the tag page no option is
presented to create a new tag:

https://github.com/cup/umber/tags

If you visit the release page an option is presented to create a new release,
which will also create a new tag if need be:

https://github.com/cup/umber/releases

What is further confusing is that all tags are labeled as releases, even if no
release exists for that tag:

https://github.com/cup/pear/releases/tag/3.3.0

Finally, the website offers no way to write a tag message, only a tag name.
Note that a tag message is different from a release title or description.
