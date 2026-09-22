# parser

## Namespaces

- [defaultOptions](namespaces/defaultOptions.md)
- [tokContexts](namespaces/tokContexts.md)
- [tokTypes](namespaces/tokTypes.md)

## Class: `DestructuringErrors`

Where a shorthand assignment, trailing comma or parenthesized pattern was
seen, so the expression parser can raise once it knows whether it is
parsing an expression or a binding pattern.

### Constructors

#### `new DestructuringErrors()`

* Returns: {DestructuringErrors}

### Properties

* `doubleProto` {number}
* `parenthesizedAssign` {number}
* `parenthesizedBind` {number}
* `shorthandAssign` {number}
* `trailingComma` {number}

***

## Class: `Label`

A label in scope, and what may jump to it.

### Constructors

#### `new Label(kind[, name][, statementStart])`

* `kind` {string}
* `name` {string}
* `statementStart` {number}
* Returns: {Label}

### Properties

* `kind` {string}
* `name` {string}
* `statementStart` {number}

***

## Class: `Parser`

The ECMAScript parser webpack owns, ported from acorn 8.18.0 so the bundler
ships no parser dependency. `WebpackParser` below subclasses it and
overrides the hot paths.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/state.js

### Extended by

- {WebpackParser}

### Constructors

#### `new Parser(options, input[, startPos])`

* `options` {Partial}
* `input` {string}
* `startPos` {number}
* Returns: {ParserSyntaxParser}

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
* `pos` {number}
* `potentialArrowAt` {number}
* `potentialArrowInForAwait` {boolean}
* `privateNameStack` {any[]}
* `regexpState` {RegExpValidationState}
* `reservedWords` {RegExp}
* `reservedWordsStrict` {RegExp}
* `reservedWordsStrictBind` {RegExp}
* `scopeStack` {ScopeSyntaxParser[]}
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

* Returns: {Iterator}

#### `adaptDirectivePrologue(statements)`

* `statements` {any[]}
* Returns: {void}

#### `afterTrailingComma(tokType[, notNext])`

* `tokType` {TokenType}
* `notNext` {boolean}
* Returns: {boolean}

#### `braceIsBlock(prevType)`

* `prevType` {TokenType}
* Returns: {boolean}

Whether a `{` here opens a block rather than an object literal, which the
token before it decides.

#### `buildBinary(startPos, startLoc, left, right, op, logical)`

* `startPos` {number}
* `startLoc` {PositionLike}
* `left` {any}
* `right` {any}
* `op` {any}
* `logical` {boolean}
* Returns: {any}

#### `canInsertSemicolon()`

* Returns: {boolean}

#### `catchStackOverflow(f)`

###### T

`T`
* `f` {object}
* Returns: {T}

Turn the host's stack overflow into a parse error, since a deeply nested
expression is an input the caller can act on rather than a crash.

#### `checkExport(exports, name, pos)`

* `exports` {any}
* `name` {any}
* `pos` {number}
* Returns: {void}

#### `checkExpressionErrors([refDestructuringErrors][, andThrow])`

* `refDestructuringErrors` {any}
* `andThrow` {boolean}
* Returns: {boolean}

#### `checkLocalExport([id])`

* `id` {any}
* Returns: {void}

#### `checkLValInnerPattern([expr][, bindingType][, checkClashes])`

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

#### `checkLValPattern([expr][, bindingType][, checkClashes])`

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

#### `checkLValSimple([expr][, bindingType][, checkClashes])`

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

Check a target that may only be an identifier or member expression, and
record the binding it introduces.

#### `checkParams(node, allowDuplicates)`

* `node` {any}
* `allowDuplicates` {boolean}
* Returns: {void}

#### `checkPatternErrors([refDestructuringErrors][, isAssign])`

* `refDestructuringErrors` {any}
* `isAssign` {boolean}
* Returns: {void}

#### `checkPatternExport([exports][, pat])`

* `exports` {any}
* `pat` {any}
* Returns: {void}

#### `checkPropClash([prop][, propHash][, refDestructuringErrors])`

* `prop` {any}
* `propHash` {any}
* `refDestructuringErrors` {any}
* Returns: {void}

Report a property name that may not be repeated: a getter or setter that
clashes, and under ES5 a repeated `init` in strict mode.

#### `checkUnreserved([ref])`

* `ref` {any}
* Returns: {void}

Report a name that the surrounding code may not use as an identifier.

#### `checkVariableExport(exports, declarations)`

* `exports` {any}
* `declarations` {any[]}
* Returns: {void}

#### `checkYieldAwaitInDefaultParams()`

* Returns: {void}

#### `copyNode([node])`

* `node` {any}
* Returns: {any}

#### `curContext()`

* Returns: {TokContextLike}

#### `curPosition()`

* Returns: {Position}

#### `currentScope()`

* Returns: {ScopeSyntaxParser}

#### `currentThisScope()`

* Returns: {ScopeSyntaxParser}

#### `currentVarScope()`

* Returns: {ScopeSyntaxParser}

#### `declareName(name, bindingType, pos)`

* `name` {string}
* `bindingType` {number}
* `pos` {number}
* Returns: {void}

Record a name in the scope its binding belongs to, and report a name that
was already declared there.

#### `eat(type)`

* `type` {TokenType}
* Returns: {boolean}

#### `eatContextual(name)`

* `name` {string}
* Returns: {boolean}

#### `enterClassBody()`

* Returns: {any}

#### `enterScope(flags)`

* `flags` {number}
* Returns: {void}

#### `exitClassBody()`

* Returns: {void}

#### `exitScope()`

* Returns: {void}

#### `expect(type)`

* `type` {TokenType}
* Returns: {void}

#### `expectContextual(name)`

* `name` {string}
* Returns: {void}

#### `finishNode(node, type)`

* `node` {any}
* `type` {string}
* Returns: {any}

#### `finishNodeAt(node, type, pos[, loc])`

* `node` {any}
* `type` {string}
* `pos` {number}
* `loc` {PositionLike}
* Returns: {any}

#### `finishOp(type, size)`

* `type` {TokenType}
* `size` {number}
* Returns: {void}

#### `finishToken(type[, value])`

* `type` {TokenType}
* `value` {any}
* Returns: {void}

#### `fullCharCodeAt(pos)`

* `pos` {number}
* Returns: {number}

#### `fullCharCodeAtPos()`

* Returns: {number}

#### `getToken()`

* Returns: {TokenSyntaxParserClass}

#### `getTokenFromCode(code)`

* `code` {number}
* Returns: {void}

#### `inGeneratorContext()`

* Returns: {boolean}

#### `initFunction([node])`

* `node` {any}
* Returns: {void}

#### `initialContext()`

* Returns: {TokContextLike[]}

#### `insertSemicolon()`

* Returns: {boolean}

#### `invalidStringToken(position, message)`

* `position` {number}
* `message` {string}
* Returns: {void}

Report a bad escape, unless it sits in a tagged template, where the raw
text is still well-formed and only the cooked value is lost.

#### `isAsyncFunction()`

