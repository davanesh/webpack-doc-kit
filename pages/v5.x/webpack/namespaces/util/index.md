# util

## Namespaces

- [comparators](namespaces/comparators.md)
- [compileBooleanMatcher](namespaces/compileBooleanMatcher.md)
- [dataURL](namespaces/dataURL.md)
- [extractComments](namespaces/extractComments.md)
- [runtime](namespaces/runtime.md)
- [serialization](namespaces/serialization.md)
- [SetHelpers](namespaces/SetHelpers.md)

## Class: `LazySet`

Like Set but with an addAll method to eventually add items from another iterable.
Access methods make sure that all delayed operations are executed.
Iteration methods deopts to normal Set performance until clear is called again (because of the chance of modifications during iteration).

### Type Parameters

#### T

`T`

### Constructors

#### `new LazySet([iterable])`

###### T

`T`
* `iterable` {Iterable}
* Returns: {LazySet}

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

### Properties

* `size` {number} Returns the number of items after applying any deferred merges.

### Methods

#### `[iterator]()`

* Returns: {SetIterator}

Returns the default iterator over values after forcing pending merges.

#### `add(item)`

* `item` {T}
* Returns: {LazySet}

Adds a single item immediately to the concrete backing set.

#### `addAll(iterable)`

* `iterable` {LazySet|Iterable}
* Returns: {LazySet}

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

#### `clear()`

* Returns: {void}

Removes all items and clears every deferred merge queue.

#### `delete(value)`

* `value` {T}
* Returns: {boolean}

Deletes an item after first materializing any deferred additions that may
contain it.

#### `entries()`

* Returns: {SetIterator}

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

#### `forEach(callbackFn, thisArg)`

###### K

`K`
* `callbackFn` {object}
* `thisArg` {K}
* Returns: {void}

Iterates over every item after forcing pending merges and switching to
eager mode for correctness during iteration.

#### `has(item)`

* `item` {T}
* Returns: {boolean}

Checks whether an item is present after applying any deferred merges.

#### `keys()`

* Returns: {SetIterator}

Returns the key iterator, eagerly materializing pending merges first.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes the fully materialized set contents into webpack's object
serialization stream.

#### `values()`

* Returns: {SetIterator}

Returns the value iterator, eagerly materializing pending merges first.

#### Static method: `deserialize(__namedParameters)`

###### T

`T`
* `__namedParameters` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {LazySet}

Restores a `LazySet` from serialized item data.

***

## Class: `RequestShortener`

Shortens absolute or verbose request strings so diagnostics and stats output
can be rendered relative to a chosen base directory.

### Constructors

#### `new RequestShortener(dir[, associatedObjectForCache])`

* `dir` {string}
* `associatedObjectForCache` {object}
* Returns: {RequestShortener}

Binds a context-aware shortening function to the provided directory and
optional cache owner.

### Properties

* `contextify` {object}

### Methods

#### `shorten([request])`

* `request` {string}
* Returns: {string}

Returns a request string rewritten relative to the configured directory
when one is provided.

***

## Class: `SortableSet`

A subset of Set that offers sorting functionality

### Extends

- {Set}

### Type Parameters

#### T

`T`

### Constructors

#### `new SortableSet([initialIterable][, defaultSort])`

###### T

`T`
* `initialIterable` {Iterable}
* `defaultSort` {SortFunction}
* Returns: {SortableSet}

Create a new sortable set

### Properties

* `[toStringTag]` {string}
* `size` {number} 
* `[species]` {SetConstructor}

### Methods

#### `[iterator]()`

* Returns: {SetIterator}

Iterates over values in the set.

#### `add(value)`

* `value` {T}
* Returns: {this}

Appends a new element with a specified value to the end of the Set.

#### `clear()`

* Returns: {void}

#### `delete(value)`

* `value` {T}
* Returns: {boolean} Returns true if an element in the Set existed and has been removed, or false if the element does not exist.

Removes a specified value from the Set.

#### `entries()`

* Returns: {SetIterator}

Returns an iterable of [v,v] pairs for every value `v` in the set.

#### `forEach(callbackfn[, thisArg])`

* `callbackfn` {object}
* `thisArg` {any}
* Returns: {void}

Executes a provided function once per each value in the Set object, in insertion order.

#### `getFromCache(fn)`

###### R

`R`
* `fn` {object}
* Returns: {R}

Get data from cache

#### `getFromUnorderedCache(fn)`

###### R

`R`
* `fn` {object}
* Returns: {R}

Get data from cache (ignoring sorting)

#### `has(value)`

* `value` {T}
* Returns: {boolean} a boolean indicating whether an element with the specified value exists in the Set or not.

#### `keys()`

* Returns: {SetIterator}

Despite its name, returns an iterable of the values in the set.

#### `sort()`

* Returns: {SortableSet}

#### `sortWith([sortFn])`

* `sortFn` {SortFunction}
* Returns: {void}

Sort with a comparer function

#### `toJSON()`

* Returns: {T[]}

Returns the raw array.

#### `values()`

* Returns: {SetIterator}

Returns an iterable of values in the set.

***

## `cleverMerge`

> `const` **cleverMerge**: {object}

#### T

`T`

#### O

`O`
* `first` {null|T}
* `second` {null|O}
* Returns: {T|O|T|O}

***

## `createHash`

> `const` **createHash**: {object}

* `algorithm` {HashFunction}
* Returns: {Hash}

***

## `getUndoPath`

> `const` **getUndoPath**: {object}

* `filename` {string}
* `outputPath` {string}
* `enforceRelative` {boolean}
* Returns: {string}

***

## `makeSerializable`

> `const` **makeSerializable**: {object}

#### T

`T` *extends* {object}
* `Constructor` {T}
* `request` {string|string|string|null|string[]}
* `name` {null|string}
* Returns: {void}

***

## `compileBooleanMatcher(map)`

* `map` {Record}
* Returns: {boolean|object}
