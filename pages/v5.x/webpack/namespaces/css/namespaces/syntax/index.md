# syntax

## Namespaces

- [NodeType](namespaces/NodeType.md)

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

***

## Class: `TokenStream`

Position-based view over the lexer — webpack's stand-in for the spec's
"normalize into a token stream" (CSS Syntax §9). It unifies the lexer and the
stream in one class: the `readToken` primitive lexes one token (the CSS
tokenizer), and the spec token-stream operations `next` / `consume` /
`discard` / `mark` / `restoreMark` / `discardMark` drive it from a byte
cursor. `parse*` entry points wrap a source string in one of these and every
`consume*` algorithm reads tokens from it.
No token buffer is kept: the cursor is a byte offset and the only state is
the next token (lazily tokenized once and cached until consumed). The
declaration-vs-qualified-rule backtracking in `consumeABlocksContents`
rewinds by `mark`ing / `restoreMark`ing that byte offset, which simply
re-tokenizes the rewound span — comment tokens are filtered here and fire
`onComment` once each, tracked by a monotonic high-water mark so a
re-tokenized span never re-fires them.
`SourceProcessor` is handed this class (not an instance) and threads it to
the grammar, so a different language can drive the same visitor machinery by
swapping the tokenizer — the per-token `readToken` primitive — for its own.

### Constructors

#### `new TokenStream(input[, pos][, locConverter][, onComment])`

* `input` {string}
* `pos` {number}
* `locConverter` {LocConverter}
* `onComment` {object}
* Returns: {TokenStream}

### Properties

* `input` {string}
* `locConverter` {LocConverter}

### Methods

#### `advance()`

* Returns: {void}

Advance past the already-peeked next token, skipping the redundant `next()`
re-check `consume` / `discard` pay. Precondition: the caller has just called
`next()` (so `_tok` is the cached next token and `_hasNext` is true) and that
token is not the `<eof-token>` — the hot "peek, decide, advance" sites where
both always hold. Callers that can't guarantee a non-EOF cached token use
`consume` / `discard` instead.

#### `consume()`

* Returns: {MutableToken}

Consume a token (CSS Syntax §3 "consume a token") — return the next token
and advance the cursor past it. The returned token is valid until the next
`next` re-tokenizes (the reused instance is not cleared by advancing).

#### `discard()`

* Returns: {void}

Discard a token (CSS Syntax §3 "discard a token") — advance the cursor past
the next token without returning it.

#### `discardMark()`

* Returns: {void}

Discard a mark (CSS Syntax §3 "discard a mark") — pop without rewinding.

#### `mark()`

* Returns: {void}

Mark (CSS Syntax §3 "mark") — push the current cursor position.

#### `next()`

* Returns: {MutableToken}

The next token (CSS Syntax §3 "next token") — the upcoming token without
consuming it; the `<eof-token>` once the source is exhausted. This is the
token the consume algorithms dispatch on (the spec's "process"). Tokenized
from `_pos` on first use and cached until consumed; comment tokens are
skipped here, firing `onComment` once each.

#### `restoreMark()`

* Returns: {void}

Restore a mark (CSS Syntax §3 "restore a mark") — pop the last mark and
rewind the cursor to it. The rewound span is re-tokenized on the next read;
already-fired comments are not re-fired (`_commentHigh`).

***

## `A`

> **A**: {object}

### Type Declaration

* `index` {number}
* `node` {NodeSyntax}
* `parent` {NodeSyntax}
* `blockEnd`
* `blockStart`
* `blockToken`
* `childAt`
* `childCount`
* `children`
* `childRules`
* `contentEnd`
* `contentStart`
* `declarations`
* `end`
* `important`
* `inValue`
* `loc`
* `name`
* `nameEnd`
* `nameStart`
* `prelude`
* `range`
* `setBlockEnd`
* `setEnd`
* `skipChildren`
* `source`
* `start`
* `type`
* `typeFlag`
* `unescaped`
* `unescapedName`
* `value`

***

## `askEmbeddedRenderer`

> **askEmbeddedRenderer**: {object}

* `render` {object}
* `hole` {object}
* `reported` {EmbeddedSourceResult[]}
* Returns: {Promise}

***

## `buildSkipSet`

> **buildSkipSet**: {object}

* `nodeTypes` {number[]}
* Returns: {Uint8Array}

***

## `collectEmbeddedDiagnostics`

> **collectEmbeddedDiagnostics**: {object}

* `reported` {object[]}
* Returns: {object}

***

## `EMBEDDED_LANGUAGES`

> **EMBEDDED\_LANGUAGES**: {string[]}

***

## `embeddedText`

> **embeddedText**: {object}

* `answer` {string|object}
* Returns: {undefined|string}

***

## `equalsLowerCase`

> **equalsLowerCase**: {object}

* `s` {string}
* `lit` {string}
* Returns: {boolean}

***

## `escapeIdentifier`

> **escapeIdentifier**: {MakeCacheableResult|object}

### Type Declaration

* `bindCache` {BindCache}

***

## `isDashedIdentifier`

> **isDashedIdentifier**: {object}

* `identifier` {string}
* Returns: {boolean}

***

## `isWhitespace`

> **isWhitespace**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `normalizeUrl`

> **normalizeUrl**: {object}

* `str` {string}
* `isString` {boolean}
* Returns: {string}

***

## `parseABlocksContents`

> **parseABlocksContents**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {object}

***

## `parseACommaSeparatedListOfComponentValues`

> **parseACommaSeparatedListOfComponentValues**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {ComponentValue[][]}

***

## `parseAComponentValue`

> **parseAComponentValue**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {undefined|Token|FunctionNode|SimpleBlock}

***

## `parseADeclaration`

> **parseADeclaration**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {undefined|DeclarationSyntax}

***

## `parseAListOfComponentValues`

> **parseAListOfComponentValues**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {ComponentValue[]}

***

## `parseARule`

> **parseARule**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {undefined|AtRule|QualifiedRule}

***

## `parseAStylesheet`

> **parseAStylesheet**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {Stylesheet}

***

## `parseAStylesheetsContents`

> **parseAStylesheetsContents**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntax}
* Returns: {RuleSyntax[]}