* Returns: {boolean}

Whether `async` here heads a function declaration, which no line break may
separate from the `function` keyword.

#### `isAsyncProp([prop])`

* `prop` {any}
* Returns: {boolean}

#### `isAwaitUsing([isFor])`

* `isFor` {boolean}
* Returns: {boolean}

#### `isClassElementNameStart()`

* Returns: {boolean}

#### `isContextual(name)`

* `name` {string}
* Returns: {boolean}

#### `isDirectiveCandidate(statement)`

* `statement` {NodeLike|object}
* Returns: {boolean}

#### `isLet([context])`

* `context` {string}
* Returns: {boolean}

Whether a `let` here opens a lexical declaration rather than naming a
variable, which needs a look-ahead past the keyword.

#### `isSimpleAssignTarget([expr])`

* `expr` {any}
* Returns: {boolean}

#### `isSimpleParamList(params)`

* `params` {any[]}
* Returns: {boolean}

#### `isUsing([isFor])`

* `isFor` {boolean}
* Returns: {boolean}

#### `isUsingKeyword(isAwaitUsing[, isFor])`

* `isAwaitUsing` {boolean}
* `isFor` {boolean}
* Returns: {boolean}

Whether `using` (or `await using`) here heads a declaration rather than
naming a variable.

#### `next([ignoreEscapeSequenceInKeyword])`

* `ignoreEscapeSequenceInKeyword` {boolean}
* Returns: {void}

Move past the current token.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/tokenize.js

#### `nextToken()`

* Returns: {void}

#### `overrideContext(tokenCtx)`

* `tokenCtx` {TokContextLike}
* Returns: {void}

#### `parse()`

* Returns: {any}

#### `parseArrowExpression(node, params, isAsync[, forInit])`

* `node` {any}
* `params` {any[]}
* `isAsync` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseAssignableListItem([allowModifiers])`

* `allowModifiers` {boolean}
* Returns: {any}

#### `parseAwait([forInit])`

* `forInit` {string|boolean}
* Returns: {any}

#### `parseBindingAtom()`

* Returns: {any}

#### `parseBindingList(close, allowEmpty, allowTrailingComma[, allowModifiers])`

* `close` {TokenType}
* `allowEmpty` {boolean}
* `allowTrailingComma` {boolean}
* `allowModifiers` {boolean}
* Returns: {any[]}

#### `parseBindingListItem([param])`

* `param` {any}
* Returns: {any}

#### `parseBlock([createNewLexicalScope][, node][, exitStrict])`

* `createNewLexicalScope` {boolean}
* `node` {any}
* `exitStrict` {boolean}
* Returns: {any}

#### `parseBreakContinueStatement(node, keyword)`

* `node` {any}
* `keyword` {string}
* Returns: {any}

#### `parseCatchClauseParam()`

* Returns: {any}

#### `parseClass([node][, isStatement])`

* `node` {any}
* `isStatement` {string|boolean}
* Returns: {any}

#### `parseClassElement(constructorAllowsSuper)`

* `constructorAllowsSuper` {boolean}
* Returns: {any}

#### `parseClassElementName([element])`

* `element` {any}
* Returns: {void}

#### `parseClassField([field])`

* `field` {any}
* Returns: {any}

#### `parseClassId([node][, isStatement])`

* `node` {any}
* `isStatement` {string|boolean}
* Returns: {void}

#### `parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper)`

* `method` {any}
* `isGenerator` {boolean}
* `isAsync` {boolean}
* `allowsDirectSuper` {boolean}
* Returns: {any}

#### `parseClassStaticBlock([node])`

* `node` {any}
* Returns: {any}

#### `parseClassSuper([node])`

* `node` {any}
* Returns: {void}

#### `parseDebuggerStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseDoStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseDynamicImport([node])`

* `node` {any}
* Returns: {any}

#### `parseEmptyStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseExport([node][, exports])`

* `node` {any}
* `exports` {any}
* Returns: {any}

#### `parseExportAllDeclaration([node][, exports])`

* `node` {any}
* `exports` {any}
* Returns: {any}

#### `parseExportDeclaration([node])`

* `node` {any}
* Returns: {any}

#### `parseExportDefaultDeclaration()`

* Returns: {any}

#### `parseExportSpecifier([exports])`

* `exports` {any}
* Returns: {any}

#### `parseExportSpecifiers([exports])`

* `exports` {any}
* Returns: {any[]}

#### `parseExprAtom([refDestructuringErrors][, forInit][, forNew])`

* `refDestructuringErrors` {any}
* `forInit` {string|boolean}
* `forNew` {boolean}
* Returns: {any}

Read an expression that no operator binds into: a token that is an
expression on its own, or one that punctuation encloses.

#### `parseExprAtomDefault()`

* Returns: {never}

#### `parseExpression([forInit][, refDestructuringErrors])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

Read a full expression, including the comma operator.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/expression.js

#### `parseExpressionStatement([node][, expr])`

* `node` {any}
* `expr` {any}
* Returns: {any}

#### `parseExprImport([forNew])`

* `forNew` {boolean}
* Returns: {any}

#### `parseExprList(close, allowTrailingComma, allowEmpty[, refDestructuringErrors])`

* `close` {TokenType}
* `allowTrailingComma` {boolean}
* `allowEmpty` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any[]}

#### `parseExprOp(left, leftStartPos, leftStartLoc, minPrec[, forInit])`

* `left` {any}
* `leftStartPos` {number}
* `leftStartLoc` {PositionLike}
* `minPrec` {number}
* `forInit` {string|boolean}
* Returns: {any}

Read binary operators by precedence climbing, stopping where an operator
binds less tightly than the caller is parsing.

#### `parseExprOps([forInit][, refDestructuringErrors])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseExprSubscripts([refDestructuringErrors][, forInit])`

* `refDestructuringErrors` {any}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseFor([node][, init])`

* `node` {any}
* `init` {any}
* Returns: {any}

#### `parseForAfterInit(node, init, awaitAt)`

* `node` {any}
* `init` {any}
* `awaitAt` {number}
* Returns: {any}

#### `parseForIn([node][, init])`

* `node` {any}
* `init` {any}
* Returns: {any}

#### `parseForStatement([node])`

* `node` {any}
* Returns: {any}

Read a `for` head, which is only known to be plain, `in` or `of` once its
init part has been parsed with `in` held back as an operator.

#### `parseFunction(node, statement[, allowExpressionBody][, isAsync][, forInit])`

* `node` {any}
* `statement` {number}
* `allowExpressionBody` {boolean}
* `isAsync` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseFunctionBody([node][, isArrowFunction][, isMethod][, forInit])`

* `node` {any}
* `isArrowFunction` {boolean}
* `isMethod` {boolean}
* `forInit` {string|boolean}
* Returns: {void}

#### `parseFunctionParams([node])`

* `node` {any}
* Returns: {void}

#### `parseFunctionStatement(node, isAsync, declarationPosition)`

* `node` {any}
* `isAsync` {boolean}
* `declarationPosition` {boolean}
* Returns: {any}

