# syntax

## Namespaces

- [NodeType](namespaces/NodeType.md)

## Class: `SourceProcessor`

**`Experimental`**

The generic visitor coordinator (`util/SourceProcessor`) bound to the HTML
`grammar`. Babel-style usage:
```
new SourceProcessor().use({ [NodeType.Element]: (path) => {}, [NodeType.Comment]: { enter, exit } }).process(source, { skip });
```
 exposed as `webpack.html.syntax.SourceProcessor`; unstable API

### Extends

- {SourceProcessorClass}

### Constructors

#### `new SourceProcessor()`

> Stability: 1 - Experimental

* Returns: {SourceProcessorSyntaxClass_1}

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
* `options` {HtmlProcessOptions|object|object}
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
* `options` {HtmlProcessOptions|object}
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
* `options` {HtmlProcessOptions}
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

***

## `A`

> **A**: {object}

### Type Declaration

* `node` {number}
* `parent` {number}
* `attributeAt`
* `attributeCount`
* `attributeName`
* `attributeNameEnd`
* `attributeNameStart`
* `attributes`
* `attributeValue`
* `attributeValueEnd`
* `attributeValueStart`
* `children`
* `closeTag`
* `contentEnd`
* `data`
* `doctypeName`
* `doctypePublicId`
* `doctypeSystemId`
* `end`
* `findAttribute`
* `firstChild`
* `nameEnd`
* `namespace`
* `nextSibling`
* `openTag`
* `parentOf`
* `piTarget`
* `selfClosing`
* `skipChildren`
* `source`
* `sourceClosed`
* `sourceSpanAt`
* `start`
* `tagEnd`
* `tagName`
* `templateContent`
* `type`

***

## `askEmbeddedRenderer`

> **askEmbeddedRenderer**: {object}

* `render` {object}
* `hole` {object}
* `reported` {EmbeddedSourceResult[]}
* Returns: {Promise}

***

## `baseTag`

> **baseTag**: {object}

* `base` {string|object}
* Returns: {string}

***

## `buildHeadTags`

> **buildHeadTags**: {object}

* `opts` {OutputHtmlOptions}
* Returns: {string}

***

## `collectEmbeddedDiagnostics`

> **collectEmbeddedDiagnostics**: {object}

* `reported` {object[]}
* Returns: {object}

***

## `decodeEntities`

> **decodeEntities**: {_functionSyntax}

***

## `EMBEDDED_LANGUAGES`

> **EMBEDDED\_LANGUAGES**: {string[]}

***

## `embeddedText`

> **embeddedText**: {object}

* `answer` {string|object}
* Returns: {undefined|string}

***

## `escapeAttribute`

> **escapeAttribute**: {object}

* `s` {string}
* `delimiter` {number}
* `minimal` {boolean}
* Returns: {string}

***

## `escapeText`

> **escapeText**: {object}

* `s` {string}
* Returns: {string}

***

## `isAsciiWhitespace`

> **isAsciiWhitespace**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `metaTag`

> **metaTag**: {object}

* `name` {string}
* `content` {string}
* Returns: {string}

***

## `NS_HTML`

> **NS\_HTML**: {0}

***

## `NS_MATHML`

> **NS\_MATHML**: {1}

***

## `NS_SVG`

> **NS\_SVG**: {2}

***

## `parseCssUrls`

> **parseCssUrls**: {object}

* `input` {string}
* Returns: {string|number|number[]}

***

## `parseHtml`

> **parseHtml**: {object}

* `input` {string}
* `pos` {number}
* `options` {HtmlParseOptions}
* Returns: {number}

***

## `parseMsapplicationTask`

> **parseMsapplicationTask**: {object}

* `input` {string}
* Returns: {string|number|number[]}

***

## `parseSrc`

> **parseSrc**: {object}

* `input` {string}
* Returns: {string|number|number[]}

***

## `parseSrcset`

> **parseSrcset**: {object}

* `input` {string}
* Returns: {string|number|number[]}

***

## `pickTransforms`

> **pickTransforms**: {object}

* `options` {object}
* Returns: {undefined|HtmlTransformOptions}

***

## `printer`

> **printer**: {object}

* `path` {object}
* `writer` {PrintContext}
* Returns: {string}

***

## `QUOTE_DOUBLE`

> **QUOTE\_DOUBLE**: {1}

***

## `QUOTE_NONE`

> **QUOTE\_NONE**: {0}

***

## `QUOTE_SINGLE`

> **QUOTE\_SINGLE**: {2}

***

## `SVG_TAG_ADJUST`

> **SVG\_TAG\_ADJUST**: {Record}

***

## `tokenize`

> **tokenize**: {object}

* `input` {string}
* `pos` {number}
* `callbacks` {HtmlTokenCallbacks}
* Returns: {number}
