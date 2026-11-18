# parser

**`Experimental`**

exposed as `webpack.javascript.syntax.parser`; unstable API

## Namespaces

- [defaultOptions](namespaces/defaultOptions.md)
- [tokContexts](namespaces/tokContexts.md)
- [tokTypes](namespaces/tokTypes.md)

## Class: `Parser`

**`Experimental`**

The ECMAScript parser webpack owns, ported from acorn 8.18.0 so the bundler
ships no parser dependency. `WebpackParser` below subclasses it and
overrides the hot paths.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/state.js

### Extended by

- {WebpackParser}

### Constructors

#### `new Parser(options, input[, startPos])`

> Stability: 1 - Experimental

* `options` {Partial}
* `input` {string}
* `startPos` {number}
* Returns: {SyntaxParser}

**`Experimental`**

### Properties

* `awaitIdentPos` {number} 
* `awaitPos` {number} 
* `containsEsc` {boolean} 
* `context` {TokContextLike[]} 
* `curLine` {number} 
* `end` {number} 
* `endLoc` {Position} 
* `exprAllowed` {boolean} 
* `inModule` {boolean} 
* `input` {string} 
* `inTemplateElement` {boolean} 
* `keywords` {RegExp} 
* `labels` {LabelLike[]} 
* `lastTokEnd` {number} 
* `lastTokEndLoc` {Position} 
* `lastTokStart` {number} 
* `lastTokStartLoc` {Position} 
* `lineStart` {number} 
* `options` {ResolvedOptionsSyntaxParser} 
* `parsing` {boolean} Set by the parse entry points; a parser that only hands out tokens
keeps its top-level scope and reads its contexts instead.
* `pos` {number} 
* `potentialArrowAt` {number} 
* `potentialArrowInForAwait` {boolean} 
* `privateNameStack` {any[]} 
* `regexpState` {RegExpValidationState} 
* `reservedWords` {RegExp} 
* `reservedWordsStrict` {RegExp} 
* `reservedWordsStrictBind` {RegExp} 
* `scopeStack` {ParserScope[]} 
* `sourceFile` {string} 
* `start` {number} 
* `startLoc` {Position} 
* `strict` {boolean} 
* `type` {TokenType} 
* `undefinedExports` {Record} 
* `value` {any} 
* `yieldPos` {number} 

### Methods

#### `[iterator]()`

> Stability: 1 - Experimental

* Returns: {Iterator}

**`Experimental`**

#### `braceIsBlock(prevType)`

> Stability: 1 - Experimental

* `prevType` {TokenType}
* Returns: {boolean}

**`Experimental`**

Whether a `{` here opens a block rather than an object literal, which the
token before it decides.

#### `curContext()`

> Stability: 1 - Experimental

* Returns: {TokContextLike}

**`Experimental`**

#### `curPosition()`

> Stability: 1 - Experimental

* Returns: {Position}

**`Experimental`**

#### `enterScope(flags)`

> Stability: 1 - Experimental

* `flags` {number}
* Returns: {void}

**`Experimental`**

#### `finishOp(type, size)`

> Stability: 1 - Experimental

* `type` {TokenType}
* `size` {number}
* Returns: {void}

**`Experimental`**

#### `finishToken(type[, value])`

> Stability: 1 - Experimental

* `type` {TokenType}
* `value` {any}
* Returns: {void}

**`Experimental`**

#### `fullCharCodeAt(pos)`

> Stability: 1 - Experimental

* `pos` {number}
* Returns: {number}

**`Experimental`**

#### `fullCharCodeAtPos()`

> Stability: 1 - Experimental

* Returns: {number}

**`Experimental`**

#### `getToken()`

> Stability: 1 - Experimental

* Returns: {Token}

**`Experimental`**

#### `getTokenFromCode(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `inGeneratorContext()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

Whether the enclosing function is a generator. A parse reads its scope: a
method's `*` pushes no `function` context, which only the tokenizer reads.
The tokenizer alone enters no function scope, so it reads its contexts.

#### `initialContext()`

> Stability: 1 - Experimental

* Returns: {TokContextLike[]}

**`Experimental`**

#### `invalidStringToken(position, message)`

> Stability: 1 - Experimental

* `position` {number}
* `message` {string}
* Returns: {void}

**`Experimental`**

Report a bad escape, unless it sits in a tagged template, where the raw
text is still well-formed and only the cooked value is lost.

#### `next([ignoreEscapeSequenceInKeyword])`

> Stability: 1 - Experimental

* `ignoreEscapeSequenceInKeyword` {boolean}
* Returns: {void}

**`Experimental`**

Move past the current token.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/tokenize.js

#### `nextToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `raise(pos, message)`

> Stability: 1 - Experimental

* `pos` {number}
* `message` {string}
* Returns: {never}

**`Experimental`**

Report a parse error, naming where in the source it was found.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/location.js

#### `raiseRecoverable(pos, message)`

> Stability: 1 - Experimental

* `pos` {number}
* `message` {string}
* Returns: {void}

**`Experimental`**

An error the parse can go on past: `parseProgram` reports it and goes on.

#### `readCodePoint()`

> Stability: 1 - Experimental

* Returns: {number}

**`Experimental`**

#### `readEscapedChar(inTemplate)`

> Stability: 1 - Experimental

* `inTemplate` {boolean}
* Returns: {string}

**`Experimental`**

#### `readHexChar(len)`

> Stability: 1 - Experimental

* `len` {number}
* Returns: {number}

**`Experimental`**

#### `readHtmlOpenAsOperators(pos)`

> Stability: 1 - Experimental

* `pos` {number}
* Returns: {void}

**`Experimental`**

A module reads `<!--` as `<`, `!` and `--`, where a script, as webpack
emits a module into, reads an HTML-style comment.

#### `readInt(radix[, len][, maybeLegacyOctalNumericLiteral])`