#### `parseGetterSetter([prop])`

* `prop` {any}
* Returns: {void}

#### `parseIdent([liberal])`

* `liberal` {boolean}
* Returns: {any}

#### `parseIdentNode()`

* Returns: {any}

#### `parseIfStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseImport([node])`

* `node` {any}
* Returns: {any}

#### `parseImportAttribute()`

* Returns: {any}

#### `parseImportDefaultSpecifier()`

* Returns: {any}

#### `parseImportMeta([node])`

* `node` {any}
* Returns: {any}

#### `parseImportNamespaceSpecifier()`

* Returns: {any}

#### `parseImportSpecifier()`

* Returns: {any}

#### `parseImportSpecifiers()`

* Returns: {any[]}

#### `parseLabeledStatement([node][, maybeName][, expr][, context])`

* `node` {any}
* `maybeName` {any}
* `expr` {any}
* `context` {string}
* Returns: {any}

#### `parseLiteral([value])`

* `value` {any}
* Returns: {any}

#### `parseMaybeAssign([forInit][, refDestructuringErrors][, afterLeftParse])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* `afterLeftParse` {any}
* Returns: {any}

#### `parseMaybeConditional([forInit][, refDestructuringErrors])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseMaybeDefault(startPos[, startLoc][, left])`

* `startPos` {number}
* `startLoc` {PositionLike}
* `left` {any}
* Returns: {any}

#### `parseMaybeUnary([refDestructuringErrors][, sawUnary][, incDec][, forInit])`

* `refDestructuringErrors` {any}
* `sawUnary` {boolean}
* `incDec` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseMethod([isGenerator][, isAsync][, allowDirectSuper])`

* `isGenerator` {boolean}
* `isAsync` {boolean}
* `allowDirectSuper` {boolean}
* Returns: {any}

#### `parseModuleExportName()`

* Returns: {any}

#### `parseNew()`

* Returns: {any}

Read a `new` expression, whose callee takes subscripts but not a call —
the argument list belongs to the `new` itself.

#### `parseObj(isPattern[, refDestructuringErrors])`

* `isPattern` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseParenAndDistinguishExpression(canBeArrow[, forInit])`

* `canBeArrow` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

Read a parenthesized expression, which is only known to be an arrow's
parameter list once the `=>` after the closing paren is seen.

#### `parseParenArrowList(startPos, startLoc, exprList[, forInit])`

* `startPos` {number}
* `startLoc` {PositionLike}
* `exprList` {any[]}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseParenExpression()`

* Returns: {any}

#### `parseParenItem([item])`

* `item` {any}
* Returns: {any}

#### `parsePrivateIdent()`

* Returns: {any}

#### `parseProperty(isPattern[, refDestructuringErrors])`

* `isPattern` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parsePropertyName([prop])`

* `prop` {any}
* Returns: {any}

#### `parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc)`

* `prop` {any}
* `isPattern` {boolean}
* `isGenerator` {boolean}
* `isAsync` {boolean}
* `startPos` {number}
* `startLoc` {PositionLike}
* `refDestructuringErrors` {any}
* `containsEsc` {boolean}
* Returns: {void}

#### `parseRestBinding()`

* Returns: {any}

#### `parseReturnStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseSpread([refDestructuringErrors])`

* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseStatement([context][, topLevel][, exports])`

* `context` {string}
* `topLevel` {boolean}
* `exports` {any}
* Returns: {any}

Read one statement. A statement head that is only a keyword by position —
`let`, `async`, `using` — is settled by the probes above.

#### `parseSubscript(baseExpr, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained[, forInit])`

* `baseExpr` {any}
* `startPos` {number}
* `startLoc` {PositionLike}
* `noCalls` {boolean}
* `maybeAsyncArrow` {boolean}
* `optionalChained` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseSubscriptAsyncArrow(startPos, startLoc, exprList[, forInit])`

* `startPos` {number}
* `startLoc` {PositionLike}
* `exprList` {any[]}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseSubscripts(baseExpr, startPos, startLoc, noCalls[, forInit])`

* `baseExpr` {any}
* `startPos` {number}
* `startLoc` {PositionLike}
* `noCalls` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseSwitchStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseTemplate([opts])`

* `opts` {object}
* Returns: {any}

#### `parseTemplateElement(opts)`

* `opts` {object}
* Returns: {any}

#### `parseThrowStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseTopLevel([node])`

* `node` {any}
* Returns: {any}

Read statements until the end of input and wrap them in a `Program`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/statement.js

#### `parseTryStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseVar(node, isFor, kind[, allowMissingInitializer])`

* `node` {any}
* `isFor` {boolean}
* `kind` {string}
* `allowMissingInitializer` {boolean}
* Returns: {any}

#### `parseVarId(decl, kind)`

* `decl` {any}
* `kind` {string}
* Returns: {void}

#### `parseVarStatement(node, kind[, allowMissingInitializer])`

* `node` {any}
* `kind` {string}
* `allowMissingInitializer` {boolean}
* Returns: {any}

#### `parseWhileStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseWithClause()`

* Returns: {any[]}

#### `parseWithStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseYield([forInit])`

* `forInit` {string|boolean}
* Returns: {any}

#### `raise(pos, message)`

* `pos` {number}
* `message` {string}
* Returns: {never}

Report a parse error, naming where in the source it was found.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/location.js

#### `raiseRecoverable(pos, message)`

* `pos` {number}
* `message` {string}
* Returns: {never}

#### `readCodePoint()`

* Returns: {number}

#### `readEscapedChar(inTemplate)`

* `inTemplate` {boolean}
* Returns: {string}

#### `readHexChar(len)`

* `len` {number}
* Returns: {number}

#### `readInt(radix[, len][, maybeLegacyOctalNumericLiteral])`

* `radix` {number}
* `len` {number}
* `maybeLegacyOctalNumericLiteral` {boolean}
* Returns: {number}

Read digits in the given radix, or `null` where none were there or the
count did not match what an escape asked for.

#### `readInvalidTemplateToken()`

* Returns: {void}

#### `readNumber(startsWithDot)`

* `startsWithDot` {boolean}
* Returns: {void}

#### `readRadixNumber(radix)`

* `radix` {number}
* Returns: {void}

#### `readRegexp()`

* Returns: {void}

#### `readString(quote)`

* `quote` {number}
* Returns: {void}

#### `readTmplToken()`

* Returns: {void}

#### `readToken(code)`

* `code` {number}
* Returns: {void}

#### `readToken_caret()`

* Returns: {void}

#### `readToken_dot()`

* Returns: {void}

#### `readToken_eq_excl(code)`

* `code` {number}
* Returns: {void}

#### `readToken_lt_gt(code)`

* `code` {number}
* Returns: {void}

#### `readToken_mult_modulo_exp(code)`

* `code` {number}
* Returns: {void}

#### `readToken_numberSign()`

* Returns: {void}

#### `readToken_pipe_amp(code)`

* `code` {number}
* Returns: {void}

