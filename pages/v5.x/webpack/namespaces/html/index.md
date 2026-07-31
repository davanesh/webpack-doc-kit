# html

## Namespaces

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

#### Static method: `computeContentHash(content, outputOptions)`

* `content` {string|Buffer}
* `outputOptions` {Output}
* Returns: {string}

`output.hashFunction`/`hashSalt`/`hashDigest`/`hashDigestLength`
digest of `content`, with `nonNumericOnlyHash` applied — webpack's
standard `[contenthash]` recipe.

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {Output}
* Returns: {ChunkFilenameTemplate}

Filename template for an extracted HTML page: `output.htmlFilename` for
initial chunks, `output.htmlChunkFilename` otherwise — the HTML counterpart
of `CssModulesPlugin.getChunkFilenameTemplate`.
