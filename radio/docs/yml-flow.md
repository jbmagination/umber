YAML flow
=========

Low
-----

https://youtu.be/kcPc18SG6uA

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
1      | release   | timestamp
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
         release: 2008
         white: yes
      Clowns: yes
~~~

References
----------

- https://yaml.org/type/bool
- https://yaml.org/type/int
- https://yaml.org/type/str
- https://yaml.org/type/timestamp
- https://yaml.org/type/value
