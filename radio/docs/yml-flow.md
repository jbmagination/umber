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

we need a way to include flow data with each artist. the proper way is to use
a value type:

~~~yml
Goldfrapp:
   =:
   Seventh Tree:
      Clowns: yes
~~~

for each song record, we need to include:

1. title
2. URL
3. VPY
4. ETA

### array=1, newline=1, object=1

~~~yml
Goldfrapp:
   =:
   -
      Clowns:
         URL: https://youtu.be/aCQO7lUfT0A
         VPY: 5,419
         ETA: now
   Seventh Tree:
      Clowns: yes
~~~

I dislike the depth.

### array=1, newline=1, object=0

~~~yml
Goldfrapp:
   =:
   -
      Clowns:
      URL: https://youtu.be/aCQO7lUfT0A
      VPY: 5,419
      ETA: now
   Seventh Tree:
      Clowns: yes
~~~

I dislike the extra line.

### array=1, newline=0, object=0

~~~yml
Goldfrapp:
   =:
   - Clowns:
     URL: https://youtu.be/aCQO7lUfT0A
     VPY: 5,419
     ETA: now
   Seventh Tree:
      Clowns: yes
~~~

This only works with 2 space indentation.

### array=0, newline=0, object=1

~~~yml
Goldfrapp:
   =:
      Clowns:
         URL: https://youtu.be/aCQO7lUfT0A
         VPY: 5,419
         ETA: now
   Seventh Tree:
      Clowns: yes
~~~

I dislike the depth.

### array=1, newline=0, object=1

~~~yml
Goldfrapp:
   =:
   - Clowns:
      URL: https://youtu.be/aCQO7lUfT0A
      VPY: 5,419
      ETA: now
   Seventh Tree:
      Clowns: yes
~~~

This is the winner. It works with 3 space indentation.

References
----------

- https://yaml.org/type/bool
- https://yaml.org/type/value
