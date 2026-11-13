# parser

**`Experimental`**

exposed as `webpack.html.syntax.parser`; unstable API

## Namespaces

- [Field](namespaces/Field.md)
- [Flag](namespaces/Flag.md)
- [Namespace](namespaces/Namespace.md)
- [NodeType](namespaces/NodeType.md)
- [Part](namespaces/Part.md)
- [Quote](namespaces/Quote.md)

## `A`

> **A**: {HtmlSyntaxPath}

**`Experimental`**

***

## `asciiLowercase`

> **asciiLowercase**: {object}

**`Experimental`**

* `value` {string}
* Returns: {string}

***

## `baseTag`

> **baseTag**: {object}

**`Experimental`**

* `base` {string|object}
* Returns: {string}

***

## `BLOCK_CONTENTS`

> **BLOCK\_CONTENTS**: {"block-contents"}

**`Experimental`**

***

## `buildHeadTags`

> **buildHeadTags**: {object}

**`Experimental`**

* `opts` {OutputHtmlOptions}
* Returns: {string}

***

## `collapseWhitespaceRuns`

> **collapseWhitespaceRuns**: {object}

**`Experimental`**

* `s` {string}
* Returns: {string}

***

## `declaresUtf8`

> **declaresUtf8**: {object}

**`Experimental`**

* `input` {string}
* Returns: {boolean}

***

## `decodeEntities`

> **decodeEntities**: {_functionSyntaxParserFunction_2}

**`Experimental`**

***

## `decodeXmlAttribute`

> **decodeXmlAttribute**: {object}

**`Experimental`**

* `value` {string}
* Returns: {string}

***

## `decodeXmlEntities`

> **decodeXmlEntities**: {object}

**`Experimental`**

* `value` {string}
* Returns: {string}

***

## `EMBEDDED_LANGUAGES`

> **EMBEDDED\_LANGUAGES**: {string[]}

**`Experimental`**

***

## `escapeAttribute`

> **escapeAttribute**: {object}

**`Experimental`**

* `s` {string}
* `delimiter` {number}
* `minimal` {boolean}
* Returns: {string}

***

## `escapeText`

> **escapeText**: {object}

**`Experimental`**

* `s` {string}
* Returns: {string}

***

## `escapeXmlAttribute`

> **escapeXmlAttribute**: {object}

**`Experimental`**

* `value` {string}
* `quote` {string}
* Returns: {string}

***

## `escapeXmlText`

> **escapeXmlText**: {object}

**`Experimental`**

* `data` {string}
* Returns: {string}

***

## `EVENT_HANDLER`

> **EVENT\_HANDLER**: {"event-handler"}

**`Experimental`**

***

## `FLAG_FOSTER_REGION`

> **FLAG\_FOSTER\_REGION**: {128}

**`Experimental`**

***

## `FOREIGN_ELEMENT`

> **FOREIGN\_ELEMENT**: {"foreign-element"}

**`Experimental`**

***

## `grammar`

> **grammar**: {object}

**`Experimental`**

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {HtmlProcessOptions}
* Returns: {void}

***

## `isAllAsciiWhitespace`

> **isAllAsciiWhitespace**: {object}

**`Experimental`**

* `s` {string}
* Returns: {boolean}

***

## `isAsciiAlphanumeric`

> **isAsciiAlphanumeric**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isAsciiWhitespace`

> **isAsciiWhitespace**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isXmlWellFormedText`

> **isXmlWellFormedText**: {object}

**`Experimental`**

* `raw` {string}
* Returns: {boolean}

***

## `JSON_TYPE`

> **JSON\_TYPE**: {"json"}

**`Experimental`**

***

## `metaTag`

> **metaTag**: {object}

**`Experimental`**

* `name` {string}
* `content` {string}
* Returns: {string}

***

## `parseCssUrls`

> **parseCssUrls**: {object}

**`Experimental`**

* `input` {string}
* Returns: {string|number|number[]}

***

## `parseHtml`

> **parseHtml**: {object}

**`Experimental`**

* `input` {string}
* `pos` {number}
* `options` {HtmlParseOptions}
* Returns: {number}

***

## `parseMsapplicationTask`

> **parseMsapplicationTask**: {object}

**`Experimental`**

* `input` {string}
* Returns: {string|number|number[]}

***

## `parseSrc`

> **parseSrc**: {object}

**`Experimental`**

* `input` {string}
* Returns: {string|number|number[]}

***

## `parseSrcset`

> **parseSrcset**: {object}

**`Experimental`**

* `input` {string}
* Returns: {string|number|number[]}

***

## `pickTransforms`

> **pickTransforms**: {object}

**`Experimental`**

* `options` {HtmlTransformOptions}
* Returns: {undefined|HtmlTransformOptions}

***

## `startsWithAsciiWhitespace`

> **startsWithAsciiWhitespace**: {object}

**`Experimental`**

* `s` {string}
* Returns: {boolean}

***

## `stripAsciiWhitespace`

> **stripAsciiWhitespace**: {object}

**`Experimental`**

* `value` {string}
* Returns: {string}

***

## `SVG_TYPE`

> **SVG\_TYPE**: {"svg"}

**`Experimental`**

***

## `tokenize`

> **tokenize**: {object}

**`Experimental`**

* `input` {string}
* `pos` {number}
* `callbacks` {HtmlTokenCallbacks}
* Returns: {number}

***

## `tokenizeXml`

> **tokenizeXml**: {object}

**`Experimental`**

* `input` {string}
* `pos` {number}
* `callbacks` {HtmlTokenCallbacks}
* Returns: {number}
