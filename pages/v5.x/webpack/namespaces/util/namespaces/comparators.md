# comparators

## `compareChunkGroupsByIndex`

> **compareChunkGroupsByIndex**: {object}

* `a` {ChunkGroup}
* `b` {ChunkGroup}
* Returns: {0|1|-1}

***

## `compareChunks`

> **compareChunks**: {ParameterizedComparator}

***

## `compareChunksById`

> **compareChunksById**: {object}

* `a` {Chunk}
* `b` {Chunk}
* Returns: {0|1|-1}

***

## `compareChunksNatural`

> **compareChunksNatural**: {object}

* `chunkGraph` {ChunkGraph}
* Returns: {Comparator}

***

## `compareIds`

> **compareIds**: {object}

* `a` {string|number}
* `b` {string|number}
* Returns: {0|1|-1}

***

## `compareIterables`

> **compareIterables**: {object}

#### T

`T`
* `elementComparator` {Comparator}
* Returns: {Comparator}

***

## `compareLocations`

> **compareLocations**: {object}

* `a` {DependencyLocation}
* `b` {DependencyLocation}
* Returns: {0|1|-1}

***

## `compareModulesByFullName`

> **compareModulesByFullName**: {ParameterizedComparator}

***

## `compareModulesById`

> **compareModulesById**: {ParameterizedComparator}

***

## `compareModulesByIdentifier`

> **compareModulesByIdentifier**: {object}

* `a` {Module}
* `b` {Module}
* Returns: {0|1|-1}

***

## `compareModulesByIdOrIdentifier`

> **compareModulesByIdOrIdentifier**: {ParameterizedComparator}

***

## `compareModulesByPostOrderIndexOrIdentifier`

> **compareModulesByPostOrderIndexOrIdentifier**: {ParameterizedComparator}

***

## `compareModulesByPreOrderIndexOrIdentifier`

> **compareModulesByPreOrderIndexOrIdentifier**: {ParameterizedComparator}

***

## `compareNumbers`

> **compareNumbers**: {object}

* `a` {number}
* `b` {number}
* Returns: {0|1|-1}

***

## `compareSelect`

> **compareSelect**: {object}

#### T

`T`

#### R

`R`
* `getter` {Selector}
* `comparator` {Comparator}
* Returns: {Comparator}

***

## `compareStrings`

> **compareStrings**: {object}

* `a` {string}
* `b` {string}
* Returns: {0|1|-1}

***

## `compareStringsNumeric`

> **compareStringsNumeric**: {object}

* `a` {string}
* `b` {string}
* Returns: {0|1|-1}

***

## `concatComparators`

> **concatComparators**: {object}

#### T

`T`
* `c1` {Comparator}
* `c2` {Comparator}
* `cRest` {Comparator[]}
* Returns: {Comparator}

***

## `keepOriginalOrder`

> **keepOriginalOrder**: {object}

#### T

`T`
* `iterable` {Iterable}
* Returns: {Comparator}

***

## `sortWithSourceOrder`

> **sortWithSourceOrder**: {object}

* `dependencies` {Dependency[]}
* `dependencySourceOrderMap` {WeakMap}
* `onDependencyReSort` {object}
* Returns: {void}
