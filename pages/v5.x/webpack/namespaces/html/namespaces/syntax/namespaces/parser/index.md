# parser

## Namespaces

- [NodeType](namespaces/NodeType.md)

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

## `CC_APOSTROPHE`

> **CC\_APOSTROPHE**: {39}

***

## `CC_LEFT_SQUARE_BRACKET`

> **CC\_LEFT\_SQUARE\_BRACKET**: {91}

***

## `CC_LF`

> **CC\_LF**: {10}

***

## `CC_NUMBER_SIGN`

> **CC\_NUMBER\_SIGN**: {35}

***

## `CC_QUOTATION_MARK`

> **CC\_QUOTATION\_MARK**: {34}

***

## `CC_RIGHT_SQUARE_BRACKET`

> **CC\_RIGHT\_SQUARE\_BRACKET**: {93}

***

## `CC_SOLIDUS`

> **CC\_SOLIDUS**: {47}

***

## `collapseWhitespaceRuns`

> **collapseWhitespaceRuns**: {object}

* `s` {string}
* Returns: {string}

***

## `decodeEntities`

> **decodeEntities**: {_functionSyntaxParser}

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

## `EVENT_HANDLER`

> **EVENT\_HANDLER**: {"event-handler"}

***

## `FLAG_FOSTER_REGION`

> **FLAG\_FOSTER\_REGION**: {128}

***

## `grammar`

> **grammar**: {object}

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {HtmlProcessOptions}
* Returns: {void}

***

## `isAllWs`

> **isAllWs**: {object}

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

## `JSON_TYPE`

> **JSON\_TYPE**: {"json"}

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

## `QUOTE_DOUBLE`

> **QUOTE\_DOUBLE**: {1}

***

## `QUOTE_NONE`

> **QUOTE\_NONE**: {0}

***

## `QUOTE_SINGLE`

> **QUOTE\_SINGLE**: {2}

***

## `startsWithWs`

> **startsWithWs**: {object}

* `s` {string}
* Returns: {boolean}

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
