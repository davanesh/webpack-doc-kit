# syntax

## Namespaces

- [parser](namespaces/parser/index.md)
- [printer](namespaces/printer.md)

## Class: `SourceProcessor`

**`Experimental`**

The generic visitor coordinator (`util/SourceProcessor`) bound to the HTML
`grammar`. Usage:
```
new HtmlSourceProcessor().use({ [NodeType.Element]: (path) => {}, [NodeType.Comment]: { enter, exit } }).process(source, { skip });
```
 exposed as `webpack.html.syntax.SourceProcessor`; unstable API

### Extends

- {SourceProcessor}

### Type Parameters

#### TState

`TState` = {unknown}

### Constructors

#### `new SourceProcessor()`

> Stability: 1 - Experimental

###### TState

`TState` = {unknown}
* Returns: {HtmlSourceProcessor}

**`Experimental`**

### Properties

* `declineDeferredWrites` {object} 
* `deferredWrite` {object} 
* `PrintContext` {PrintContext} 

### Methods

#### `process(input, options)`

##### Call Signature

> Stability: 1 - Experimental

* `input` {string}
* `options` {HtmlProcessOptions|RunState|object|object}
* Returns: {object}

**`Experimental`**

Parse `input` once and fire the visitors in source order. Asking for output
— `mode`, the one thing that names it — makes the same walk print, given a
printer supplied at construction: a
[PrintContext](#printcontext) is created, each node's printer fires into it as the node
finishes, and the result is returned as `{ code, map }`: the serialized output
and, for a caller that named its input with `source` / `content`, the
input->output source map — `map` is `undefined` without one. Asking for
none of it only walks and returns `undefined`. A single parse — printing
never re-parses; all configuration is per-call.

##### Call Signature

> Stability: 1 - Experimental

* `input` {string}
* `options` {HtmlProcessOptions|RunState|object}
* Returns: {object}

**`Experimental`**

Parse `input` once and fire the visitors in source order. Asking for output
— `mode`, the one thing that names it — makes the same walk print, given a
printer supplied at construction: a
[PrintContext](#printcontext) is created, each node's printer fires into it as the node
finishes, and the result is returned as `{ code, map }`: the serialized output
and, for a caller that named its input with `source` / `content`, the
input->output source map — `map` is `undefined` without one. Asking for
none of it only walks and returns `undefined`. A single parse — printing
never re-parses; all configuration is per-call.

##### Call Signature

> Stability: 1 - Experimental

* `input` {string}
* `options` {HtmlProcessOptions|RunState}
* Returns: {undefined}

**`Experimental`**

Parse `input` once and fire the visitors in source order. Asking for output
— `mode`, the one thing that names it — makes the same walk print, given a
printer supplied at construction: a
[PrintContext](#printcontext) is created, each node's printer fires into it as the node
finishes, and the result is returned as `{ code, map }`: the serialized output
and, for a caller that named its input with `source` / `content`, the
input->output source map — `map` is `undefined` without one. Asking for
none of it only walks and returns `undefined`. A single parse — printing
never re-parses; all configuration is per-call.

#### `processAsync(input, options)`

> Stability: 1 - Experimental

* `input` {string}
* `options` {Omit|RunState|object|object}
* Returns: {Promise}

**`Experimental`**

[process](#process), for a caller whose renderer answers asynchronously. Code
generation is synchronous — a printer returns its node's text, it cannot
await one — so the walk leaves a marker where each answer goes, they are
asked for together, and PrintContext.substitute stands each in its
place before the output and its map are built. One parse either way, and
the async boundary stays at the top rather than on every node.
This is the shape `process` itself takes once it is async: how the answers
are waited for is this method's business, so nothing above it changes.

#### `use(types, bucket)`

##### Call Signature

> Stability: 1 - Experimental

###### T

`T` *extends* {number}
* `types` {T[]}
* `bucket` {VisitorBucket}
* Returns: {SourceProcessor}

**`Experimental`**

Register one bucket for several node types, as a map naming each would;
its path takes only the parts those types have.

##### Call Signature

> Stability: 1 - Experimental

* `map` {HtmlVisitorMap}
* Returns: {SourceProcessor}

**`Experimental`**

Register a visitor map; calls accumulate per node type, and each
visitor's path takes only its type's parts.
A bucket is a function (= `{ enter }`) or `{ enter?, exit? }`.

##### Call Signature

> Stability: 1 - Experimental

* `map` {VisitorMapSourceProcessorObject_1}
* Returns: {SourceProcessor}

**`Experimental`**

Register a visitor map built at runtime, keyed by any node type.
