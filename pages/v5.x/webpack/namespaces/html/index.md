# html

## Namespaces

- [htmlMinify](namespaces/htmlMinify.md)
- [syntax](namespaces/syntax/index.md)

## Class: `HtmlModulesPlugin`

### Constructors

#### `new HtmlModulesPlugin()`

* Returns: {HtmlModulesPlugin}

### Properties

* `getCompilationHooks` {object} Per-compilation hooks for the experimental HTML support.

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `chunkHasHtml(chunk, chunkGraph)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Returns true, when the chunk has html.

#### Static method: `computeContentHash(content, outputOptions)`

* `content` {string|Buffer}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {string}

`output.hashFunction`/`hashSalt`/`hashDigest`/`hashDigestLength`
digest of `content`, with `nonNumericOnlyHash` applied — webpack's
standard `[contenthash]` recipe.

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {ChunkFilenameTemplate}

Filename template for an extracted HTML page: `output.htmlFilename` for
initial chunks, `output.htmlChunkFilename` otherwise — the HTML counterpart
of `CssModulesPlugin.getChunkFilenameTemplate`.

***

## `builtinEmbeddedRenderer`

> `const` **builtinEmbeddedRenderer**: {object}

* `options` {BuiltinEmbeddedRendererOptions}
* Returns: {object}

***

## `htmlMinify(input[, sourceMap][, minimizerOptions])`

* `input` {object}
* `sourceMap` {RawSourceMap}
* `minimizerOptions` {Omit|object}
* Returns: {Promise}
