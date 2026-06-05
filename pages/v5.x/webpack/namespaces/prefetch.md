# prefetch

## Class: `ChunkPrefetchPreloadPlugin`

Adds runtime support for chunk prefetch and preload relationships discovered
in the chunk graph.

### Constructors

#### `new ChunkPrefetchPreloadPlugin()`

* Returns: {ChunkPrefetchPreloadPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Registers compilation hooks that emit the runtime modules responsible for
scheduling chunk prefetch and preload requests.
