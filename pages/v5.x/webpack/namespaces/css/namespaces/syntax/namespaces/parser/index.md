# parser

**`Experimental`**

exposed as `webpack.css.syntax.parser`; unstable API

## Namespaces

- [Field](namespaces/Field.md)
- [Flag](namespaces/Flag.md)
- [NodeType](namespaces/NodeType.md)
- [Part](namespaces/Part.md)
- [TokenType](namespaces/TokenType.md)

## Class: `TokenStream`

**`Experimental`**

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

> Stability: 1 - Experimental

* `input` {string}
* `pos` {number}
* `locConverter` {LocConverter}
* `onComment` {object}
* Returns: {TokenStream}

**`Experimental`**

### Properties

* `input` {string} 
* `locConverter` {LocConverter} 

### Methods

#### `advance()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Advance past the already-peeked next token, skipping the redundant `next()`
re-check `consume` / `discard` pay. Precondition: the caller has just called
`next()` (so `_tok` is the cached next token and `_hasNext` is true) and that
token is not the `<eof-token>` — the hot "peek, decide, advance" sites where
both always hold. Callers that can't guarantee a non-EOF cached token use
`consume` / `discard` instead.

#### `consume()`

> Stability: 1 - Experimental

* Returns: {MutableToken}

**`Experimental`**

Consume a token (CSS Syntax §3 "consume a token") — return the next token
and advance the cursor past it. The returned token is valid until the next
`next` re-tokenizes (the reused instance is not cleared by advancing).

#### `discard()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Discard a token (CSS Syntax §3 "discard a token") — advance the cursor past
the next token without returning it.

#### `discardMark()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Discard a mark (CSS Syntax §3 "discard a mark") — pop without rewinding.

#### `mark()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Mark (CSS Syntax §3 "mark") — push the current cursor position.

#### `next()`

> Stability: 1 - Experimental

* Returns: {MutableToken}

**`Experimental`**

