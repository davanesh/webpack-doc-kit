# scopes

**`Experimental`**

Usage: `const { analyzeScope } = webpack.javascript.syntax.scopes; analyzeScope(parser.parseProgram(code, 0, { scopes: true }))`.  exposed as `webpack.javascript.syntax.scopes`; unstable API

## Class: `Reference`

**`Experimental`**

One identifier occurrence that refers to a binding.
 exposed as `webpack.javascript.syntax.scopes.Reference`; unstable API

### Constructors

#### `new Reference(identifier, from)`

> Stability: 1 - Experimental

* `identifier` {ScopeIdentifier}
* `from` {Scope}
* Returns: {Reference}

**`Experimental`**

### Properties

* `from` {Scope} 
* `identifier` {ScopeIdentifier} 
* `resolved` {Variable} 

***

## Class: `Scope`

**`Experimental`**

A lexical scope. One shape for every kind, so the property loads in the
resolution loop stay monomorphic.
 exposed as `webpack.javascript.syntax.scopes.Scope`; unstable API

### Constructors

#### `new Scope(type, blockType, blockStart, upper, isVarScope, recordEveryReference)`

> Stability: 1 - Experimental

* `type` {ScopeType}
* `blockType` {string}
* `blockStart` {number}
* `upper` {Scope}
* `isVarScope` {boolean}
* `recordEveryReference` {boolean}
* Returns: {Scope}

**`Experimental`**

### Properties

* `blockStart` {number} 
* `blockType` {string} 
* `childScopes` {Scope[]} 
* `paramBoundary` {number} For a function scope with parameters, the offset where its body
starts; `-1` for every other scope. Separates the two regions that
share this scope, so a reference in the parameter list can be kept
from resolving to a binding declared in the body — see
`isHiddenBodyBinding`.
* `type` {ScopeType} 
* `upper` {Scope} 
* `variables` {Variable[]} 
* `variableScope` {Scope} 

### Methods

#### `getBinding(name)`

> Stability: 1 - Experimental

* `name` {string}
* Returns: {Variable}

**`Experimental`**

***

## Class: `ScopeIdentifier`

**`Experimental`**

One occurrence of a name in the source, which a rename rewrites in place.
 the `{ path: true }` tap option and `webpack.javascript.syntax.scopes.ScopeIdentifier`; unstable API

### Constructors

#### `new ScopeIdentifier(name, start, end)`

> Stability: 1 - Experimental

* `name` {string}
* `start` {number}
* `end` {number}
* Returns: {ScopeIdentifier}

**`Experimental`**

### Properties

* `end` {number} 
* `name` {string} 
* `range` {number|number} Where it sits in the source, as the ESTree identifier it replaces held it.
* `start` {number} 

***

## Class: `Variable`

**`Experimental`**

A binding: one name declared in one scope.
 exposed as `webpack.javascript.syntax.scopes.Variable`; unstable API

### Constructors

#### `new Variable(name, scope)`

> Stability: 1 - Experimental

* `name` {string}
* `scope` {Scope}
* Returns: {Variable}

**`Experimental`**

### Properties

* `identifiers` {ScopeIdentifier[]} 
* `name` {string} 
* `references` {Reference[]} 
* `scope` {Scope} 

***

## `analyzeScope`

> **analyzeScope**: {object}

**`Experimental`**

* `program` {number}
* `recordEveryReference` {boolean}
* Returns: {ScopeAnalysis}

***

## `ScopeLog`

Re-exports [ScopeLog](parser/index.md#scopelog)
