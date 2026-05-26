# InnerGraph

## Class: `TopLevelSymbol`

### Constructors

#### `new TopLevelSymbol(name[, pure])`

* `name` {string}
* `pure` {boolean|object}
* Returns: {TopLevelSymbol}

Creates an instance of TopLevelSymbol.

### Properties

* `conditional` {boolean}
* `name` {string}
* `pureFn` {object}

### Methods

#### `isPure(compilation, module)`

* `compilation` {Compilation}
* `module` {Module}
* Returns: {boolean}

#### `setPure(pure)`

* `pure` {PureCondition}
* Returns: {void}

Sets the pure condition

***

## `getDependencyUsedByExportsCondition`

> **getDependencyUsedByExportsCondition**: {object}

* `dependency` {Dependency}
* `moduleGraph` {ModuleGraph}
* Returns: {null|false|object}

***

## `getInnerGraphUtils`

> **getInnerGraphUtils**: {object}

* `compilation` {Compilation}
* Returns: {InnerGraphUtils}

***

## `topLevelSymbolTag`

> `const` **topLevelSymbolTag**: {symbol}