#### `readToken_plus_min(code)`

* `code` {number}
* Returns: {void}

#### `readToken_question()`

* Returns: {void}

#### `readToken_slash()`

* Returns: {void}

#### `readWord()`

* Returns: {void}

#### `readWord1()`

* Returns: {string}

Read an identifier's text, recording in `containsEsc` whether any of it
was written as an escape — which stops it reading as a keyword.

#### `semicolon()`

* Returns: {void}

#### `shouldParseArrow(exprList)`

* `exprList` {any[]}
* Returns: {boolean}

#### `shouldParseAsyncArrow()`

* Returns: {boolean}

#### `shouldParseExportStatement()`

* Returns: {boolean}

#### `skipBlockComment()`

* Returns: {void}

#### `skipLineComment(startSkip)`

* `startSkip` {number}
* Returns: {void}

#### `skipSpace()`

* Returns: {void}

#### `startNode()`

* Returns: {any}

#### `startNodeAt(pos[, loc])`

* `pos` {number}
* `loc` {PositionLike}
* Returns: {any}

#### `strictDirective(start)`

* `start` {number}
* Returns: {boolean}

Whether a directive prologue starting at `start` opens with `"use strict"`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/parseutil.js

#### `toAssignable([node][, isBinding][, refDestructuringErrors])`

* `node` {any}
* `isBinding` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

Rewrite an expression as the binding pattern it turns out to be, which is
only known once the `=` or `of` after it has been read.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/lval.js

#### `toAssignableList(exprList[, isBinding])`

* `exprList` {any[]}
* `isBinding` {boolean}
* Returns: {any[]}

#### `treatFunctionsAsVarInScope(scope)`

* `scope` {object}
* Returns: {number|boolean}

#### `tryReadTemplateToken()`

* Returns: {void}

#### `unexpected([pos])`

* `pos` {number}
* Returns: {never}

#### `updateContext(prevType)`

* `prevType` {TokenType}
* Returns: {void}

#### `validateRegExpFlags(state)`

* `state` {RegExpValidationState}
* Returns: {void}

Check a regexp literal's flags.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/regexp.js

#### `validateRegExpPattern(state)`

* `state` {RegExpValidationState}
* Returns: {void}

Check a regexp literal's pattern, re-reading it once a group name shows
that the named-capture goal symbol was the right one.

#### Static method: `extend(plugins)`

* `plugins` {object[]}
* Returns: {any}

#### Static method: `parse(input[, options])`

* `input` {string}
* `options` {Partial}
* Returns: {ProgramSyntaxParser}

#### Static method: `parseExpressionAt(input, pos[, options])`

* `input` {string}
* `pos` {number}
* `options` {Partial}
* Returns: {ExpressionSyntaxParser}

#### Static method: `tokenizer(input[, options])`

* `input` {string}
* `options` {Partial}
* Returns: {ParserSyntaxParser}

***

## Class: `ParserNode`

An ESTree node, as this parser builds one.

### Constructors

#### `new ParserNode(parser, pos[, loc])`

* `parser` {ParserSyntaxParser}
* `pos` {number}
* `loc` {Position}
* Returns: {ParserNode}

### Properties

* `end` {number}
* `loc` {ParserSourceLocation}
* `range` {number[]}
* `sourceFile` {string}
* `start` {number}
* `type` {string}

***

## Class: `ParserPosition`

Mirror of acorn's `Position` (line/column pair with its `offset` helper),
served by the owned `raise`/`curPosition`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/locutil.js

### Constructors

#### `new ParserPosition(line, col)`

* `line` {number}
* `col` {number}
* Returns: {ParserPosition}

### Properties

* `column` {number}
* `line` {number}

### Methods

#### `offset(n)`

* `n` {number}
* Returns: {ParserPosition}

***

## Class: `ParserSourceLocation`

The `loc` a node carries when `options.locations` is on.

### Constructors

#### `new ParserSourceLocation(p[, start][, end])`

* `p` {any}
* `start` {PositionLike}
* `end` {PositionLike}
* Returns: {ParserSourceLocation}

### Properties

* `end` {PositionLike}
* `source` {any}
* `start` {PositionLike}

***

## Class: `Position`

A `{ line, column }` pair, as `options.locations` reports one.

### Constructors

#### `new Position(line, col)`

* `line` {number}
* `col` {number}
* Returns: {Position}

### Properties

* `column` {number}
* `line` {number}

### Methods

#### `offset(n)`

* `n` {number}
* Returns: {Position}

***

## Class: `Scope`

One lexical scope, holding the names declared directly in it. Each set is
built only once a name goes into it, which most scopes never do.

### Constructors

#### `new Scope(flags)`

* `flags` {number}
* Returns: {ScopeSyntaxParser}

### Properties

* `firstLexical` {string}
* `flags` {number}
* `functions` {Set}
* `hoisted` {number|NodeLike[]}
* `lexical` {Set}
* `var` {Set}

***

## Class: `TokContext`

A tokenizer context: what kind of brace, paren or template the tokenizer is
inside, which decides how the next `/` or `}` reads.

### Constructors

#### `new TokContext(token, isExpr[, preserveSpace][, override][, generator])`

* `token` {string}
* `isExpr` {boolean}
* `preserveSpace` {boolean}
* `override` {object}
* `generator` {boolean}
* Returns: {TokContext}

### Properties

* `generator` {boolean}
* `isExpr` {boolean}
* `override` {object}
* `preserveSpace` {boolean}
* `token` {string}

***

## Class: `Token`

A token as `options.onToken` receives one.

### Constructors

#### `new Token([p])`

* `p` {any}
* Returns: {TokenSyntaxParserClass}

### Properties

* `end` {any}
* `loc` {ParserSourceLocation}
* `range` {any[]}
* `start` {any}
* `type` {any}
* `value` {any}

***

## Class: `TokenType`

A token's kind, carrying what the parser needs to know about it without
re-inspecting the source: whether an expression may follow, its binary
precedence, and how it updates the tokenizer's context.

### Constructors

#### `new TokenType(label[, conf])`

* `label` {string}
* `conf` {object}
* Returns: {TokenType}

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

webpack's parser: acorn plus lazy `range` (no `loc` at all), Set-based scopes,
tokenizer fast paths, import attributes and import phases (with acorn's
`!forNew` guard, unlike the former `acorn-import-phases` package).

### Extends

- {ParserSyntaxParser}

### Constructors

#### `new WebpackParser(options, input[, startPos])`

* `options` {OptionsSyntaxParser|object}
* `input` {string}
* `startPos` {number}
* Returns: {WebpackParser}

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
* `pos` {number}
* `potentialArrowAt` {number}
* `potentialArrowInForAwait` {boolean}
* `privateNameStack` {any[]}
* `regexpState` {RegExpValidationState}
* `reservedWords` {RegExp}
* `reservedWordsStrict` {RegExp}
* `reservedWordsStrictBind` {RegExp}
* `scopeStack` {ScopeSyntaxParser[]}
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

* Returns: {Iterator}