> Stability: 1 - Experimental

* `radix` {number}
* `len` {number}
* `maybeLegacyOctalNumericLiteral` {boolean}
* Returns: {number}

**`Experimental`**

Read digits in the given radix, or `null` where none were there or the
count did not match what an escape asked for.

#### `readInvalidTemplateToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readNumber(startsWithDot)`

> Stability: 1 - Experimental

* `startsWithDot` {boolean}
* Returns: {void}

**`Experimental`**

#### `readRadixNumber(radix)`

> Stability: 1 - Experimental

* `radix` {number}
* Returns: {void}

**`Experimental`**

#### `readRegexp()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readString(quote)`

> Stability: 1 - Experimental

* `quote` {number}
* Returns: {void}

**`Experimental`**

#### `readTmplToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_caret()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_dot()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_eq_excl(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_lt_gt(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_mult_modulo_exp(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_numberSign()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_pipe_amp(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_plus_min(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_question()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_slash()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readWord()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readWord1()`

> Stability: 1 - Experimental

* Returns: {string}

**`Experimental`**

Read an identifier's text, recording in `containsEsc` whether any of it
was written as an escape - which stops it reading as a keyword.

#### `skipBlockComment()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `skipLineComment(startSkip)`

> Stability: 1 - Experimental

* `startSkip` {number}
* Returns: {void}

**`Experimental`**

#### `skipSpace()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `strictDirective(start)`

> Stability: 1 - Experimental

* `start` {number}
* Returns: {boolean}

**`Experimental`**

Whether a directive prologue starting at `start` opens with `"use strict"`.
acorn source: https://github.com/acornjs/acorn/blob/8.19.0/acorn/src/parseutil.js

#### `tryReadTemplateToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `unexpected([pos])`

> Stability: 1 - Experimental

* `pos` {number}
* Returns: {never}

**`Experimental`**

#### `updateContext(prevType)`

> Stability: 1 - Experimental

* `prevType` {TokenType}
* Returns: {void}

**`Experimental`**

#### `validateRegExpFlags(state)`

> Stability: 1 - Experimental

* `state` {RegExpValidationState}
* Returns: {void}

**`Experimental`**

Check a regexp literal's flags.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/regexp.js

#### `validateRegExpPattern(state)`

> Stability: 1 - Experimental

* `state` {RegExpValidationState}
* Returns: {void}

**`Experimental`**

Check a regexp literal's pattern, re-reading it once a group name shows
that the named-capture goal symbol was the right one.

#### Static method: `tokenizer(input[, options])`

> Stability: 1 - Experimental

* `input` {string}
* `options` {Partial}
* Returns: {SyntaxParser}

**`Experimental`**

***

## Class: `ParserPosition`

**`Experimental`**

Mirror of acorn's `Position` (line/column pair with its `offset` helper),
served by the owned `raise`/`curPosition`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/locutil.js

### Constructors

#### `new ParserPosition(line, col)`

> Stability: 1 - Experimental

* `line` {number}
* `col` {number}
* Returns: {ParserPosition}

**`Experimental`**

### Properties

* `column` {number} 
* `line` {number} 

### Methods

#### `offset(n)`

> Stability: 1 - Experimental

* `n` {number}
* Returns: {ParserPosition}

**`Experimental`**

***

## Class: `ParserSourceLocation`

**`Experimental`**

The `loc` a node carries when `options.locations` is on.

### Constructors

#### `new ParserSourceLocation(p[, start][, end])`

> Stability: 1 - Experimental

* `p` {object}
* `start` {PositionLike}
* `end` {PositionLike}
* Returns: {ParserSourceLocation}

**`Experimental`**

### Properties

* `end` {PositionLike} 
* `source` {string} 
* `start` {PositionLike} 

***

## Class: `Position`

**`Experimental`**

A `{ line, column }` pair, as `options.locations` reports one.

### Constructors

#### `new Position(line, col)`

> Stability: 1 - Experimental

* `line` {number}
* `col` {number}
* Returns: {Position}

**`Experimental`**

### Properties

* `column` {number} 
* `line` {number} 

### Methods

#### `offset(n)`

> Stability: 1 - Experimental

* `n` {number}
* Returns: {Position}

**`Experimental`**

***

## Class: `ScopeLog`

**`Experimental`**

What a parse with `scopes` saw of names and scopes, in the order it saw
them, keyed by where each name starts: a name can be an object or a tree
node at that point, and a key the parser writes late still starts where it is.
 exposed as `webpack.javascript.syntax.scopes.ScopeLog`; unstable API

### Constructors

#### `new ScopeLog()`

> Stability: 1 - Experimental

* Returns: {ScopeLog}

**`Experimental`**

### Properties

* `blockStarts` {number[]} 
* `blockTypes` {string[]} 
* `count` {number} 
* `ends` {number[]} 
* `infos` {number[]} 
* `names` {string[]} 
* `paramBoundaries` {number[]} 
* `scopeCount` {number} 
* `scopeEnds` {number[]} 
* `scopeFlags` {number[]} 
* `scopeStarts` {number[]} 
* `scopeTypes` {string[]} 
* `shorthandCount` {number} 
* `shorthands` {number[]} 
* `starts` {number[]} 

### Methods

#### `add(kind, start, end, name, binds, reads)`

> Stability: 1 - Experimental

* `kind` {number}
* `start` {number}
* `end` {number}
* `name` {string}
* `binds` {number}
* `reads` {number}
* Returns: {void}

**`Experimental`**

#### `read(start, end, name)`

> Stability: 1 - Experimental

* `start` {number}
* `end` {number}
* `name` {string}
* Returns: {void}

**`Experimental`**

Logs a name an expression reads, the most common event.

#### `readDeclared(from, to)`

> Stability: 1 - Experimental

* `from` {number}
* `to` {number}
* Returns: {void}

