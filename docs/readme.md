Docs
=====

JSON
-----

JavaScript does not respect numeric key order:

~~~js
q = { 2: 'two', 1: 'one', 0: 'zero' }
Object [ "zero", "one", "two" ]

q = { '2': 'c', '1': 'b', '0': 'a' }
Object [ "zero", "one", "two" ]
~~~

only string key order:

~~~js
q = { two: 2, one: 1, zero: 0 }
Object { two: 2, one: 1, zero: 0 }
~~~

so if we want objects that are sortable, we need to use string keys or numeric
values.