#### `adaptDirectivePrologue(statements)`

* `statements` {any[]}
* Returns: {void}

#### `afterTrailingComma(tokType[, notNext])`

* `tokType` {TokenType}
* `notNext` {boolean}
* Returns: {boolean}

#### `braceIsBlock(prevType)`

* `prevType` {TokenType}
* Returns: {boolean}

Whether a `{` here opens a block rather than an object literal, which the
token before it decides.

#### `buildBinary(startPos, startLoc, left, right, op, logical)`

* `startPos` {number}
* `startLoc` {PositionLike}
* `left` {any}
* `right` {any}
* `op` {any}
* `logical` {boolean}
* Returns: {any}

#### `canInsertSemicolon()`

* Returns: {boolean}

#### `catchStackOverflow(f)`

###### T

`T`
* `f` {object}
* Returns: {T}

Turn the host's stack overflow into a parse error, since a deeply nested
expression is an input the caller can act on rather than a crash.

#### `checkExport(exports, name, pos)`

* `exports` {any}
* `name` {any}
* `pos` {number}
* Returns: {void}

#### `checkExpressionErrors([refDestructuringErrors][, andThrow])`

* `refDestructuringErrors` {any}
* `andThrow` {boolean}
* Returns: {boolean}

#### `checkLocalExport([id])`

* `id` {any}
* Returns: {void}

#### `checkLValInnerPattern([expr][, bindingType][, checkClashes])`

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

#### `checkLValPattern([expr][, bindingType][, checkClashes])`

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

#### `checkLValSimple([expr][, bindingType][, checkClashes])`

* `expr` {any}
* `bindingType` {number}
* `checkClashes` {any}
* Returns: {void}

Check a target that may only be an identifier or member expression, and
record the binding it introduces.

#### `checkParams(node, allowDuplicates)`

* `node` {any}
* `allowDuplicates` {boolean}
* Returns: {void}

#### `checkPatternErrors([refDestructuringErrors][, isAssign])`

* `refDestructuringErrors` {any}
* `isAssign` {boolean}
* Returns: {void}

#### `checkPatternExport([exports][, pat])`

* `exports` {any}
* `pat` {any}
* Returns: {void}

#### `checkPropClash([prop][, propHash][, refDestructuringErrors])`

* `prop` {any}
* `propHash` {any}
* `refDestructuringErrors` {any}
* Returns: {void}

Report a property name that may not be repeated: a getter or setter that
clashes, and under ES5 a repeated `init` in strict mode.

#### `checkUnreserved([ref])`

* `ref` {any}
* Returns: {void}

Report a name that the surrounding code may not use as an identifier.

#### `checkVariableExport(exports, declarations)`

* `exports` {any}
* `declarations` {any[]}
* Returns: {void}

#### `checkYieldAwaitInDefaultParams()`

* Returns: {void}

#### `copyNode([node])`

* `node` {any}
* Returns: {any}

#### `curContext()`

* Returns: {TokContextLike}

#### `curPosition()`

* Returns: {Position}

#### `currentScope()`

* Returns: {ScopeSyntaxParser}

#### `currentThisScope()`

* Returns: {ScopeSyntaxParser}

#### `currentVarScope()`

* Returns: {ScopeSyntaxParser}

#### `declareName(name, bindingType, pos)`

* `name` {string}
* `bindingType` {number}
* `pos` {number}
* Returns: {void}

Record a name in the scope its binding belongs to, and report a name that
was already declared there.

#### `eat(type)`

* `type` {TokenType}
* Returns: {boolean}

#### `eatContextual(name)`

* `name` {string}
* Returns: {boolean}

#### `enterClassBody()`

* Returns: {any}

#### `enterScope(flags)`

* `flags` {number}
* Returns: {void}

#### `exitClassBody()`

* Returns: {void}

#### `exitScope()`

* Returns: {void}

#### `expect(type)`

* `type` {TokenType}
* Returns: {void}

#### `expectContextual(name)`

* `name` {string}
* Returns: {void}

#### `finishNode(node, type)`

* `node` {any}
* `type` {string}
* Returns: {any}

#### `finishNodeAt(node, type, pos[, loc])`

* `node` {any}
* `type` {string}
* `pos` {number}
* `loc` {PositionLike}
* Returns: {any}

#### `finishOp(type, size)`

* `type` {TokenType}
* `size` {number}
* Returns: {void}

#### `finishToken(type[, value])`

* `type` {TokenType}
* `value` {any}
* Returns: {void}

#### `fullCharCodeAt(pos)`

* `pos` {number}
* Returns: {number}

#### `fullCharCodeAtPos()`

* Returns: {number}

#### `getToken()`

* Returns: {TokenSyntaxParserClass}

#### `getTokenFromCode(code)`

* `code` {number}
* Returns: {void}

#### `inGeneratorContext()`

* Returns: {boolean}

#### `initFunction([node])`

* `node` {any}
* Returns: {void}

#### `initialContext()`

* Returns: {TokContextLike[]}

#### `insertSemicolon()`

* Returns: {boolean}

#### `invalidStringToken(position, message)`

* `position` {number}
* `message` {string}
* Returns: {void}

Report a bad escape, unless it sits in a tagged template, where the raw
text is still well-formed and only the cooked value is lost.

#### `isAsyncFunction()`

* Returns: {boolean}

Whether `async` here heads a function declaration, which no line break may
separate from the `function` keyword.

#### `isAsyncProp([prop])`

* `prop` {any}
* Returns: {boolean}

#### `isAwaitUsing([isFor])`

* `isFor` {boolean}
* Returns: {boolean}

#### `isClassElementNameStart()`

* Returns: {boolean}

#### `isContextual(name)`

* `name` {string}
* Returns: {boolean}

#### `isDirectiveCandidate(statement)`

* `statement` {NodeLike|object}
* Returns: {boolean}

#### `isLet([context])`

* `context` {string}
* Returns: {boolean}

Whether a `let` here opens a lexical declaration rather than naming a
variable, which needs a look-ahead past the keyword.

#### `isSimpleAssignTarget([expr])`

* `expr` {any}
* Returns: {boolean}

#### `isSimpleParamList(params)`

* `params` {any[]}
* Returns: {boolean}

#### `isUsing([isFor])`

* `isFor` {boolean}
* Returns: {boolean}

#### `isUsingKeyword(isAwaitUsing[, isFor])`

* `isAwaitUsing` {boolean}
* `isFor` {boolean}
* Returns: {boolean}

Whether `using` (or `await using`) here heads a declaration rather than
naming a variable.

#### `next([ignoreEscapeSequenceInKeyword])`

* `ignoreEscapeSequenceInKeyword` {boolean}
* Returns: {void}

Move past the current token.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/tokenize.js

#### `nextToken()`

* Returns: {void}

#### `overrideContext(tokenCtx)`

* `tokenCtx` {TokContextLike}
* Returns: {void}

#### `parse()`

* Returns: {any}

#### `parseArrowExpression(node, params, isAsync[, forInit])`