**`Experimental`**

Counts one more read of each name declared from `from` to `to`, as an
initializer or a loop head writes them.

#### `reset()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

Empties the log for the next parse; its arrays keep their room, so a log
reused across parses grows once rather than on every parse.

#### `scope(type, blockType, blockStart, from, to, flags, paramBoundary)`

> Stability: 1 - Experimental

* `type` {string}
* `blockType` {string}
* `blockStart` {number}
* `from` {number}
* `to` {number}
* `flags` {number}
* `paramBoundary` {number}
* Returns: {void}

**`Experimental`**

#### `shorthand(start)`

> Stability: 1 - Experimental

* `start` {number}
* Returns: {void}

**`Experimental`**

***

## Class: `TokContext`

**`Experimental`**

A tokenizer context: what kind of brace, paren or template the tokenizer is
inside, which decides how the next `/` or `}` reads.

### Constructors

#### `new TokContext(token, isExpr[, preserveSpace][, override][, generator])`

> Stability: 1 - Experimental

* `token` {string}
* `isExpr` {boolean}
* `preserveSpace` {boolean}
* `override` {object}
* `generator` {boolean}
* Returns: {TokContext}

**`Experimental`**

### Properties

* `generator` {boolean} 
* `isExpr` {boolean} 
* `override` {object} 
* `preserveSpace` {boolean} 
* `token` {string} 

***

## Class: `Token`

**`Experimental`**

A token as `options.onToken` receives one.

### Constructors

#### `new Token(p)`

> Stability: 1 - Experimental

* `p` {SyntaxParser}
* Returns: {Token}

**`Experimental`**

### Properties

* `end` {number} 
* `loc` {ParserSourceLocation} 
* `range` {number[]} 
* `start` {number} 
* `type` {TokenType} 
* `value` {any} 

***

## Class: `TokenType`

**`Experimental`**

A token's kind, carrying what the parser needs to know about it without
re-inspecting the source: whether an expression may follow, its binary
precedence, and how it updates the tokenizer's context.

### Constructors

#### `new TokenType(label[, conf])`

> Stability: 1 - Experimental

* `label` {string}
* `conf` {object}
* Returns: {TokenType}

**`Experimental`**

### Properties

* `beforeExpr` {boolean} 
* `binop` {number} 
* `isAssign` {boolean} 
* `isLoop` {boolean} 
* `keyword` {string} 
* `label` {string} 
* `postfix` {boolean} 
* `prefix` {boolean} 
* `startsExpr` {boolean} 
* `updateContext` {object} 

***

## Class: `WebpackParser`

**`Experimental`**

webpack's parser: acorn plus lazy `range` (no `loc` at all), Set-based scopes,
tokenizer fast paths, import attributes and import phases (with acorn's
`!forNew` guard, unlike the former `acorn-import-phases` package).

### Extends

- {SyntaxParser}

### Constructors

#### `new WebpackParser(options, input[, startPos])`

> Stability: 1 - Experimental

* `options` {OptionsSyntaxParser|object}
* `input` {string}
* `startPos` {number}
* Returns: {WebpackParser}

**`Experimental`**

### Properties

* `allowDirectSuper` {boolean} 
* `allowNewDotTarget` {boolean} 
* `allowReturn` {boolean} 
* `allowSuper` {boolean} 
* `allowUsing` {boolean} 
* `awaitIdentPos` {number} 
* `awaitPos` {number} 
* `canAwait` {boolean} 
* `containsEsc` {boolean} 
* `context` {TokContextLike[]} 
* `curLine` {number} 
* `end` {number} 
* `endLoc` {Position} 
* `exprAllowed` {boolean} 
* `inAsync` {boolean} 
* `inClassStaticBlock` {boolean} 
* `inFunction` {boolean} 
* `inGenerator` {boolean} 
* `inModule` {boolean} 
* `input` {string} 
* `inTemplateElement` {boolean} 
* `keywords` {RegExp} 
* `labels` {LabelLike[]} 
* `lastTokEnd` {number} 
* `lastTokEndLoc` {Position} 
* `lastTokStart` {number} 
* `lastTokStartLoc` {Position} 
* `lineStart` {number} 
* `options` {ResolvedOptionsSyntaxParser} 
* `parsing` {boolean} Set by the parse entry points; a parser that only hands out tokens
keeps its top-level scope and reads its contexts instead.
* `pos` {number} 
* `potentialArrowAt` {number} 
* `potentialArrowInForAwait` {boolean} 
* `privateNameStack` {any[]} 
* `regexpState` {RegExpValidationState} 
* `reservedWords` {RegExp} 
* `reservedWordsStrict` {RegExp} 
* `reservedWordsStrictBind` {RegExp} 
* `scopeStack` {ParserScope[]} 
* `sourceFile` {string} 
* `start` {number} 
* `startLoc` {Position} 
* `strict` {boolean} 
* `treatFunctionsAsVar` {number|boolean} 
* `type` {TokenType} 
* `undefinedExports` {Record} 
* `value` {any} 
* `yieldPos` {number} 

### Methods

#### `[iterator]()`

> Stability: 1 - Experimental

* Returns: {Iterator}

**`Experimental`**

#### `afterTrailingComma(tokType[, notNext])`

> Stability: 1 - Experimental

* `tokType` {TokenType}
* `notNext` {boolean}
* Returns: {boolean}

**`Experimental`**

#### `braceIsBlock(prevType)`

> Stability: 1 - Experimental

* `prevType` {TokenType}
* Returns: {boolean}

**`Experimental`**

Whether a `{` here opens a block rather than an object literal, which the
token before it decides.

#### `buildBinary(startPos, startLoc, left, right, op, logical)`

> Stability: 1 - Experimental

* `startPos` {number}
* `startLoc` {PositionLike}
* `left` {any}
* `right` {any}
* `op` {any}
* `logical` {boolean}
* Returns: {any}

