# parser

## Namespaces

- [Field](namespaces/Field.md)
- [Flag](namespaces/Flag.md)
- [NodeType](namespaces/NodeType.md)
- [Part](namespaces/Part.md)
- [TokenType](namespaces/TokenType.md)

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

#### `skipPreludeLeaves()`

* Returns: {void}

Step over the run of selector-prelude leaves a skip-mode parse drops (CSS
Syntax §5.4.3's "append to prelude", which skip mode does not do), without
lexing one token each. Only valid where every leaf up to the next
`BC_PRELUDE_STOP` code point is dropped whatever it is — which in
`consumeAQualifiedRule` is once the two tokens the `--foo: {`
disambiguation reads have both been seen. No-op while a token is cached.

#### `skipWhitespace()`

* Returns: {void}

Step over the whitespace the next token would be, without tokenizing it —
for the sites that discard whitespace tokens. No-op while a token is cached.

***

## `A`

> **A**: {CssSyntaxPath}

***

## `asciiCaseInsensitiveMatch`

> **asciiCaseInsensitiveMatch**: {object}

* `s` {string}
* `lit` {string}
* Returns: {boolean}

***

## `asciiLowercaseName`

> **asciiLowercaseName**: {object}

* `s` {string}
* Returns: {string}

***

## `buildSkipSet`

> **buildSkipSet**: {object}

* `nodeTypes` {number[]}
* Returns: {Uint8Array}

***

## `consumeExtraNewline`

> **consumeExtraNewline**: {object}

* `cc` {number}
* `input` {string}
* `pos` {number}
* Returns: {number}

***

## `containsSubstitutionFunction`

> **containsSubstitutionFunction**: {object}

* `text` {string}
* Returns: {boolean}

***

## `DARK_PROPERTY`

> **DARK\_PROPERTY**: {"--webpack-dark"}

***

## `escapeIdentifier`

> **escapeIdentifier**: {MakeCacheableResult|object}

### Type Declaration

* `bindCache` {BindCache}

***

## `escapeName`

> **escapeName**: {object}

* `name` {string}
* Returns: {string}

***

## `grammar`

> **grammar**: {object}

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {CssProcessOptions}
* Returns: {void}

***

## `isAsciiWhitespace`

> **isAsciiWhitespace**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isDashedIdentifier`

> **isDashedIdentifier**: {object}

* `identifier` {string}
* Returns: {boolean}

***

## `isDigit`

> **isDigit**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isHexDigit`

> **isHexDigit**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isIdentCodePoint`

> **isIdentCodePoint**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isIdentStartCodePoint`

> **isIdentStartCodePoint**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isLetter`

> **isLetter**: {object}

* `cc` {number}
* Returns: {boolean}

***

## `isSimpleIdentifier`

> **isSimpleIdentifier**: {object}

* `value` {string}
* Returns: {boolean}

***

## `KEYFRAMES_AT_RULE_RE`

> **KEYFRAMES\_AT\_RULE\_RE**: {RegExp}

***

## `LIGHT_PROPERTY`

> **LIGHT\_PROPERTY**: {"--webpack-light"}

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
* `options` {CssParseOptions}
* Returns: {object}

***

## `parseACommaSeparatedListOfComponentValues`

> **parseACommaSeparatedListOfComponentValues**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number[][]}

***

## `parseAComponentValue`

> **parseAComponentValue**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {undefined|number}

***

## `parseADeclaration`

> **parseADeclaration**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {undefined|number}

***

## `parseAListOfComponentValues`

> **parseAListOfComponentValues**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number[]}

***

## `parseARule`

> **parseARule**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {undefined|number}

***

## `parseAStylesheet`

> **parseAStylesheet**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number}

***

## `parseAStylesheetsContents`

> **parseAStylesheetsContents**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number[]}

***

## `pickTransforms`

> **pickTransforms**: {object}

* `options` {CssTransformOptions}
* Returns: {undefined|CssTransformOptions}

***

## `rangeAsciiCaseInsensitiveMatch`

> **rangeAsciiCaseInsensitiveMatch**: {object}

* `input` {string}
* `start` {number}
* `end` {number}
* `lit` {string}
* Returns: {boolean}

***

## `rangeEquals`

> **rangeEquals**: {object}

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

## `terminateIdentifier`

> **terminateIdentifier**: {object}

* `identifier` {string}
* Returns: {string}

***

## `toLowerCaseIfNeeded`

> **toLowerCaseIfNeeded**: {object}

* `s` {string}
* Returns: {string}

***

## `unescapeIdentifier`

> **unescapeIdentifier**: {MakeCacheableResult|object}

### Type Declaration

* `bindCache` {BindCache}

***

## `VENDOR_PREFIX`

> **VENDOR\_PREFIX**: {RegExp}
