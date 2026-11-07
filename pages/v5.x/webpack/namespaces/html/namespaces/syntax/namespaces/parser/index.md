# parser

## Namespaces

- [Field](namespaces/Field.md)
- [Flag](namespaces/Flag.md)
- [Namespace](namespaces/Namespace.md)
- [NodeType](namespaces/NodeType.md)
- [Part](namespaces/Part.md)
- [Quote](namespaces/Quote.md)

## `A`

> **A**: {object}

### Type Declaration

* `index` {number} Counted along the sibling links when asked, so the walk stores nothing for it.
* `node` {number}
* `parent` {number}
* `state` {unknown}
* `child`
* `childCount`
* `children`
* `end`
* `endOf`
* `field`
* `fieldCount`
* `fieldNamed`
* `flag`
* `loc`
* `name`
* `range`
* `rangeOf`
* `skipChildren`
* `source`
* `start`
* `startOf`
* `stop`
* `textOf`
* `type`
* `value`
* `within`

***

## `asciiLowercase`

> **asciiLowercase**: {object}

* `value` {string}
* Returns: {string}

***

## `baseTag`

> **baseTag**: {object}

* `base` {string|object}
* Returns: {string}

***

## `BLOCK_CONTENTS`

> **BLOCK\_CONTENTS**: {"block-contents"}

***

## `buildHeadTags`

> **buildHeadTags**: {object}

* `opts` {OutputHtmlOptions}
* Returns: {string}

***

## `collapseWhitespaceRuns`

> **collapseWhitespaceRuns**: {object}

* `s` {string}
* Returns: {string}

***

## `declaresUtf8`

> **declaresUtf8**: {object}

* `input` {string}
* Returns: {boolean}

***

## `decodeEntities`

> **decodeEntities**: {_functionSyntaxParserFunction_2}

***

## `decodeXmlAttribute`

> **decodeXmlAttribute**: {object}

* `value` {string}
* Returns: {string}

***

## `decodeXmlEntities`

> **decodeXmlEntities**: {object}

* `value` {string}
* Returns: {string}

***

## `EMBEDDED_LANGUAGES`

> **EMBEDDED\_LANGUAGES**: {string[]}

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

## `escapeXmlAttribute`

> **escapeXmlAttribute**: {object}

* `value` {string}
* `quote` {string}
* Returns: {string}

***

## `escapeXmlText`

> **escapeXmlText**: {object}

* `data` {string}
* Returns: {string}

***

## `EVENT_HANDLER`

> **EVENT\_HANDLER**: {"event-handler"}

***

## `FLAG_FOSTER_REGION`

> **FLAG\_FOSTER\_REGION**: {128}

***

## `FOREIGN_ELEMENT`

> **FOREIGN\_ELEMENT**: {"foreign-element"}

***

## `grammar`

> **grammar**: {object}

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {HtmlProcessOptions}
* Returns: {void}

***

## `isAllAsciiWhitespace`

> **isAllAsciiWhitespace**: {object}

* `s` {string}
* Returns: {boolean}

***

## `isAsciiAlphanumeric`

> **isAsciiAlphanumeric**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isAsciiWhitespace`

> **isAsciiWhitespace**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isXmlWellFormedText`

> **isXmlWellFormedText**: {object}

* `raw` {string}
* Returns: {boolean}

***

## `JSON_TYPE`

> **JSON\_TYPE**: {"json"}

***

## `metaTag`

> **metaTag**: {object}

* `name` {string}
* `content` {string}
* Returns: {string}

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

* `options` {HtmlTransformOptions}
* Returns: {undefined|HtmlTransformOptions}

***

## `startsWithAsciiWhitespace`

> **startsWithAsciiWhitespace**: {object}

* `s` {string}
* Returns: {boolean}

***

## `stripAsciiWhitespace`

> **stripAsciiWhitespace**: {object}

* `value` {string}
* Returns: {string}

***

## `SVG_TYPE`

> **SVG\_TYPE**: {"svg"}

***

## `tokenize`

> **tokenize**: {object}

* `input` {string}
* `pos` {number}
* `callbacks` {HtmlTokenCallbacks}
* Returns: {number}

***

## `tokenizeXml`

> **tokenizeXml**: {object}

* `input` {string}
* `pos` {number}
* `callbacks` {HtmlTokenCallbacks}
* Returns: {number}