**`Experimental`**

#### `canInsertSemicolon()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

#### `checkExport(exports, name, pos)`

> Stability: 1 - Experimental

* `exports` {any}
* `name` {any}
* `pos` {number}
* Returns: {void}

**`Experimental`**

#### `checkExpressionErrors([refDestructuringErrors][, andThrow])`

> Stability: 1 - Experimental

* `refDestructuringErrors` {any}
* `andThrow` {boolean}
* Returns: {boolean}

**`Experimental`**

#### `checkLocalExport([id])`

> Stability: 1 - Experimental

* `id` {any}
* Returns: {void}

**`Experimental`**

#### `checkLValInnerPattern([expr][, bindingType][, checkClashes])`

> Stability: 1 - Experimental

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

**`Experimental`**

#### `checkLValPattern([expr][, bindingType][, checkClashes])`

> Stability: 1 - Experimental

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

**`Experimental`**

#### `checkLValSimple([expr][, bindingType][, checkClashes])`

> Stability: 1 - Experimental

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

**`Experimental`**

Check a target that may only be an identifier or member expression, and
record the binding it introduces.

#### `checkParams(node, allowDuplicates)`

> Stability: 1 - Experimental

* `node` {any}
* `allowDuplicates` {boolean}
* Returns: {void}

**`Experimental`**

#### `checkPatternErrors(refDestructuringErrors[, isAssign])`

> Stability: 1 - Experimental

* `refDestructuringErrors` {DestructuringErrors}
* `isAssign` {boolean}
* Returns: {void}

**`Experimental`**

#### `checkPropClash([prop][, propHash][, refDestructuringErrors])`

> Stability: 1 - Experimental

* `prop` {any}
* `propHash` {any}
* `refDestructuringErrors` {any}
* Returns: {void}

**`Experimental`**

Report a property name that may not be repeated: a getter or setter that
clashes, and under ES5 a repeated `init` in strict mode.

#### `checkYieldAwaitInDefaultParams()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `curContext()`

> Stability: 1 - Experimental

* Returns: {TokContextLike}

**`Experimental`**

#### `curPosition()`

> Stability: 1 - Experimental

* Returns: {Position}

**`Experimental`**

#### `currentScope()`

> Stability: 1 - Experimental

* Returns: {ParserScope}

**`Experimental`**

#### `currentThisScope()`

> Stability: 1 - Experimental

* Returns: {ParserScope}

**`Experimental`**

#### `currentVarScope()`

> Stability: 1 - Experimental

* Returns: {ParserScope}

**`Experimental`**

#### `declareName(name, bindingType, pos)`

> Stability: 1 - Experimental

* `name` {string}
* `bindingType` {number}
* `pos` {number}
* Returns: {void}

**`Experimental`**

Record a name in the scope its binding belongs to, and report a name that
was already declared there.

#### `eat(type)`

> Stability: 1 - Experimental

* `type` {TokenType}
* Returns: {boolean}

**`Experimental`**

#### `eatContextual(name)`

> Stability: 1 - Experimental

* `name` {string}
* Returns: {boolean}

**`Experimental`**

#### `enterClassBody()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `enterScope(flags)`

> Stability: 1 - Experimental

* `flags` {number}
* Returns: {void}

**`Experimental`**

#### `exitClassBody()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `exitScope()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `expect(type)`

> Stability: 1 - Experimental

* `type` {TokenType}
* Returns: {void}

**`Experimental`**

#### `expectContextual(name)`

> Stability: 1 - Experimental

* `name` {string}
* Returns: {void}

**`Experimental`**

#### `finishNode(node, type)`

> Stability: 1 - Experimental

* `node` {any}
* `type` {string}
* Returns: {any}

**`Experimental`**

#### `finishOp(type, size)`

> Stability: 1 - Experimental

* `type` {TokenType}
* `size` {number}
* Returns: {void}

**`Experimental`**

#### `finishToken(type[, value])`

> Stability: 1 - Experimental

* `type` {TokenType}
* `value` {any}
* Returns: {void}

**`Experimental`**

#### `followsDot()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

Whether the token before the current one is a `.` or a `?.`, read from
the text, as the parser no longer holds the type.

#### `fullCharCodeAt(pos)`

> Stability: 1 - Experimental

* `pos` {number}
* Returns: {number}

**`Experimental`**

#### `fullCharCodeAtPos()`

> Stability: 1 - Experimental

* Returns: {number}

**`Experimental`**

#### `getToken()`

> Stability: 1 - Experimental

* Returns: {Token}

**`Experimental`**

#### `getTokenFromCode(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `inGeneratorContext()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

Whether the enclosing function is a generator. A parse reads its scope: a
method's `*` pushes no `function` context, which only the tokenizer reads.
The tokenizer alone enters no function scope, so it reads its contexts.

#### `initialContext()`

> Stability: 1 - Experimental

* Returns: {TokContextLike[]}

**`Experimental`**

#### `insertSemicolon()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

#### `invalidStringToken(position, message)`

> Stability: 1 - Experimental

* `position` {number}
* `message` {string}
* Returns: {void}

**`Experimental`**

Report a bad escape, unless it sits in a tagged template, where the raw
text is still well-formed and only the cooked value is lost.

#### `isAsyncFunction()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

Whether `async` here heads a function declaration, which no line break may
separate from the `function` keyword.

#### `isAsyncProp([prop])`

> Stability: 1 - Experimental

* `prop` {any}
* Returns: {boolean}

**`Experimental`**

#### `isAwaitUsing([isFor])`

> Stability: 1 - Experimental

* `isFor` {boolean}
* Returns: {boolean}

**`Experimental`**

#### `isClassElementNameStart()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

#### `isContextual(name)`

> Stability: 1 - Experimental

* `name` {string}
* Returns: {boolean}

