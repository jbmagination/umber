YAML flow
=========

Listed songs
------------

Bar video is:

https://youtu.be/kcPc18SG6uA

Based on bar video, bar number is:

6 million

views per year. Any song with greater or equal views per year is blacklisted.
Any album containing a blacklisted song is also blacklisted. All other songs
are whitelisted. Document all blacklisted songs, and associated albums.
Document whitelisted song with highest views per year, and associated album.

Query
-----

We cannot sort by view count because it will introduce ambiguous results. We
can check next page as long as current page has at least 1 true blacklisted
song.

Null type
---------

Currently we present blacklisted albums like this:

~~~yml
Justin Timberlake:
   The 20/20 Experience:
      Mirrors:
      Suit & Tie:
      Tunnel Vision:
      =:
         rel: 2013-03-15
         white: no
   =:
      Mirrors:
         flow: 90,408,909
         link: https://youtu.be/uuZE_IRwLNI
~~~

However this layout is somewhat awkward as the songs all have **null** value,
and will always have that value. We should give them an explicitly "black"
value. This will allow to remove the "white" album key.

It has a benefit with "white" albums as well. When we first import "white"
albums all songs will be labeled "white" or "length", which we can then change
to "good", "bad" or "duplicate". Searching for unrated songs will be easier as
we can just search for "white". The question is how do we implement this. We
could do strings or numbers:

number | current | string
-------|---------|-------
0      |         | black
1      |         | white
2      | dup     | dup
3      | len     | len
4      | no      | bad
5      | yes     | good

I am leaning towards numbers but the drawback is they only have meaning once
you refer to the table, or once you have memorized the table. To get a feel
for them, here is example with strings:

~~~yml
Justin Timberlake:
   The 20/20 Experience:
      Mirrors: black
      Suit & Tie: black
      Tunnel Vision: black
      =:
         rel: 2013-03-15
   =:
      Mirrors:
         flow: 90,408,909
         link: https://youtu.be/uuZE_IRwLNI
~~~

and with numbers:

~~~yml
Justin Timberlake:
   The 20/20 Experience:
      Mirrors: 0
      Suit & Tie: 0
      Tunnel Vision: 0
      =:
         rel: 2013-03-15
   =:
      Mirrors:
         flow: 90,408,909
         link: https://youtu.be/uuZE_IRwLNI
~~~

another option would be to keep the current system, but use the canonical null
symbol:

~~~yml
Justin Timberlake:
   The 20/20 Experience:
      Mirrors: ~
      Suit & Tie: ~
      Tunnel Vision: ~
      =:
         rel: 2013-03-15
         white: no
   =:
      Mirrors:
         flow: 90,408,909
         link: https://youtu.be/uuZE_IRwLNI
~~~

This gives songs on "black" albums a permanent value, and songs on "white"
albums a temporary one to use with searching. After some thinking I do not
like the new strings as they are too long. I not like the numbers either, and
I have never wanted a numbers system. While much less characters I do not wish
to sacrifice clarity. The explict **null** is nice though so I will implement
that.

Value type
----------

We need a way to include metadata for artists and albums. For artist metadata,
we include blacklisted and whitelisted songs. For each entry, we need to
include:

entity | attribute | value
-------|-----------|------
1      | title     | str
2      | link      | str
3      | flow      | int
4      | white     | timestamp

For album metadata, we need to include:

entity | attribute | value
-------|-----------|----------
1      | rel       | timestamp
2      | white     | bool

We could put metadata in nested lists:

~~~yml
Goldfrapp:
- - title: Clowns
    link: https://youtu.be/aCQO7lUfT0A
    flow: 5,419
    white: now
- Seventh Tree:
  - - rel: 2008
      white: yes
  - Clowns: yes
~~~

but it only works with spacing multiples of 2. We could put metadata at same
depth and decorate:

~~~yml
Goldfrapp:
   _Clowns:
      link: https://youtu.be/aCQO7lUfT0A
      flow: 5419
      white: now
   Seventh Tree:
      _rel: 2008
      _white: yes
      Clowns: yes
~~~

but this might be confusing as it puts songs on the same level as albums. We
could move the albums and songs deeper:

~~~yml
Goldfrapp:
   white:
      Clowns:
         link: https://youtu.be/aCQO7lUfT0A
         flow: 5419
         white: now
   =:
      Seventh Tree:
         rel: 2008
         white: yes
         =:
            Clowns: yes
~~~

or move the metadata deeper:

~~~yml
Goldfrapp:
   =:
      Clowns:
         link: https://youtu.be/aCQO7lUfT0A
         flow: 5,419
         white: now
   Seventh Tree:
      =:
         rel: 2008
         white: yes
      Clowns: yes
~~~

In both cases extra lines are created. However with the deeper metadata we are
left with less lines and less characters overall. Instead of putting metadata
first, we could put it last:

~~~yml
Goldfrapp:
   Seventh Tree:
      Clowns: yes
      =:
         rel: 2008
         white: yes
   =:
      Clowns:
         link: https://youtu.be/aCQO7lUfT0A
         flow: 5,419
         white: now
~~~

This creates an awkward gap between the albums and artist metadata, but it
makes for better flow. It puts what is most important first, followed by
extraneous data.

References
----------

- https://yaml.org/type/null
- https://yaml.org/type/value
