YAML flow
=========

Query
-----

We cannot sort by view count because it will introduce ambiguous results. We
can check next page as long as current page has at least 1 true high.

Value type
----------

We need a way to include metadata for artists and albums. The proper way is to
use value types:

~~~yml
Goldfrapp:
   =:
   Seventh Tree:
      =:
      Clowns: yes
~~~

For artist metadata, we include blacklisted and whitelisted songs. For each
entry, we need to include:

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

Result:

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

This syntax does have the drawback of introducing extra lines. A workaround
would be nested lists:

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

but it only works with spacing multiples of 2. Another method would be to
prepend a special character. Some examples:

~~~yml
Goldfrapp:
   -Clowns:
      link: https://youtu.be/aCQO7lUfT0A
      flow: 5,419
      white: now
   Seventh Tree:
      $rel: 2008
      .rel: 2008
      /rel: 2008
      ;rel: 2008
      ?rel: 2008
      ^rel: 2008
      _rel: 2008
      ~rel: 2008
      +rel: 2008
      <rel: 2008
      =rel: 2008
      -rel: 2008
      -white: yes
      Clowns: yes
~~~

but this might be confusing as it puts songs on the same level as albums.

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
