# css

## Namespaces

- [cssMinify](namespaces/cssMinify.md)
- [syntax](namespaces/syntax/index.md)

## Class: `CssModulesPlugin`

### Constructors

#### `new CssModulesPlugin()`

* Returns: {CssModulesPlugin}

### Properties

* `getCompilationHooks` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### `getModulesInOrder(chunk, modules, compilation)`

* `chunk` {Chunk}
* `modules` {Iterable}
* `compilation` {Compilation}
* Returns: {Module[]}

Gets modules in order.

#### `getOrderedChunkCssModules(chunk, chunkGraph, compilation)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `compilation` {Compilation}
* Returns: {CssModule[]}

Gets ordered chunk css modules.

#### `renderChunk(__namedParameters, hooks)`

* `__namedParameters` {RenderContextCssModulesPlugin}
* `hooks` {object}
* Returns: {Source}

Renders generated source.

#### Static method: `chunkHasCss(chunk, chunkGraph)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Returns true, when the chunk has css.

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {ChunkFilenameTemplate}

Gets chunk filename template.

#### Static method: `getCssChunksInCascadeOrder(chunks, group, chunkGraph)`

* `chunks` {Iterable}
* `group` {ChunkGroup}
* `chunkGraph` {ChunkGraph}
* Returns: {Chunk[]}

The css-carrying chunks of `chunks`, in the order their rules cascade —
the order a `<link rel="stylesheet">` per chunk has to be written in.

#### Static method: `renderModule(module, renderContext, hooks)`

* `module` {CssModule}
* `renderContext` {ChunkRenderContextCssModulesPlugin}
* `hooks` {object}
* Returns: {Source}

Renders css module source.

***

## `cssMinify(input[, sourceMap][, minimizerOptions])`

* `input` {object}
* `sourceMap` {object}
* `minimizerOptions` {object|CssTransformOptions}
* Returns: {Promise}

***

## `CssLoadingRuntimeModule`

Re-exports [CssLoadingRuntimeModule](../web.md#cssloadingruntimemodule)