***

## `pickTransforms`

> **pickTransforms**: {object}

* `options` {object}
* Returns: {undefined|CssTransformOptions}

***

## `printer`

> **printer**: {object}

* `path` {object}
* `writer` {PrintContext}
* Returns: {string}

***

## `rangeEquals`

> **rangeEquals**: {object}

* `input` {string}
* `start` {number}
* `end` {number}
* `lit` {string}
* Returns: {boolean}

***

## `rangeEqualsLowerCase`

> **rangeEqualsLowerCase**: {object}

* `input` {string}
* `start` {number}
* `end` {number}
* `lit` {string}
* Returns: {boolean}

***

## `readToken`

> **readToken**: {object}

* `input` {string}
* `pos` {number}
* `out` {MutableToken}
* Returns: {undefined|MutableToken}

***

## `skipEscape`

> **skipEscape**: {object}

* `input` {string}
* `pos` {number}
* Returns: {number}

***

## `toLowerCaseIfNeeded`

> **toLowerCaseIfNeeded**: {object}

* `s` {string}
* Returns: {string}

***

## `TT_AT_KEYWORD`

> **TT\_AT\_KEYWORD**: {16}

***

## `TT_BAD_STRING_TOKEN`

> **TT\_BAD\_STRING\_TOKEN**: {4}

***

## `TT_BAD_URL_TOKEN`

> **TT\_BAD\_URL\_TOKEN**: {19}

***

## `TT_CDC`

> **TT\_CDC**: {25}

***

## `TT_CDO`

> **TT\_CDO**: {24}

***

## `TT_COLON`

> **TT\_COLON**: {14}

***

## `TT_COMMA`

> **TT\_COMMA**: {13}

***

## `TT_COMMENT`

> **TT\_COMMENT**: {1}

***

## `TT_DELIM`

> **TT\_DELIM**: {6}

***

## `TT_DIMENSION`

> **TT\_DIMENSION**: {23}

***

## `TT_EOF`

> **TT\_EOF**: {26}

***

## `TT_FUNCTION`

> **TT\_FUNCTION**: {17}

***

## `TT_HASH`

> **TT\_HASH**: {5}

***

## `TT_IDENTIFIER`

> **TT\_IDENTIFIER**: {20}

***

## `TT_LEFT_CURLY_BRACKET`

> **TT\_LEFT\_CURLY\_BRACKET**: {9}

***

## `TT_LEFT_PARENTHESIS`

> **TT\_LEFT\_PARENTHESIS**: {7}

***

## `TT_LEFT_SQUARE_BRACKET`

> **TT\_LEFT\_SQUARE\_BRACKET**: {8}

***

## `TT_NUMBER`

> **TT\_NUMBER**: {21}

***

## `TT_PERCENTAGE`

> **TT\_PERCENTAGE**: {22}

***

## `TT_RIGHT_CURLY_BRACKET`

> **TT\_RIGHT\_CURLY\_BRACKET**: {12}

***

## `TT_RIGHT_PARENTHESIS`

> **TT\_RIGHT\_PARENTHESIS**: {10}

***

## `TT_RIGHT_SQUARE_BRACKET`

> **TT\_RIGHT\_SQUARE\_BRACKET**: {11}

***

## `TT_SEMICOLON`

> **TT\_SEMICOLON**: {15}

***

## `TT_STRING`

> **TT\_STRING**: {3}

***

## `TT_URL`

> **TT\_URL**: {18}

***

## `TT_WHITESPACE`

> **TT\_WHITESPACE**: {2}

***

## `unescapeIdentifier`

> **unescapeIdentifier**: {MakeCacheableResult|object}

### Type Declaration

* `bindCache` {BindCache}
