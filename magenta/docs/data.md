JSON
=====

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