**`Experimental`**

#### `isLet([context])`

> Stability: 1 - Experimental

* `context` {string}
* Returns: {boolean}

**`Experimental`**

Whether a `let` here opens a lexical declaration rather than naming a
variable, which needs a look-ahead past the keyword.

#### `isSimpleAssignTarget([expr])`

> Stability: 1 - Experimental

* `expr` {any}
* Returns: {boolean}

**`Experimental`**

#### `isUsing([isFor])`

> Stability: 1 - Experimental

* `isFor` {boolean}
* Returns: {boolean}

**`Experimental`**

#### `isUsingKeyword(isAwaitUsing[, isFor])`

> Stability: 1 - Experimental

* `isAwaitUsing` {boolean}
* `isFor` {boolean}
* Returns: {boolean}

**`Experimental`**

Whether `using` (or `await using`) here heads a declaration rather than
naming a variable.

#### `next([ignoreEscapeSequenceInKeyword])`

> Stability: 1 - Experimental

* `ignoreEscapeSequenceInKeyword` {boolean}
* Returns: {void}

**`Experimental`**

Move past the current token.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/tokenize.js

#### `nextToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `overrideContext(tokenCtx)`

> Stability: 1 - Experimental

* `tokenCtx` {TokContextLike}
* Returns: {void}

**`Experimental`**

#### `parse()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseArrowExpression(node, params, isAsync[, forInit])`

> Stability: 1 - Experimental

* `node` {any}
* `params` {any[]}
* `isAsync` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseAssignableListItem([allowModifiers])`

> Stability: 1 - Experimental

* `allowModifiers` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseAwait([forInit])`

> Stability: 1 - Experimental

* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseBindingAtom()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseBindingList(close, allowEmpty, allowTrailingComma[, allowModifiers])`

> Stability: 1 - Experimental

* `close` {TokenType}
* `allowEmpty` {boolean}
* `allowTrailingComma` {boolean}
* `allowModifiers` {boolean}
* Returns: {any[]}

**`Experimental`**

#### `parseBindingListItem([param])`

> Stability: 1 - Experimental

* `param` {any}
* Returns: {any}

**`Experimental`**

#### `parseBlock([createNewLexicalScope][, node][, exitStrict])`

> Stability: 1 - Experimental

* `createNewLexicalScope` {boolean}
* `node` {any}
* `exitStrict` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseCatchClauseParam()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseClass([node][, isStatement])`

> Stability: 1 - Experimental

* `node` {any}
* `isStatement` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseClassElement(constructorAllowsSuper)`

> Stability: 1 - Experimental

* `constructorAllowsSuper` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseClassElementName([element])`

> Stability: 1 - Experimental

* `element` {any}
* Returns: {void}

**`Experimental`**

#### `parseClassField([field])`

> Stability: 1 - Experimental

* `field` {any}
* Returns: {any}

**`Experimental`**

#### `parseClassId([node][, isStatement])`

> Stability: 1 - Experimental

* `node` {any}
* `isStatement` {string|boolean}
* Returns: {void}

**`Experimental`**

#### `parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper)`

> Stability: 1 - Experimental

