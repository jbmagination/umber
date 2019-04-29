YAML flow
=========

Query
-----

We cannot sort by view count because it will introduce ambiguous results. We
can check next page as long as current page has at least 1 true high.

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

White
-----

https://youtu.be/kcPc18SG6uA

References
----------

- https://yaml.org/type/bool
- https://yaml.org/type/int
- https://yaml.org/type/str
- https://yaml.org/type/timestamp
- https://yaml.org/type/value