The next token (CSS Syntax §3 "next token") — the upcoming token without
consuming it; the `<eof-token>` once the source is exhausted. This is the
token the consume algorithms dispatch on (the spec's "process"). Tokenized
from `_pos` on first use and cached until consumed; comment tokens are
skipped here, firing `onComment` once each.

#### `restoreMark()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Restore a mark (CSS Syntax §3 "restore a mark") — pop the last mark and
rewind the cursor to it. The rewound span is re-tokenized on the next read;
already-fired comments are not re-fired (`_commentHigh`).

#### `skipPreludeLeaves()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Step over the run of selector-prelude leaves a skip-mode parse drops (CSS
Syntax §5.4.3's "append to prelude", which skip mode does not do), without
lexing one token each. Only valid where every leaf up to the next
`BC_PRELUDE_STOP` code point is dropped whatever it is — which in
`consumeAQualifiedRule` is once the two tokens the `--foo: {`
disambiguation reads have both been seen. No-op while a token is cached.

#### `skipWhitespace()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Step over the whitespace the next token would be, without tokenizing it —
for the sites that discard whitespace tokens. No-op while a token is cached.

***

## `A`

> **A**: {CssSyntaxPath}

**`Experimental`**

***

## `asciiCaseInsensitiveMatch`

> **asciiCaseInsensitiveMatch**: {object}

**`Experimental`**

* `s` {string}
* `lit` {string}
* Returns: {boolean}

***

## `asciiLowercaseName`

> **asciiLowercaseName**: {object}

**`Experimental`**

* `s` {string}
* Returns: {string}

***

## `buildSkipSet`

> **buildSkipSet**: {object}

**`Experimental`**

* `nodeTypes` {number[]}
* Returns: {Uint8Array}

***

## `consumeExtraNewline`

> **consumeExtraNewline**: {object}

**`Experimental`**

* `cc` {number}
* `input` {string}
* `pos` {number}
* Returns: {number}

***

## `containsSubstitutionFunction`

> **containsSubstitutionFunction**: {object}

**`Experimental`**

* `text` {string}
* Returns: {boolean}

***

## `DARK_PROPERTY`

> **DARK\_PROPERTY**: {"--webpack-dark"}

**`Experimental`**

***

## `escapeIdentifier`

> **escapeIdentifier**: {MakeCacheableResult|object}

**`Experimental`**

### Type Declaration

* `bindCache` {BindCache}

***

## `escapeName`

> **escapeName**: {object}

**`Experimental`**

* `name` {string}
* Returns: {string}

***

## `grammar`

> **grammar**: {object}

**`Experimental`**

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {CssProcessOptions}
* Returns: {void}

***

## `isAsciiWhitespace`

> **isAsciiWhitespace**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isDashedIdentifier`

> **isDashedIdentifier**: {object}

**`Experimental`**

* `identifier` {string}
* Returns: {boolean}

***

## `isDigit`

> **isDigit**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isHexDigit`

> **isHexDigit**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isIdentCodePoint`

> **isIdentCodePoint**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isIdentStartCodePoint`

> **isIdentStartCodePoint**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isLetter`

> **isLetter**: {object}

**`Experimental`**

* `cc` {number}
* Returns: {boolean}

***

## `isSimpleIdentifier`

> **isSimpleIdentifier**: {object}

**`Experimental`**

* `value` {string}
* Returns: {boolean}

***

## `KEYFRAMES_AT_RULE_RE`

> **KEYFRAMES\_AT\_RULE\_RE**: {RegExp}

**`Experimental`**

***

## `LIGHT_PROPERTY`

> **LIGHT\_PROPERTY**: {"--webpack-light"}

**`Experimental`**

***

## `normalizeUrl`

> **normalizeUrl**: {object}

**`Experimental`**

* `str` {string}
* `isString` {boolean}
* Returns: {string}

***

## `parseABlocksContents`

> **parseABlocksContents**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {object}

***

## `parseACommaSeparatedListOfComponentValues`

> **parseACommaSeparatedListOfComponentValues**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number[][]}

***

## `parseAComponentValue`

> **parseAComponentValue**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {undefined|number}

***

## `parseADeclaration`

> **parseADeclaration**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {undefined|number}

***

## `parseAListOfComponentValues`

> **parseAListOfComponentValues**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number[]}

***

## `parseARule`

> **parseARule**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {undefined|number}

***

## `parseAStylesheet`

> **parseAStylesheet**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number}

***

## `parseAStylesheetsContents`

> **parseAStylesheetsContents**: {object}

**`Experimental`**

* `input` {string|TokenStream}
* `pos` {number}
* `options` {CssParseOptions}
* Returns: {number[]}

***

## `pickTransforms`

> **pickTransforms**: {object}

**`Experimental`**

* `options` {CssTransformOptions}
* Returns: {undefined|CssTransformOptions}

***

## `rangeAsciiCaseInsensitiveMatch`

> **rangeAsciiCaseInsensitiveMatch**: {object}

**`Experimental`**

* `input` {string}
* `start` {number}
* `end` {number}
* `lit` {string}
* Returns: {boolean}

***

## `rangeEquals`

> **rangeEquals**: {object}

**`Experimental`**

* `input` {string}
* `start` {number}
* `end` {number}
* `lit` {string}
* Returns: {boolean}

***

## `readToken`

> **readToken**: {object}

**`Experimental`**

* `input` {string}
* `pos` {number}
* `out` {MutableToken}
* Returns: {undefined|MutableToken}

***

## `skipEscape`

> **skipEscape**: {object}

**`Experimental`**

* `input` {string}
* `pos` {number}
* Returns: {number}

***

## `terminateIdentifier`

> **terminateIdentifier**: {object}

**`Experimental`**

* `identifier` {string}
* Returns: {string}

***

## `toLowerCaseIfNeeded`

> **toLowerCaseIfNeeded**: {object}

**`Experimental`**

* `s` {string}
* Returns: {string}

***

## `unescapeIdentifier`

> **unescapeIdentifier**: {MakeCacheableResult|object}

**`Experimental`**

### Type Declaration

* `bindCache` {BindCache}

***

## `VENDOR_PREFIX`

> **VENDOR\_PREFIX**: {RegExp}

**`Experimental`**
