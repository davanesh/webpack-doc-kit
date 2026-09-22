# parser

## Namespaces

- [NodeType](namespaces/NodeType.md)

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

> **A**: {object}

### Type Declaration

* `index` {number}
* `node` {NodeSyntaxParser}
* `parent` {NodeSyntaxParser}
* `atKeyword`
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

## `asciiLowerCaseName`

> **asciiLowerCaseName**: {object}

* `s` {string}
* Returns: {string}

***

## `buildSkipSet`

> **buildSkipSet**: {object}

* `nodeTypes` {number[]}
* Returns: {Uint8Array}

***

## `CC_0`

> **CC\_0**: {number}

***

## `CC_APOSTROPHE`

> **CC\_APOSTROPHE**: {number}

***

## `CC_COMMA`

> **CC\_COMMA**: {number}

***

## `CC_FULL_STOP`

> **CC\_FULL\_STOP**: {number}

***

## `CC_GREATER_THAN_SIGN`

> **CC\_GREATER\_THAN\_SIGN**: {number}

***

## `CC_HYPHEN_MINUS`

> **CC\_HYPHEN\_MINUS**: {number}

***

## `CC_LEFT_PARENTHESIS`

> **CC\_LEFT\_PARENTHESIS**: {number}

***

## `CC_LEFT_SQUARE`

> **CC\_LEFT\_SQUARE**: {number}

***

## `CC_LOW_LINE`

> **CC\_LOW\_LINE**: {number}

***

## `CC_LOWER_D`

> **CC\_LOWER\_D**: {number}

***

## `CC_NUMBER_SIGN`

> **CC\_NUMBER\_SIGN**: {number}

***

## `CC_PLUS_SIGN`

> **CC\_PLUS\_SIGN**: {number}

***

## `CC_QUOTATION_MARK`

> **CC\_QUOTATION\_MARK**: {number}

***

## `CC_REVERSE_SOLIDUS`

> **CC\_REVERSE\_SOLIDUS**: {number}

***

## `CC_RIGHT_PARENTHESIS`

> **CC\_RIGHT\_PARENTHESIS**: {number}

***

## `CC_RIGHT_SQUARE`

> **CC\_RIGHT\_SQUARE**: {number}

***

## `CC_SPACE`

> **CC\_SPACE**: {number}

***

## `CC_TILDE`

> **CC\_TILDE**: {number}

***

## `CC_UPPER_A`

> **CC\_UPPER\_A**: {number}

***

## `CC_UPPER_Z`

> **CC\_UPPER\_Z**: {number}

***

## `consumeExtraNewline`

> **consumeExtraNewline**: {object}

* `cc` {number}
* `input` {string}
* `pos` {number}
* Returns: {number}

***

## `DARK_PROPERTY`

> **DARK\_PROPERTY**: {"--webpack-dark"}

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

## `grammar`

> **grammar**: {object}

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {CssProcessOptions}
* Returns: {void}

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

## `KEYFRAMES_AT_RULE_RE`

> **KEYFRAMES\_AT\_RULE\_RE**: {RegExp}

***

## `LIGHT_PROPERTY`

> **LIGHT\_PROPERTY**: {"--webpack-light"}

***

## `LIST_KIND_KEYFRAME`

> **LIST\_KIND\_KEYFRAME**: {1}

***

## `LIST_KIND_NESTED`

> **LIST\_KIND\_NESTED**: {2}

***

## `LIST_KIND_SELECTOR`

> **LIST\_KIND\_SELECTOR**: {0}

***

## `LIST_NO`

> **LIST\_NO**: {2}

***

## `LIST_UNKNOWN`

> **LIST\_UNKNOWN**: {0}

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
* `options` {ParseOptionsSyntaxParser}
* Returns: {object}

***

## `parseACommaSeparatedListOfComponentValues`

> **parseACommaSeparatedListOfComponentValues**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {ComponentValue[][]}

***

## `parseAComponentValue`

> **parseAComponentValue**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {undefined|TokenSyntaxParserObject|FunctionNode|SimpleBlock}

***

## `parseADeclaration`

> **parseADeclaration**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {undefined|DeclarationSyntaxParser}

***

## `parseAListOfComponentValues`

> **parseAListOfComponentValues**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {ComponentValue[]}

***

## `parseARule`

> **parseARule**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {undefined|AtRule|QualifiedRule}

***

## `parseAStylesheet`

> **parseAStylesheet**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {Stylesheet}

***

## `parseAStylesheetsContents`

> **parseAStylesheetsContents**: {object}

* `input` {string|TokenStream}
* `pos` {number}
* `options` {ParseOptionsSyntaxParser}
* Returns: {RuleSyntaxParser[]}

***

## `pickTransforms`

> **pickTransforms**: {object}

* `options` {object}
* Returns: {undefined|CssTransformOptions}

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

## `T_AT_RULE`

> **T\_AT\_RULE**: {number}

***

## `T_BAD_STRING`

> **T\_BAD\_STRING**: {number}

***

## `T_COMMA`

> **T\_COMMA**: {number}

***

## `T_COMMENT`

> **T\_COMMENT**: {number}

***

## `T_DECLARATION`

> **T\_DECLARATION**: {number}

***

## `T_DELIM`

> **T\_DELIM**: {number}

***

## `T_DIMENSION`

> **T\_DIMENSION**: {number}

***

## `T_FUNCTION`

> **T\_FUNCTION**: {number}

***

## `T_HASH`

> **T\_HASH**: {number}

***

## `T_IDENT`

> **T\_IDENT**: {number}

***

## `T_NUMBER`

> **T\_NUMBER**: {number}

***

## `T_PERCENTAGE`

> **T\_PERCENTAGE**: {number}

***

## `T_QUALIFIED_RULE`

> **T\_QUALIFIED\_RULE**: {number}

***

## `T_RAW`

> **T\_RAW**: {number}

***

## `T_SIMPLE_BLOCK`

> **T\_SIMPLE\_BLOCK**: {number}

***

## `T_STRING`

> **T\_STRING**: {number}

***

## `T_URL`

> **T\_URL**: {number}

***

## `T_WHITESPACE`

> **T\_WHITESPACE**: {number}

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

***

## `VENDOR_PREFIX`

> **VENDOR\_PREFIX**: {RegExp}