* `node` {any}
* `params` {any[]}
* `isAsync` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseAssignableListItem([allowModifiers])`

* `allowModifiers` {boolean}
* Returns: {any}

#### `parseAwait([forInit])`

* `forInit` {string|boolean}
* Returns: {any}

#### `parseBindingAtom()`

* Returns: {any}

#### `parseBindingList(close, allowEmpty, allowTrailingComma[, allowModifiers])`

* `close` {TokenType}
* `allowEmpty` {boolean}
* `allowTrailingComma` {boolean}
* `allowModifiers` {boolean}
* Returns: {any[]}

#### `parseBindingListItem([param])`

* `param` {any}
* Returns: {any}

#### `parseBlock([createNewLexicalScope][, node][, exitStrict])`

* `createNewLexicalScope` {boolean}
* `node` {any}
* `exitStrict` {boolean}
* Returns: {any}

#### `parseBreakContinueStatement(node, keyword)`

* `node` {any}
* `keyword` {string}
* Returns: {any}

#### `parseCatchClauseParam()`

* Returns: {any}

#### `parseClass([node][, isStatement])`

* `node` {any}
* `isStatement` {string|boolean}
* Returns: {any}

#### `parseClassElement(constructorAllowsSuper)`

* `constructorAllowsSuper` {boolean}
* Returns: {any}

#### `parseClassElementName([element])`

* `element` {any}
* Returns: {void}

#### `parseClassField([field])`

* `field` {any}
* Returns: {any}

#### `parseClassId([node][, isStatement])`

* `node` {any}
* `isStatement` {string|boolean}
* Returns: {void}

#### `parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper)`

* `method` {any}
* `isGenerator` {boolean}
* `isAsync` {boolean}
* `allowsDirectSuper` {boolean}
* Returns: {any}

#### `parseClassStaticBlock([node])`

* `node` {any}
* Returns: {any}

#### `parseClassSuper([node])`

* `node` {any}
* Returns: {void}

#### `parseDebuggerStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseDoStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseDynamicImport([node])`

* `node` {any}
* Returns: {any}

#### `parseEmptyStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseExport([node][, exports])`

* `node` {any}
* `exports` {any}
* Returns: {any}

#### `parseExportAllDeclaration([node][, exports])`

* `node` {any}
* `exports` {any}
* Returns: {any}

#### `parseExportDeclaration([node])`

* `node` {any}
* Returns: {any}

#### `parseExportDefaultDeclaration()`

* Returns: {any}

#### `parseExportSpecifier([exports])`

* `exports` {any}
* Returns: {any}

#### `parseExportSpecifiers([exports])`

* `exports` {any}
* Returns: {any[]}

#### `parseExprAtom([refDestructuringErrors][, forInit][, forNew])`

* `refDestructuringErrors` {any}
* `forInit` {string|boolean}
* `forNew` {boolean}
* Returns: {any}

Read an expression that no operator binds into: a token that is an
expression on its own, or one that punctuation encloses.

#### `parseExprAtomDefault()`

* Returns: {never}

#### `parseExpression([forInit][, refDestructuringErrors])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

Read a full expression, including the comma operator.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/expression.js

#### `parseExpressionStatement([node][, expr])`

* `node` {any}
* `expr` {any}
* Returns: {any}

#### `parseExprImport([forNew])`

* `forNew` {boolean}
* Returns: {any}

#### `parseExprList(close, allowTrailingComma, allowEmpty[, refDestructuringErrors])`

* `close` {TokenType}
* `allowTrailingComma` {boolean}
* `allowEmpty` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any[]}

#### `parseExprOp(left, leftStartPos, leftStartLoc, minPrec[, forInit])`

* `left` {any}
* `leftStartPos` {number}
* `leftStartLoc` {PositionLike}
* `minPrec` {number}
* `forInit` {string|boolean}
* Returns: {any}

Read binary operators by precedence climbing, stopping where an operator
binds less tightly than the caller is parsing.

#### `parseExprOps([forInit][, refDestructuringErrors])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseExprSubscripts([refDestructuringErrors][, forInit])`

* `refDestructuringErrors` {any}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseFor([node][, init])`

* `node` {any}
* `init` {any}
* Returns: {any}

#### `parseForAfterInit(node, init, awaitAt)`

* `node` {any}
* `init` {any}
* `awaitAt` {number}
* Returns: {any}

#### `parseForIn([node][, init])`

* `node` {any}
* `init` {any}
* Returns: {any}

#### `parseForStatement([node])`

* `node` {any}
* Returns: {any}

Read a `for` head, which is only known to be plain, `in` or `of` once its
init part has been parsed with `in` held back as an operator.

#### `parseFunction(node, statement[, allowExpressionBody][, isAsync][, forInit])`

* `node` {any}
* `statement` {number}
* `allowExpressionBody` {boolean}
* `isAsync` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseFunctionBody([node][, isArrowFunction][, isMethod][, forInit])`

* `node` {any}
* `isArrowFunction` {boolean}
* `isMethod` {boolean}
* `forInit` {string|boolean}
* Returns: {void}

#### `parseFunctionParams([node])`

* `node` {any}
* Returns: {void}

#### `parseFunctionStatement(node, isAsync, declarationPosition)`

* `node` {any}
* `isAsync` {boolean}
* `declarationPosition` {boolean}
* Returns: {any}

#### `parseGetterSetter([prop])`

* `prop` {any}
* Returns: {void}

#### `parseIdent([liberal])`

* `liberal` {boolean}
* Returns: {any}

#### `parseIdentNode()`

* Returns: {any}

#### `parseIfStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseImport([node])`

* `node` {any}
* Returns: {any}

#### `parseImportAttribute()`

* Returns: {any}

#### `parseImportDefaultSpecifier()`

* Returns: {any}

#### `parseImportMeta([node])`

* `node` {any}
* Returns: {any}

#### `parseImportNamespaceSpecifier()`

* Returns: {any}

#### `parseImportSpecifier()`

* Returns: {any}

#### `parseImportSpecifiers()`

* Returns: {any[]}

#### `parseLabeledStatement([node][, maybeName][, expr][, context])`

* `node` {any}
* `maybeName` {any}
* `expr` {any}
* `context` {string}
* Returns: {any}

#### `parseLiteral([value])`

* `value` {any}
* Returns: {any}

#### `parseMaybeAssign([forInit][, refDestructuringErrors][, afterLeftParse])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* `afterLeftParse` {any}
* Returns: {any}

#### `parseMaybeConditional([forInit][, refDestructuringErrors])`