* `method` {any}
* `isGenerator` {boolean}
* `isAsync` {boolean}
* `allowsDirectSuper` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseClassStaticBlock(start)`

> Stability: 1 - Experimental

* `start` {number}
* Returns: {any}

**`Experimental`**

#### `parseClassSuper([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {void}

**`Experimental`**

#### `parseDynamicImport([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {any}

**`Experimental`**

#### `parseExport([node][, exports])`

> Stability: 1 - Experimental

* `node` {any}
* `exports` {any}
* Returns: {any}

**`Experimental`**

#### `parseExportAllDeclaration([node][, exports])`

> Stability: 1 - Experimental

* `node` {any}
* `exports` {any}
* Returns: {any}

**`Experimental`**

#### `parseExportDeclaration([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {any}

**`Experimental`**

#### `parseExportDefaultDeclaration()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseExportSpecifier([exports])`

> Stability: 1 - Experimental

* `exports` {any}
* Returns: {any}

**`Experimental`**

#### `parseExportSpecifiers([exports])`

> Stability: 1 - Experimental

* `exports` {any}
* Returns: {any[]}

**`Experimental`**

#### `parseExprAtom([refDestructuringErrors][, forInit][, forNew])`

> Stability: 1 - Experimental

* `refDestructuringErrors` {any}
* `forInit` {string|boolean}
* `forNew` {boolean}
* Returns: {any}

**`Experimental`**

Read an expression that no operator binds into: a token that is an
expression on its own, or one that punctuation encloses.

#### `parseExpression([forInit][, refDestructuringErrors])`

> Stability: 1 - Experimental

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

Read a full expression, including the comma operator.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/expression.js

#### `parseExprImport([forNew])`

> Stability: 1 - Experimental

* `forNew` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseExprOp(left, leftStartPos, leftStartLoc, minPrec[, forInit])`

> Stability: 1 - Experimental

* `left` {any}
* `leftStartPos` {number}
* `leftStartLoc` {PositionLike}
* `minPrec` {number}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

Read binary operators by precedence climbing, stopping where an operator
binds less tightly than the caller is parsing.

#### `parseExprOps([forInit][, refDestructuringErrors])`

> Stability: 1 - Experimental

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

#### `parseExprSubscripts([refDestructuringErrors][, forInit])`

> Stability: 1 - Experimental

* `refDestructuringErrors` {any}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseFunction(node, statement[, allowExpressionBody][, isAsync][, forInit])`

> Stability: 1 - Experimental

* `node` {any}
* `statement` {number}
* `allowExpressionBody` {boolean}
* `isAsync` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseFunctionBody([node][, isArrowFunction][, isMethod][, forInit])`

> Stability: 1 - Experimental

* `node` {any}
* `isArrowFunction` {boolean}
* `isMethod` {boolean}
* `forInit` {string|boolean}
* Returns: {void}

**`Experimental`**

#### `parseFunctionParams([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {void}

**`Experimental`**

#### `parseGetterSetter([prop])`

> Stability: 1 - Experimental

* `prop` {any}
* Returns: {void}

**`Experimental`**

#### `parseIdent([liberal])`

> Stability: 1 - Experimental

* `liberal` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseImport([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {any}

**`Experimental`**

#### `parseImportAttribute()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseImportDefaultSpecifier()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseImportMeta([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {any}

**`Experimental`**

#### `parseImportNamespaceSpecifier()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseImportSpecifier()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseImportSpecifiers()`

> Stability: 1 - Experimental

* Returns: {any[]}

**`Experimental`**

#### `parseLabeledStatement([node][, maybeName][, expr][, context])`

> Stability: 1 - Experimental

* `node` {any}
* `maybeName` {any}
* `expr` {any}
* `context` {string}
* Returns: {any}

**`Experimental`**

#### `parseLiteral([value])`

> Stability: 1 - Experimental

* `value` {any}
* Returns: {any}

**`Experimental`**

#### `parseMaybeAssign([forInit][, refDestructuringErrors][, afterLeftParse])`

> Stability: 1 - Experimental

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* `afterLeftParse` {any}
* Returns: {any}

**`Experimental`**

#### `parseMaybeConditional([forInit][, refDestructuringErrors])`

> Stability: 1 - Experimental

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

#### `parseMaybeDefault(startPos[, startLoc][, left])`

> Stability: 1 - Experimental

* `startPos` {number}
* `startLoc` {PositionLike}
* `left` {any}
* Returns: {any}

**`Experimental`**

#### `parseMaybeUnary([refDestructuringErrors][, sawUnary][, incDec][, forInit])`

> Stability: 1 - Experimental

* `refDestructuringErrors` {any}
* `sawUnary` {boolean}
* `incDec` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseMethod([isGenerator][, isAsync][, allowDirectSuper])`

> Stability: 1 - Experimental

* `isGenerator` {boolean}
* `isAsync` {boolean}
* `allowDirectSuper` {boolean}
* Returns: {any}

**`Experimental`**

#### `parseModuleExportName()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseNew()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

Read a `new` expression, whose callee takes subscripts but not a call -
the argument list belongs to the `new` itself.

#### `parseObj(isPattern[, refDestructuringErrors])`

> Stability: 1 - Experimental

* `isPattern` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

#### `parseParenAndDistinguishExpression(canBeArrow[, forInit])`

> Stability: 1 - Experimental

* `canBeArrow` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

Read a parenthesized expression, which is only known to be an arrow's
parameter list once the `=>` after the closing paren is seen.

#### `parseParenArrowList(startPos, startLoc, exprList[, forInit])`

> Stability: 1 - Experimental

* `startPos` {number}
* `startLoc` {PositionLike}
* `exprList` {any[]}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseParenExpression()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseParenItem([item])`

> Stability: 1 - Experimental

* `item` {any}
* Returns: {any}

**`Experimental`**

#### `parsePrivateIdent()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

Reads the current token, a private name, as every caller checked.

#### `parseProperty(isPattern[, refDestructuringErrors])`

> Stability: 1 - Experimental

* `isPattern` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

#### `parsePropertyName([prop])`

> Stability: 1 - Experimental

* `prop` {any}
* Returns: {any}

**`Experimental`**

#### `parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc)`

> Stability: 1 - Experimental

* `prop` {any}
* `isPattern` {boolean}
* `isGenerator` {boolean}
* `isAsync` {boolean}
* `startPos` {number}
* `startLoc` {PositionLike}
* `refDestructuringErrors` {any}
* `containsEsc` {boolean}
* Returns: {void}

**`Experimental`**

#### `parseRestBinding()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `parseSpread([refDestructuringErrors])`

> Stability: 1 - Experimental

* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

#### `parseStatement([context][, topLevel][, exports])`

> Stability: 1 - Experimental

* `context` {string}
* `topLevel` {boolean}
* `exports` {any}
* Returns: {any}

**`Experimental`**

Read one statement. A statement head that is only a keyword by position -
`let`, `async`, `using` - is settled by the probes above.

#### `parseSubscript(baseExpr, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained[, forInit])`

> Stability: 1 - Experimental

* `baseExpr` {any}
* `startPos` {number}
* `startLoc` {PositionLike}
* `noCalls` {boolean}
* `maybeAsyncArrow` {boolean}
* `optionalChained` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseSubscriptAsyncArrow(startPos, startLoc, exprList[, forInit])`

> Stability: 1 - Experimental

* `startPos` {number}
* `startLoc` {PositionLike}
* `exprList` {any[]}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseSubscripts(baseExpr, startPos, startLoc, noCalls[, forInit])`

> Stability: 1 - Experimental

* `baseExpr` {any}
* `startPos` {number}
* `startLoc` {PositionLike}
* `noCalls` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `parseTemplate([opts])`

> Stability: 1 - Experimental

* `opts` {object}
* Returns: {any}

**`Experimental`**

#### `parseTemplateElement(opts)`

> Stability: 1 - Experimental

* `opts` {object}
* Returns: {any}

**`Experimental`**

#### `parseTopLevel([node])`

> Stability: 1 - Experimental

* `node` {any}
* Returns: {any}

**`Experimental`**

Read statements until the end of input and wrap them in a `Program`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/statement.js

#### `parseWithClause()`

> Stability: 1 - Experimental

* Returns: {any[]}

**`Experimental`**

#### `parseYield([forInit])`

> Stability: 1 - Experimental

* `forInit` {string|boolean}
* Returns: {any}

**`Experimental`**

#### `raise(pos, message)`

> Stability: 1 - Experimental

* `pos` {number}
* `message` {string}
* Returns: {never}

**`Experimental`**

Report a parse error, naming where in the source it was found.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/location.js

#### `raiseRecoverable(pos, message)`

> Stability: 1 - Experimental

* `pos` {number}
* `message` {string}
* Returns: {void}

**`Experimental`**

An error the parse can go on past: `parseProgram` reports it and goes on.

#### `readCodePoint()`

> Stability: 1 - Experimental

* Returns: {number}

**`Experimental`**

#### `readEscapedChar(inTemplate)`

> Stability: 1 - Experimental

* `inTemplate` {boolean}
* Returns: {string}

**`Experimental`**

#### `readHexChar(len)`

> Stability: 1 - Experimental

* `len` {number}
* Returns: {number}

**`Experimental`**

#### `readHtmlOpenAsOperators(pos)`

> Stability: 1 - Experimental

* `pos` {number}
* Returns: {void}

**`Experimental`**

A module reads `<!--` as `<`, `!` and `--`, where a script, as webpack
emits a module into, reads an HTML-style comment.

#### `readInt(radix[, len][, maybeLegacyOctalNumericLiteral])`

> Stability: 1 - Experimental

* `radix` {number}
* `len` {number}
* `maybeLegacyOctalNumericLiteral` {boolean}
* Returns: {number}

**`Experimental`**

Read digits in the given radix, or `null` where none were there or the
count did not match what an escape asked for.

#### `readInvalidTemplateToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readNumber(startsWithDot)`

> Stability: 1 - Experimental

* `startsWithDot` {boolean}
* Returns: {void}

**`Experimental`**

#### `readRadixNumber(radix)`

> Stability: 1 - Experimental

* `radix` {number}
* Returns: {void}

**`Experimental`**

#### `readRegexp()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readString(quote)`

> Stability: 1 - Experimental

* `quote` {number}
* Returns: {void}

**`Experimental`**

#### `readTmplToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_caret()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_dot()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_eq_excl(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_lt_gt(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_mult_modulo_exp(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_numberSign()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_pipe_amp(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_plus_min(code)`

> Stability: 1 - Experimental

* `code` {number}
* Returns: {void}

**`Experimental`**

#### `readToken_question()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readToken_slash()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readWord()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `readWord1()`

> Stability: 1 - Experimental

* Returns: {string}

**`Experimental`**

Read an identifier's text, recording in `containsEsc` whether any of it
was written as an escape - which stops it reading as a keyword.

#### `semicolon()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `shouldParseArrow(exprList)`

> Stability: 1 - Experimental

* `exprList` {any[]}
* Returns: {boolean}

**`Experimental`**

#### `shouldParseAsyncArrow()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

#### `shouldParseExportStatement()`

> Stability: 1 - Experimental

* Returns: {boolean}

**`Experimental`**

#### `skipBlockComment()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `skipLineComment(startSkip)`

> Stability: 1 - Experimental

* `startSkip` {number}
* Returns: {void}

**`Experimental`**

#### `skipSpace()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `startNode()`

> Stability: 1 - Experimental

* Returns: {any}

**`Experimental`**

#### `startNodeAt(pos[, loc])`

> Stability: 1 - Experimental

* `pos` {number}
* `loc` {PositionLike}
* Returns: {any}

**`Experimental`**

#### `strictDirective(start)`

> Stability: 1 - Experimental

* `start` {number}
* Returns: {boolean}

**`Experimental`**

Whether a directive prologue starting at `start` opens with `"use strict"`.
acorn source: https://github.com/acornjs/acorn/blob/8.19.0/acorn/src/parseutil.js

#### `toAssignable([node][, isBinding][, refDestructuringErrors])`

> Stability: 1 - Experimental

* `node` {any}
* `isBinding` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

**`Experimental`**

Rewrite an expression as the binding pattern it turns out to be, which is
only known once the `=` or `of` after it has been read.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/lval.js

#### `toAssignableList(exprList[, isBinding])`

> Stability: 1 - Experimental

* `exprList` {any[]}
* `isBinding` {boolean}
* Returns: {any[]}

**`Experimental`**

#### `treatFunctionsAsVarInScope(scope)`

> Stability: 1 - Experimental

* `scope` {object}
* Returns: {number|boolean}

**`Experimental`**

#### `tryReadTemplateToken()`

> Stability: 1 - Experimental

* Returns: {void}

**`Experimental`**

#### `unexpected([pos])`

> Stability: 1 - Experimental

* `pos` {number}
* Returns: {never}

**`Experimental`**

#### `updateContext(prevType)`

> Stability: 1 - Experimental

* `prevType` {TokenType}
* Returns: {void}

**`Experimental`**

#### `validateRegExpFlags(state)`

> Stability: 1 - Experimental

* `state` {RegExpValidationState}
* Returns: {void}

**`Experimental`**

Check a regexp literal's flags.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/regexp.js

#### `validateRegExpPattern(state)`

> Stability: 1 - Experimental

* `state` {RegExpValidationState}
* Returns: {void}

**`Experimental`**

Check a regexp literal's pattern, re-reading it once a group name shows
that the named-capture goal symbol was the right one.

#### Static method: `tokenizer(input[, options])`

> Stability: 1 - Experimental

* `input` {string}
* `options` {Partial}
* Returns: {SyntaxParser}

**`Experimental`**

***

## `A`

> **A**: {JavascriptSyntaxPath}

**`Experimental`**

***

## `codePointToString`

> **codePointToString**: {object}

**`Experimental`**

* `code` {number}
* Returns: {string}

***

## `collectCjsRequireSpecifiers`

> **collectCjsRequireSpecifiers**: {object}

**`Experimental`**

* `source` {string}
* Returns: {Set}

***

## `collectEsmImportSpecifiers`

> **collectEsmImportSpecifiers**: {object}

**`Experimental`**

* `source` {string}
* Returns: {Map}

***

## `Field`

> **Field**: {Readonly}

**`Experimental`**

***

## `Flag`

> **Flag**: {Readonly}

**`Experimental`**

***

## `fromEstreeObject`

> **fromEstreeObject**: {object}

**`Experimental`**

* `program` {Program}
* `input` {string}
* Returns: {number}

***

## `getLineInfo`

> **getLineInfo**: {object}

**`Experimental`**

* `input` {string}
* `offset` {number}
* Returns: {Position}

***

## `getOptions`

> **getOptions**: {object}

**`Experimental`**

* `opts` {null|Partial}
* Returns: {ResolvedOptionsSyntaxParser}

***

## `grammar`

> **grammar**: {object}

**`Experimental`**

* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {undefined|PrintContext}
* `options` {JavascriptProcessOptions}
* `path` {JavascriptSyntaxPath}
* Returns: {void}

***

## `hasOctalEscape`

> **hasOctalEscape**: {object}

**`Experimental`**

* `raw` {string}
* Returns: {boolean}

***

## `isIdentifierChar`

> **isIdentifierChar**: {object}

**`Experimental`**

* `code` {number}
* `astral` {boolean}
* Returns: {boolean}

***

## `isIdentifierStart`

> **isIdentifierStart**: {object}

**`Experimental`**

* `code` {number}
* `astral` {boolean}
* Returns: {boolean}

***

## `isNewLine`

> **isNewLine**: {object}

**`Experimental`**

* `code` {number}
* Returns: {boolean}

***

## `isWalkingSyntaxTree`

> **isWalkingSyntaxTree**: {object}

**`Experimental`**

* Returns: {boolean}

***

## `keywordTypes`

> **keywordTypes**: {Record}

**`Experimental`**

***

## `lazyObjectOfSource`

> **lazyObjectOfSource**: {object}

**`Experimental`**

* `source` {LazySource}
* `node` {number}
* Returns: {null|ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration|ImportExpressionImport|UnaryExpression|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ClassExpression|ConditionalExpression|FunctionExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UpdateExpression|YieldExpression|SpreadElement|PrivateIdentifier|Super|FunctionDeclaration|VariableDeclaration|ClassDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|ExportDefaultDeclaration|MethodDefinition|PropertyDefinition|VariableDeclarator|Program|AssignmentProperty|Property|CatchClause|ClassBody|ImportSpecifier|ImportDefaultSpecifier|ImportNamespaceSpecifier|ExportSpecifier|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern|SwitchCase|TemplateElement}

***

## `LEGACY_ASSERT_ATTRIBUTES`

> `const` **LEGACY\_ASSERT\_ATTRIBUTES**: {symbol}

**`Experimental`**

***

## `lineBreak`

> **lineBreak**: {RegExp}

**`Experimental`**

***

## `nextLineBreak`

> **nextLineBreak**: {object}

**`Experimental`**

* `code` {string}
* `from` {number}
* `end` {number}
* Returns: {number}

***

## `NodeType`

> **NodeType**: {Readonly}

**`Experimental`**

***

## `nonASCIIwhitespace`

> **nonASCIIwhitespace**: {RegExp}

**`Experimental`**

***

## `parsedTree`

> **parsedTree**: {object}

**`Experimental`**

* Returns: {null|ColumnarSyntaxTree}

***

## `parseProgram`

> **parseProgram**: {_functionSyntaxParserFunction_1}

**`Experimental`**

***

## `Part`

> **Part**: {Readonly}

**`Experimental`**

***

## `printEarlyIn`

> **printEarlyIn**: {object}

**`Experimental`**

* `early` {Map}
* Returns: {void}

***

## `readParsedTree`

> **readParsedTree**: {object}

**`Experimental`**

* `tree` {ColumnarSyntaxTree}
* `input` {string}
* Returns: {void}

***

## `releaseParserCaches`

> **releaseParserCaches**: {object}

**`Experimental`**

* Returns: {void}

***

## `STATEMENT_TYPES_WITHOUT_BINDINGS`

> **STATEMENT\_TYPES\_WITHOUT\_BINDINGS**: {Set}

**`Experimental`**

***

## `syntaxTreeOfEstree`

> **syntaxTreeOfEstree**: {object}

**`Experimental`**

* `program` {NodeEstreeIndex}
* `input` {string}
* Returns: {object}

***

## `takeParsedTree`

> **takeParsedTree**: {object}

**`Experimental`**

* Returns: {null|ColumnarSyntaxTree}

***

## `toEstreeObject`

> **toEstreeObject**: {object}

**`Experimental`**

* `node` {number}
* `options` {EstreeObjectOptions}
* Returns: {null|ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration|ImportExpressionImport|UnaryExpression|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ClassExpression|ConditionalExpression|FunctionExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UpdateExpression|YieldExpression|SpreadElement|PrivateIdentifier|Super|FunctionDeclaration|VariableDeclaration|ClassDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|ExportDefaultDeclaration|MethodDefinition|PropertyDefinition|VariableDeclarator|Program|AssignmentProperty|Property|CatchClause|ClassBody|ImportSpecifier|ImportDefaultSpecifier|ImportNamespaceSpecifier|ExportSpecifier|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern|SwitchCase|TemplateElement}

***

## `walkSyntaxTree`

> **walkSyntaxTree**: {object}

**`Experimental`**

* `tree` {ColumnarSyntaxTree}
* `program` {number}
* `input` {string}
* `visitors` {CompiledVisitorBucket[]}
* `writer` {PrintContext}
* `inlined` {Uint8Array}
* `path` {JavascriptSyntaxPath}
* Returns: {void}

***

## `wordsRegexp`

> **wordsRegexp**: {object}

**`Experimental`**

* `words` {string}
* Returns: {RegExp}
