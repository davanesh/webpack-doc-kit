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

* `PrintContext` {PrintContext} 

### Methods

#### `process(input, options)`

##### Call Signature

> Stability: 1 - Experimental

* `input` {string}
* `options` {HtmlProcessOptions|object}
* Returns: {object}

**`Experimental`**

Parse `input` once and fire the visitors in source order. With `minimize`
(and a printer supplied at construction) the same walk also prints — a
[PrintContext](#printcontext) is created, each node's printer fires into it as the node
finishes, and the result is returned as `{ code, map }`: the serialized output
and its input->output source map, always, independent of the pipeline's own
source-map setting (`source` / `content` name the map's input). Without
`minimize` it only walks and returns `undefined`. A single parse — printing
never re-parses; all configuration is per-call.

##### Call Signature

> Stability: 1 - Experimental

* `input` {string}
* `options` {HtmlProcessOptions}
* Returns: {undefined}

**`Experimental`**

Parse `input` once and fire the visitors in source order. With `minimize`
(and a printer supplied at construction) the same walk also prints — a
[PrintContext](#printcontext) is created, each node's printer fires into it as the node
finishes, and the result is returned as `{ code, map }`: the serialized output
and its input->output source map, always, independent of the pipeline's own
source-map setting (`source` / `content` name the map's input). Without
`minimize` it only walks and returns `undefined`. A single parse — printing
never re-parses; all configuration is per-call.

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
* `selfClosing`
* `skipChildren`
* `source`
* `start`
* `tagEnd`
* `tagName`
* `templateContent`
* `type`

***

## `decodeEntities`

> **decodeEntities**: {_functionSyntax}

***

## `escapeAttribute`

> **escapeAttribute**: {object}

* `s` {string}
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