* `forInit` {string|boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseMaybeDefault(startPos[, startLoc][, left])`

* `startPos` {number}
* `startLoc` {PositionLike}
* `left` {any}
* Returns: {any}

#### `parseMaybeUnary([refDestructuringErrors][, sawUnary][, incDec][, forInit])`

* `refDestructuringErrors` {any}
* `sawUnary` {boolean}
* `incDec` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseMethod([isGenerator][, isAsync][, allowDirectSuper])`

* `isGenerator` {boolean}
* `isAsync` {boolean}
* `allowDirectSuper` {boolean}
* Returns: {any}

#### `parseModuleExportName()`

* Returns: {any}

#### `parseNew()`

* Returns: {any}

Read a `new` expression, whose callee takes subscripts but not a call —
the argument list belongs to the `new` itself.

#### `parseObj(isPattern[, refDestructuringErrors])`

* `isPattern` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseParenAndDistinguishExpression(canBeArrow[, forInit])`

* `canBeArrow` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

Read a parenthesized expression, which is only known to be an arrow's
parameter list once the `=>` after the closing paren is seen.

#### `parseParenArrowList(startPos, startLoc, exprList[, forInit])`

* `startPos` {number}
* `startLoc` {PositionLike}
* `exprList` {any[]}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseParenExpression()`

* Returns: {any}

#### `parseParenItem([item])`

* `item` {any}
* Returns: {any}

#### `parsePrivateIdent()`

* Returns: {any}

#### `parseProperty(isPattern[, refDestructuringErrors])`

* `isPattern` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

#### `parsePropertyName([prop])`

* `prop` {any}
* Returns: {any}

#### `parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc)`

* `prop` {any}
* `isPattern` {boolean}
* `isGenerator` {boolean}
* `isAsync` {boolean}
* `startPos` {number}
* `startLoc` {PositionLike}
* `refDestructuringErrors` {any}
* `containsEsc` {boolean}
* Returns: {void}

#### `parseRestBinding()`

* Returns: {any}

#### `parseReturnStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseSpread([refDestructuringErrors])`

* `refDestructuringErrors` {any}
* Returns: {any}

#### `parseStatement([context][, topLevel][, exports])`

* `context` {string}
* `topLevel` {boolean}
* `exports` {any}
* Returns: {any}

Read one statement. A statement head that is only a keyword by position —
`let`, `async`, `using` — is settled by the probes above.

#### `parseSubscript(baseExpr, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained[, forInit])`

* `baseExpr` {any}
* `startPos` {number}
* `startLoc` {PositionLike}
* `noCalls` {boolean}
* `maybeAsyncArrow` {boolean}
* `optionalChained` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseSubscriptAsyncArrow(startPos, startLoc, exprList[, forInit])`

* `startPos` {number}
* `startLoc` {PositionLike}
* `exprList` {any[]}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseSubscripts(baseExpr, startPos, startLoc, noCalls[, forInit])`

* `baseExpr` {any}
* `startPos` {number}
* `startLoc` {PositionLike}
* `noCalls` {boolean}
* `forInit` {string|boolean}
* Returns: {any}

#### `parseSwitchStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseTemplate([opts])`

* `opts` {object}
* Returns: {any}

#### `parseTemplateElement(opts)`

* `opts` {object}
* Returns: {any}

#### `parseThrowStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseTopLevel([node])`

* `node` {any}
* Returns: {any}

Read statements until the end of input and wrap them in a `Program`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/statement.js

#### `parseTryStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseVar(node, isFor, kind[, allowMissingInitializer])`

* `node` {any}
* `isFor` {boolean}
* `kind` {string}
* `allowMissingInitializer` {boolean}
* Returns: {any}

#### `parseVarId(decl, kind)`

* `decl` {any}
* `kind` {string}
* Returns: {void}

#### `parseVarStatement(node, kind[, allowMissingInitializer])`

* `node` {any}
* `kind` {string}
* `allowMissingInitializer` {boolean}
* Returns: {any}

#### `parseWhileStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseWithClause()`

* Returns: {any[]}

#### `parseWithStatement([node])`

* `node` {any}
* Returns: {any}

#### `parseYield([forInit])`

* `forInit` {string|boolean}
* Returns: {any}

#### `raise(pos, message)`

* `pos` {number}
* `message` {string}
* Returns: {never}

Report a parse error, naming where in the source it was found.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/location.js

#### `raiseRecoverable(pos, message)`

* `pos` {number}
* `message` {string}
* Returns: {never}

#### `readCodePoint()`

* Returns: {number}

#### `readEscapedChar(inTemplate)`

* `inTemplate` {boolean}
* Returns: {string}

#### `readHexChar(len)`

* `len` {number}
* Returns: {number}

#### `readInt(radix[, len][, maybeLegacyOctalNumericLiteral])`

* `radix` {number}
* `len` {number}
* `maybeLegacyOctalNumericLiteral` {boolean}
* Returns: {number}

Read digits in the given radix, or `null` where none were there or the
count did not match what an escape asked for.

#### `readInvalidTemplateToken()`

* Returns: {void}

#### `readNumber(startsWithDot)`

* `startsWithDot` {boolean}
* Returns: {void}

#### `readRadixNumber(radix)`

* `radix` {number}
* Returns: {void}

#### `readRegexp()`

* Returns: {void}

#### `readString(quote)`

* `quote` {number}
* Returns: {void}

#### `readTmplToken()`

* Returns: {void}

#### `readToken(code)`

* `code` {number}
* Returns: {void}

#### `readToken_caret()`

* Returns: {void}

#### `readToken_dot()`

* Returns: {void}

#### `readToken_eq_excl(code)`

* `code` {number}
* Returns: {void}

#### `readToken_lt_gt(code)`

* `code` {number}
* Returns: {void}

#### `readToken_mult_modulo_exp(code)`

* `code` {number}
* Returns: {void}

#### `readToken_numberSign()`

* Returns: {void}

#### `readToken_pipe_amp(code)`

* `code` {number}
* Returns: {void}

#### `readToken_plus_min(code)`

* `code` {number}
* Returns: {void}

#### `readToken_question()`

* Returns: {void}

#### `readToken_slash()`

* Returns: {void}

#### `readWord()`

* Returns: {void}

#### `readWord1()`

* Returns: {string}

Read an identifier's text, recording in `containsEsc` whether any of it
was written as an escape — which stops it reading as a keyword.

#### `semicolon()`

* Returns: {void}

#### `shouldParseArrow(exprList)`

* `exprList` {any[]}
* Returns: {boolean}

#### `shouldParseAsyncArrow()`

* Returns: {boolean}

#### `shouldParseExportStatement()`

* Returns: {boolean}

#### `skipBlockComment()`

* Returns: {void}

#### `skipLineComment(startSkip)`

* `startSkip` {number}
* Returns: {void}

#### `skipSpace()`

* Returns: {void}

#### `startNode()`

* Returns: {any}

#### `startNodeAt(pos[, loc])`

* `pos` {number}
* `loc` {PositionLike}
* Returns: {any}

#### `strictDirective(start)`

* `start` {number}
* Returns: {boolean}

Whether a directive prologue starting at `start` opens with `"use strict"`.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/parseutil.js

#### `toAssignable([node][, isBinding][, refDestructuringErrors])`

* `node` {any}
* `isBinding` {boolean}
* `refDestructuringErrors` {any}
* Returns: {any}

Rewrite an expression as the binding pattern it turns out to be, which is
only known once the `=` or `of` after it has been read.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/lval.js

#### `toAssignableList(exprList[, isBinding])`

* `exprList` {any[]}
* `isBinding` {boolean}
* Returns: {any[]}

#### `treatFunctionsAsVarInScope(scope)`

* `scope` {object}
* Returns: {number|boolean}

#### `tryReadTemplateToken()`

* Returns: {void}

#### `unexpected([pos])`

* `pos` {number}
* Returns: {never}

#### `updateContext(prevType)`

* `prevType` {TokenType}
* Returns: {void}

#### `validateRegExpFlags(state)`

* `state` {RegExpValidationState}
* Returns: {void}

Check a regexp literal's flags.
acorn source: https://github.com/acornjs/acorn/blob/8.18.0/acorn/src/regexp.js

#### `validateRegExpPattern(state)`

* `state` {RegExpValidationState}
* Returns: {void}

Check a regexp literal's pattern, re-reading it once a group name shows
that the named-capture goal symbol was the right one.

#### Static method: `extend(plugins)`

* `plugins` {object[]}
* Returns: {WebpackParser}

Applies parser plugins, keeping the result typed as this parser.

#### Static method: `parse(input[, options])`

* `input` {string}
* `options` {Partial}
* Returns: {ProgramSyntaxParser}

#### Static method: `parseExpressionAt(input, pos[, options])`

* `input` {string}
* `pos` {number}
* `options` {Partial}
* Returns: {ExpressionSyntaxParser}

#### Static method: `tokenizer(input[, options])`

* `input` {string}
* `options` {Partial}
* Returns: {ParserSyntaxParser}

***

## `BIND_FUNCTION`

> **BIND\_FUNCTION**: {3}

***

## `BIND_LEXICAL`

> **BIND\_LEXICAL**: {2}

***

## `BIND_NONE`

> **BIND\_NONE**: {0}

***

## `BIND_OUTSIDE`

> **BIND\_OUTSIDE**: {5}

***

## `BIND_SIMPLE_CATCH`

> **BIND\_SIMPLE\_CATCH**: {4}

***

## `BIND_VAR`

> **BIND\_VAR**: {1}

***

## `BLOCK_DECLARATIONS`

> `const` **BLOCK\_DECLARATIONS**: {symbol}

***

## `buildLineStarts`

> **buildLineStarts**: {object}

* `source` {string}
* Returns: {number[]}

***

## `codePointToString`

> **codePointToString**: {object}

* `code` {number}
* Returns: {string}

***

## `collectCjsRequireSpecifiers`

> **collectCjsRequireSpecifiers**: {object}

* `source` {string}
* Returns: {Set}

***

## `declaresIntoBlock`

> **declaresIntoBlock**: {object}

* `statement` {any}
* Returns: {boolean}

***

## `functionFlags`

> **functionFlags**: {object}

* `async` {boolean}
* `generator` {boolean}
* Returns: {number}

***

## `getLineInfo`

> **getLineInfo**: {object}

* `input` {string}
* `offset` {number}
* Returns: {Position}

***

## `getOptions`

> **getOptions**: {object}

* `opts` {null|Partial}
* Returns: {ResolvedOptionsSyntaxParser}

***

## `hasOctalEscape`

> **hasOctalEscape**: {object}

* `raw` {string}
* Returns: {boolean}

***

## `HOISTED_DECLARATIONS`

> `const` **HOISTED\_DECLARATIONS**: {symbol}

***

## `isIdentifierChar`

> **isIdentifierChar**: {object}

* `code` {number}
* `astral` {boolean}
* Returns: {boolean}

***

## `isIdentifierStart`

> **isIdentifierStart**: {object}

* `code` {number}
* `astral` {boolean}
* Returns: {boolean}

***

## `isLocalVariableAccess`

> **isLocalVariableAccess**: {object}

* `node` {any}
* Returns: {boolean}

***

## `isNewLine`

> **isNewLine**: {object}

* `code` {number}
* Returns: {boolean}

***

## `isPrivateFieldAccess`

> **isPrivateFieldAccess**: {object}

* `node` {any}
* Returns: {boolean}

***

## `keywordTypes`

> **keywordTypes**: {Record}

***

## `LEGACY_ASSERT_ATTRIBUTES`

> `const` **LEGACY\_ASSERT\_ATTRIBUTES**: {symbol}

***

## `lineBreak`

> **lineBreak**: {RegExp}

***

## `lineBreakG`

> **lineBreakG**: {RegExp}

***

## `MAX_MASKED_INDEX`

> **MAX\_MASKED\_INDEX**: {30}

***

## `MODULE_DECLARATIONS`

> `const` **MODULE\_DECLARATIONS**: {symbol}

***

## `nextLineBreak`

> **nextLineBreak**: {object}

* `code` {string}
* `from` {number}
* `end` {number}
* Returns: {number}

***

## `nonASCIIwhitespace`

> **nonASCIIwhitespace**: {RegExp}

***

## `overflowFrom`

> **overflowFrom**: {object}

* `mask` {number}
* `index` {number}
* Returns: {number[]}

***

## `parse`

> **parse**: {object}

* `input` {string}
* `options` {ParserOptionsSyntaxParser}
* Returns: {ProgramImport}

***

## `positionAt`

> **positionAt**: {object}

* `lineStarts` {number[]}
* `offset` {number}
* Returns: {SourcePosition}

***

## `releaseParserCaches`

> **releaseParserCaches**: {object}

* Returns: {void}

***

## `SCOPE_ARROW`

> **SCOPE\_ARROW**: {16}

***

## `SCOPE_ASYNC`

> **SCOPE\_ASYNC**: {4}

***

## `SCOPE_CLASS_FIELD_INIT`

> **SCOPE\_CLASS\_FIELD\_INIT**: {512}

***

## `SCOPE_CLASS_STATIC_BLOCK`

> **SCOPE\_CLASS\_STATIC\_BLOCK**: {256}

***

## `SCOPE_DIRECT_SUPER`

> **SCOPE\_DIRECT\_SUPER**: {128}

***

## `SCOPE_FUNCTION`

> **SCOPE\_FUNCTION**: {2}

***

## `SCOPE_GENERATOR`

> **SCOPE\_GENERATOR**: {8}

***

## `SCOPE_SIMPLE_CATCH`

> **SCOPE\_SIMPLE\_CATCH**: {32}

***

## `SCOPE_SUPER`

> **SCOPE\_SUPER**: {64}

***

## `SCOPE_SWITCH`

> **SCOPE\_SWITCH**: {1024}

***

## `SCOPE_TOP`

> **SCOPE\_TOP**: {1}

***

## `SCOPE_VAR`

> **SCOPE\_VAR**: {number}

***

## `skipWhiteSpace`

> **skipWhiteSpace**: {RegExp}

***

## `stringToNumber`

> **stringToNumber**: {object}

* `str` {string}
* `isLegacyOctalNumericLiteral` {boolean}
* Returns: {number}

***

## `wordsRegexp`

> **wordsRegexp**: {object}

* `words` {string}
* Returns: {RegExp}
