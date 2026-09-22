# syntax

## Namespaces

- [parser](namespaces/parser/index.md)
- [printer](namespaces/printer.md)

## Class: `SourceProcessor`

**`Experimental`**

The generic visitor coordinator (`util/SourceProcessor`) bound to the CSS
`grammar`. All configuration is per `process` call. `process(src, { minimize:
true })` returns `{ code, map }` — the safely-minified serialization (built by
the same walk that fires visitors) and its source map; without `minimize` it
just walks and returns `undefined`. Babel-style usage:
```
new SourceProcessor().use({ [NodeType.AtRule]: (path) => {} }).process(source, { skip });
```
 exposed as `webpack.css.syntax.SourceProcessor`; unstable API

### Extends

- {SourceProcessorClass}

### Constructors

#### `new SourceProcessor()`

> Stability: 1 - Experimental

* Returns: {SourceProcessorSyntaxClass_2}

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
* `options` {CssProcessOptions|object|object}
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
* `options` {CssProcessOptions|object}
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
* `options` {CssProcessOptions}
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
* `options` {Omit|object|object}
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

#### `use(map)`

> Stability: 1 - Experimental

* `map` {VisitorMap}
* Returns: {SourceProcessorClass}

**`Experimental`**

Register a Babel-style visitor map; calls accumulate per node type.
A bucket is a function (= `{ enter }`) or `{ enter?, exit? }`.
