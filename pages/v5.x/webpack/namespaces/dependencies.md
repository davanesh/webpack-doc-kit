# dependencies

## Class: `ConstDependency`

### Extends

- {NullDependency}

### Constructors

#### `new ConstDependency(expression, range[, runtimeRequirements])`

* `expression` {string}
* `range` {number|number|number}
* `runtimeRequirements` {string[]}
* Returns: {ConstDependency}

Creates an instance of ConstDependency.

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {void}
* `expression` {string}
* `forwardId` {string|true} Returns the export name this dependency requests from its target module (lazy barrel optimization).
* `lazyName` {string} Returns the export name for a `LAZY_LOCAL_EXPORT`/`LAZY_NAMED_REEXPORT` classification (lazy barrel optimization).
* `lazyRole` {"id"|"local"|"*"|"import"|"@"} Returns how this dependency may be deferred when its parent module is side-effect-free (lazy barrel optimization).
* `loc` {DependencyLocation} Returns location.
* `module` {void}
* `optional` {boolean}
* `range` {number|number|number}
* `referencedSourceType` {string} Returns the source type this dependency reads from the module it references:
`javascript` for anything going through the module wrapper, `asset-url` for a
bare url embedded into non-javascript output (css, html, a manifest).
* `runtimeRequirements` {Set}
* `type` {string} Returns a display name for the type of dependency.
* `ESM_CATEGORY` {"esm"}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `EXPORTS_OBJECT_REFERENCED_MANGLEABLE` {string[][]}
* `KINDS` {Set}
* `LAZY_IMPORT_DECLARATION` {"import"}
* `LAZY_LOCAL_EXPORT` {"local"}
* `LAZY_NAMED_REEXPORT` {"id"}
* `LAZY_REEXPORT_SIDE_EFFECT` {"@"}
* `LAZY_STAR_REEXPORT` {"*"}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {ConstDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `canConcatenate(concatenateCommonJsModules[, module])`

* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if this dependency can be concatenated

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(context)`

* `context` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `is(kind)`

###### K

`K` *extends* {"css-import"|"url"|"entry"|"module-dependency"|"esm-import"|"provided"|"dynamic-import"|"esm-reexport"|"esm-export-specifier"|"esm-live-export"|"esm-side-effect-import"|"context-element"|"esm-bare-side-effect-import"|"esm-import-specifier"|"esm-evaluated-import-specifier"|"esm-compatibility"|"commonjs-require"|"commonjs-export-require"|"css-url"|"html-source"|"html-entry"|"worker"|"webassembly-import"|"webassembly-export-imported"|"sharing-request"|"local-module"|"static-exports"|"loader-import"|"css-icss-import"|"css-icss-export"}
* `kind` {K}
* Returns: {boolean}

Returns whether this dependency is of the given kind; a subclass is every kind its parent is.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `setLocWithIndex(loc, index)`

* `loc` {DependencyLocation}
* `index` {number}
* Returns: {void}

Updates loc from a source location plus an explicit index, without
materializing the `loc` object (keeps `get loc` lazy). Replaces the
`dep.loc = Object.create(loc); dep.loc.index = i` pattern, which both
allocated a copy and stored the index outside the serialized fields.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `canConcatenate(dependency, concatenateCommonJsModules[, module])`

* `dependency` {Dependency}
* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if the dependency can be concatenated (scope hoisting).

#### Static method: `compareLocations(a, b)`

* `a` {Dependency}
* `b` {Dependency}
* Returns: {-1|0|1}

Compares two dependencies by source location for sorting a module's
`dependencies`, without materializing the `loc` objects (`get loc` caches
its result, so comparing through it would retain a location object on every
sorted dependency). These dependencies always carry a real source position,
so only start (line, column) and the within-statement index are compared; a
dependency without an index sorts after one that has an index at the same
position.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `EntryDependency`

### Extends

- {ModuleDependency}

### Constructors

#### `new EntryDependency(request)`

* `request` {string}
* Returns: {EntryDependency}

Creates an instance of EntryDependency.

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {void}
* `forwardId` {string|true} Returns the export name this dependency requests from its target module (lazy barrel optimization).
* `lazyName` {string} Returns the export name for a `LAZY_LOCAL_EXPORT`/`LAZY_NAMED_REEXPORT` classification (lazy barrel optimization).
* `lazyRole` {"id"|"local"|"*"|"import"|"@"} Returns how this dependency may be deferred when its parent module is side-effect-free (lazy barrel optimization).
* `loc` {DependencyLocation} Returns location.
* `module` {void}
* `optional` {boolean}
* `range` {number|number}
* `referencedSourceType` {string} Returns the source type this dependency reads from the module it references:
`javascript` for anything going through the module wrapper, `asset-url` for a
bare url embedded into non-javascript output (css, html, a manifest).
* `request` {string}
* `sourceOrder` {number}
* `type` {string} Returns a display name for the type of dependency.
* `userRequest` {string}
* `weak` {boolean}
* `ESM_CATEGORY` {"esm"}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `EXPORTS_OBJECT_REFERENCED_MANGLEABLE` {string[][]}
* `KINDS` {Set}
* `LAZY_IMPORT_DECLARATION` {"import"}
* `LAZY_LOCAL_EXPORT` {"local"}
* `LAZY_NAMED_REEXPORT` {"id"}
* `LAZY_REEXPORT_SIDE_EFFECT` {"@"}
* `LAZY_STAR_REEXPORT` {"*"}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {DependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `canConcatenate(concatenateCommonJsModules[, module])`

* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if this dependency can be concatenated

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(context)`

* `context` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `is(kind)`

###### K

`K` *extends* {"css-import"|"url"|"entry"|"module-dependency"|"esm-import"|"provided"|"dynamic-import"|"esm-reexport"|"esm-export-specifier"|"esm-live-export"|"esm-side-effect-import"|"context-element"|"esm-bare-side-effect-import"|"esm-import-specifier"|"esm-evaluated-import-specifier"|"esm-compatibility"|"commonjs-require"|"commonjs-export-require"|"css-url"|"html-source"|"html-entry"|"worker"|"webassembly-import"|"webassembly-export-imported"|"sharing-request"|"local-module"|"static-exports"|"loader-import"|"css-icss-import"|"css-icss-export"}
* `kind` {K}
* Returns: {boolean}

Returns whether this dependency is of the given kind; a subclass is every kind its parent is.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `setLocWithIndex(loc, index)`

* `loc` {DependencyLocation}
* `index` {number}
* Returns: {void}

Updates loc from a source location plus an explicit index, without
materializing the `loc` object (keeps `get loc` lazy). Replaces the
`dep.loc = Object.create(loc); dep.loc.index = i` pattern, which both
allocated a copy and stored the index outside the serialized fields.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `canConcatenate(dependency, concatenateCommonJsModules[, module])`

* `dependency` {Dependency}
* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if the dependency can be concatenated (scope hoisting).

#### Static method: `compareLocations(a, b)`

* `a` {Dependency}
* `b` {Dependency}
* Returns: {-1|0|1}

Compares two dependencies by source location for sorting a module's
`dependencies`, without materializing the `loc` objects (`get loc` caches
its result, so comparing through it would retain a location object on every
sorted dependency). These dependencies always carry a real source position,
so only start (line, column) and the within-statement index are compared; a
dependency without an index sorts after one that has an index at the same
position.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `ESMImportDependency`

### Extends

- {ModuleDependency}

### Constructors

#### `new ESMImportDependency(request, sourceOrder[, phase][, attributes])`

* `request` {string}
* `sourceOrder` {number}
* `phase` {0|1|2}
* `attributes` {ImportAttributes}
* Returns: {ESMImportDependency}

Creates an instance of ESMImportDependency.

### Properties

* `attributes` {ImportAttributes}
* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {void}
* `forwardId` {string|true} Returns the export name this dependency requests from its target module (lazy barrel optimization).
* `lazyName` {string} Returns the export name for a `LAZY_LOCAL_EXPORT`/`LAZY_NAMED_REEXPORT` classification (lazy barrel optimization).
* `lazyRole` {"id"|"local"|"*"|"import"|"@"} Returns how this dependency may be deferred when its parent module is side-effect-free (lazy barrel optimization).
* `loc` {DependencyLocation} Returns location.
* `module` {void}
* `optional` {boolean}
* `phase` {ImportPhaseType}
* `range` {number|number}
* `referencedSourceType` {string} Returns the source type this dependency reads from the module it references:
`javascript` for anything going through the module wrapper, `asset-url` for a
bare url embedded into non-javascript output (css, html, a manifest).
* `request` {string}
* `sourceOrder` {number}
* `type` {string} Returns a display name for the type of dependency.
* `userRequest` {string}
* `weak` {boolean}
* `ESM_CATEGORY` {"esm"}
* `ExportPresenceModes` {object}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `EXPORTS_OBJECT_REFERENCED_MANGLEABLE` {string[][]}
* `getNonOptionalPart` {object}
* `KINDS` {Set}
* `LAZY_IMPORT_DECLARATION` {"import"}
* `LAZY_LOCAL_EXPORT` {"local"}
* `LAZY_NAMED_REEXPORT` {"id"}
* `LAZY_REEXPORT_SIDE_EFFECT` {"@"}
* `LAZY_STAR_REEXPORT` {"*"}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {ESMImportDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `canConcatenate(concatenateCommonJsModules[, module])`

* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if this dependency can be concatenated

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(context)`

* `context` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getImportStatement(update, __namedParameters)`

* `update` {boolean}
* `__namedParameters` {DependencyTemplateContext}
* Returns: {string|string}

Gets import statement.

#### `getImportVar(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {string}

Returns name of the variable for the import.

#### `getLinkingErrors(moduleGraph, ids, additionalMessage)`

* `moduleGraph` {ModuleGraph}
* `ids` {string[]}
* `additionalMessage` {string}
* Returns: {WebpackError[]}

Gets linking errors.

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getModuleExports(__namedParameters)`

* `__namedParameters` {DependencyTemplateContext}
* Returns: {string}

Gets module exports.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `is(kind)`

###### K

`K` *extends* {"css-import"|"url"|"entry"|"module-dependency"|"esm-import"|"provided"|"dynamic-import"|"esm-reexport"|"esm-export-specifier"|"esm-live-export"|"esm-side-effect-import"|"context-element"|"esm-bare-side-effect-import"|"esm-import-specifier"|"esm-evaluated-import-specifier"|"esm-compatibility"|"commonjs-require"|"commonjs-export-require"|"css-url"|"html-source"|"html-entry"|"worker"|"webassembly-import"|"webassembly-export-imported"|"sharing-request"|"local-module"|"static-exports"|"loader-import"|"css-icss-import"|"css-icss-export"}
* `kind` {K}
* Returns: {boolean}

Returns whether this dependency is of the given kind; a subclass is every kind its parent is.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `setLocWithIndex(loc, index)`

* `loc` {DependencyLocation}
* `index` {number}
* Returns: {void}

Updates loc from a source location plus an explicit index, without
materializing the `loc` object (keeps `get loc` lazy). Replaces the
`dep.loc = Object.create(loc); dep.loc.index = i` pattern, which both
allocated a copy and stored the index outside the serialized fields.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `canConcatenate(dependency, concatenateCommonJsModules[, module])`

* `dependency` {Dependency}
* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if the dependency can be concatenated (scope hoisting).

#### Static method: `compareLocations(a, b)`

* `a` {Dependency}
* `b` {Dependency}
* Returns: {-1|0|1}

Compares two dependencies by source location for sorting a module's
`dependencies`, without materializing the `loc` objects (`get loc` caches
its result, so comparing through it would retain a location object on every
sorted dependency). These dependencies always carry a real source position,
so only start (line, column) and the within-statement index are compared; a
dependency without an index sorts after one that has an index at the same
position.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `ModuleDependency`

### Extends

- {Dependency}

### Extended by

- {ESMImportDependency}
- {EntryDependency}

### Constructors

#### `new ModuleDependency(request[, sourceOrder])`

* `request` {string}
* `sourceOrder` {number}
* Returns: {ModuleDependency}

Creates an instance of ModuleDependency.

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {void}
* `forwardId` {string|true} Returns the export name this dependency requests from its target module (lazy barrel optimization).
* `lazyName` {string} Returns the export name for a `LAZY_LOCAL_EXPORT`/`LAZY_NAMED_REEXPORT` classification (lazy barrel optimization).
* `lazyRole` {"id"|"local"|"*"|"import"|"@"} Returns how this dependency may be deferred when its parent module is side-effect-free (lazy barrel optimization).
* `loc` {DependencyLocation} Returns location.
* `module` {void}
* `optional` {boolean}
* `range` {number|number}
* `referencedSourceType` {string} Returns the source type this dependency reads from the module it references:
`javascript` for anything going through the module wrapper, `asset-url` for a
bare url embedded into non-javascript output (css, html, a manifest).
* `request` {string}
* `sourceOrder` {number}
* `type` {string} Returns a display name for the type of dependency.
* `userRequest` {string}
* `weak` {boolean}
* `ESM_CATEGORY` {"esm"}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `EXPORTS_OBJECT_REFERENCED_MANGLEABLE` {string[][]}
* `KINDS` {Set}
* `LAZY_IMPORT_DECLARATION` {"import"}
* `LAZY_LOCAL_EXPORT` {"local"}
* `LAZY_NAMED_REEXPORT` {"id"}
* `LAZY_REEXPORT_SIDE_EFFECT` {"@"}
* `LAZY_STAR_REEXPORT` {"*"}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {DependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `canConcatenate(concatenateCommonJsModules[, module])`

* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if this dependency can be concatenated

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(context)`

* `context` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `is(kind)`

###### K

`K` *extends* {"css-import"|"url"|"entry"|"module-dependency"|"esm-import"|"provided"|"dynamic-import"|"esm-reexport"|"esm-export-specifier"|"esm-live-export"|"esm-side-effect-import"|"context-element"|"esm-bare-side-effect-import"|"esm-import-specifier"|"esm-evaluated-import-specifier"|"esm-compatibility"|"commonjs-require"|"commonjs-export-require"|"css-url"|"html-source"|"html-entry"|"worker"|"webassembly-import"|"webassembly-export-imported"|"sharing-request"|"local-module"|"static-exports"|"loader-import"|"css-icss-import"|"css-icss-export"}
* `kind` {K}
* Returns: {boolean}

Returns whether this dependency is of the given kind; a subclass is every kind its parent is.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `setLocWithIndex(loc, index)`

* `loc` {DependencyLocation}
* `index` {number}
* Returns: {void}

Updates loc from a source location plus an explicit index, without
materializing the `loc` object (keeps `get loc` lazy). Replaces the
`dep.loc = Object.create(loc); dep.loc.index = i` pattern, which both
allocated a copy and stored the index outside the serialized fields.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `canConcatenate(dependency, concatenateCommonJsModules[, module])`

* `dependency` {Dependency}
* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if the dependency can be concatenated (scope hoisting).

#### Static method: `compareLocations(a, b)`

* `a` {Dependency}
* `b` {Dependency}
* Returns: {-1|0|1}

Compares two dependencies by source location for sorting a module's
`dependencies`, without materializing the `loc` objects (`get loc` caches
its result, so comparing through it would retain a location object on every
sorted dependency). These dependencies always carry a real source position,
so only start (line, column) and the within-statement index are compared; a
dependency without an index sorts after one that has an index at the same
position.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `NullDependency`

### Extends

- {Dependency}

### Extended by

- {ConstDependency}
- {StaticExportsDependency}

### Constructors

#### `new NullDependency()`

* Returns: {NullDependency}

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {void}
* `forwardId` {string|true} Returns the export name this dependency requests from its target module (lazy barrel optimization).
* `lazyName` {string} Returns the export name for a `LAZY_LOCAL_EXPORT`/`LAZY_NAMED_REEXPORT` classification (lazy barrel optimization).
* `lazyRole` {"id"|"local"|"*"|"import"|"@"} Returns how this dependency may be deferred when its parent module is side-effect-free (lazy barrel optimization).
* `loc` {DependencyLocation} Returns location.
* `module` {void}
* `optional` {boolean}
* `referencedSourceType` {string} Returns the source type this dependency reads from the module it references:
`javascript` for anything going through the module wrapper, `asset-url` for a
bare url embedded into non-javascript output (css, html, a manifest).
* `type` {string} Returns a display name for the type of dependency.
* `ESM_CATEGORY` {"esm"}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `EXPORTS_OBJECT_REFERENCED_MANGLEABLE` {string[][]}
* `KINDS` {Set}
* `LAZY_IMPORT_DECLARATION` {"import"}
* `LAZY_LOCAL_EXPORT` {"local"}
* `LAZY_NAMED_REEXPORT` {"id"}
* `LAZY_REEXPORT_SIDE_EFFECT` {"@"}
* `LAZY_STAR_REEXPORT` {"*"}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {NullDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `canConcatenate(concatenateCommonJsModules[, module])`

* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if this dependency can be concatenated

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(context)`

* `context` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `is(kind)`

###### K

`K` *extends* {"css-import"|"url"|"entry"|"module-dependency"|"esm-import"|"provided"|"dynamic-import"|"esm-reexport"|"esm-export-specifier"|"esm-live-export"|"esm-side-effect-import"|"context-element"|"esm-bare-side-effect-import"|"esm-import-specifier"|"esm-evaluated-import-specifier"|"esm-compatibility"|"commonjs-require"|"commonjs-export-require"|"css-url"|"html-source"|"html-entry"|"worker"|"webassembly-import"|"webassembly-export-imported"|"sharing-request"|"local-module"|"static-exports"|"loader-import"|"css-icss-import"|"css-icss-export"}
* `kind` {K}
* Returns: {boolean}

Returns whether this dependency is of the given kind; a subclass is every kind its parent is.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `setLocWithIndex(loc, index)`

* `loc` {DependencyLocation}
* `index` {number}
* Returns: {void}

Updates loc from a source location plus an explicit index, without
materializing the `loc` object (keeps `get loc` lazy). Replaces the
`dep.loc = Object.create(loc); dep.loc.index = i` pattern, which both
allocated a copy and stored the index outside the serialized fields.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `canConcatenate(dependency, concatenateCommonJsModules[, module])`

* `dependency` {Dependency}
* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if the dependency can be concatenated (scope hoisting).

#### Static method: `compareLocations(a, b)`

* `a` {Dependency}
* `b` {Dependency}
* Returns: {-1|0|1}

Compares two dependencies by source location for sorting a module's
`dependencies`, without materializing the `loc` objects (`get loc` caches
its result, so comparing through it would retain a location object on every
sorted dependency). These dependencies always carry a real source position,
so only start (line, column) and the within-statement index are compared; a
dependency without an index sorts after one that has an index at the same
position.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `StaticExportsDependency`

### Extends

- {NullDependency}

### Constructors

#### `new StaticExportsDependency(exports, canMangle)`

* `exports` {Exports}
* `canMangle` {boolean}
* Returns: {StaticExportsDependency}

Creates an instance of StaticExportsDependency.

### Properties

* `canMangle` {boolean}
* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {void}
* `exports` {Exports}
* `forwardId` {string|true} Returns the export name this dependency requests from its target module (lazy barrel optimization).
* `lazyName` {string} Returns the export name for a `LAZY_LOCAL_EXPORT`/`LAZY_NAMED_REEXPORT` classification (lazy barrel optimization).
* `lazyRole` {"id"|"local"|"*"|"import"|"@"} Returns how this dependency may be deferred when its parent module is side-effect-free (lazy barrel optimization).
* `loc` {DependencyLocation} Returns location.
* `module` {void}
* `optional` {boolean}
* `referencedSourceType` {string} Returns the source type this dependency reads from the module it references:
`javascript` for anything going through the module wrapper, `asset-url` for a
bare url embedded into non-javascript output (css, html, a manifest).
* `type` {string} Returns a display name for the type of dependency.
* `ESM_CATEGORY` {"esm"}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `EXPORTS_OBJECT_REFERENCED_MANGLEABLE` {string[][]}
* `KINDS` {Set}
* `LAZY_IMPORT_DECLARATION` {"import"}
* `LAZY_LOCAL_EXPORT` {"local"}
* `LAZY_NAMED_REEXPORT` {"id"}
* `LAZY_REEXPORT_SIDE_EFFECT` {"@"}
* `LAZY_STAR_REEXPORT` {"*"}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {NullDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `canConcatenate(concatenateCommonJsModules[, module])`

* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if this dependency can be concatenated

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(context)`

* `context` {ObjectDeserializerContextObjectMiddlewareObject_3}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `is(kind)`

###### K

`K` *extends* {"css-import"|"url"|"entry"|"module-dependency"|"esm-import"|"provided"|"dynamic-import"|"esm-reexport"|"esm-export-specifier"|"esm-live-export"|"esm-side-effect-import"|"context-element"|"esm-bare-side-effect-import"|"esm-import-specifier"|"esm-evaluated-import-specifier"|"esm-compatibility"|"commonjs-require"|"commonjs-export-require"|"css-url"|"html-source"|"html-entry"|"worker"|"webassembly-import"|"webassembly-export-imported"|"sharing-request"|"local-module"|"static-exports"|"loader-import"|"css-icss-import"|"css-icss-export"}
* `kind` {K}
* Returns: {boolean}

Returns whether this dependency is of the given kind; a subclass is every kind its parent is.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContextObjectMiddlewareObject_4}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `setLocWithIndex(loc, index)`

* `loc` {DependencyLocation}
* `index` {number}
* Returns: {void}

Updates loc from a source location plus an explicit index, without
materializing the `loc` object (keeps `get loc` lazy). Replaces the
`dep.loc = Object.create(loc); dep.loc.index = i` pattern, which both
allocated a copy and stored the index outside the serialized fields.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `canConcatenate(dependency, concatenateCommonJsModules[, module])`

* `dependency` {Dependency}
* `concatenateCommonJsModules` {boolean}
* `module` {Module}
* Returns: {boolean}

Returns true if the dependency can be concatenated (scope hoisting).

#### Static method: `compareLocations(a, b)`

* `a` {Dependency}
* `b` {Dependency}
* Returns: {-1|0|1}

Compares two dependencies by source location for sorting a module's
`dependencies`, without materializing the `loc` objects (`get loc` caches
its result, so comparing through it would retain a location object on every
sorted dependency). These dependencies always carry a real source position,
so only start (line, column) and the within-statement index are compared; a
dependency without an index sorts after one that has an index at the same
position.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## `HarmonyImportDependency`

Renames and re-exports [ESMImportDependency](#esmimportdependency)
