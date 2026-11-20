# hmr

## Class: `LazyCompilationPlugin`

### Constructors

#### `new LazyCompilationPlugin(__namedParameters)`

* `__namedParameters` {OptionsLazyCompilationPlugin}
* Returns: {LazyCompilationPlugin}

Creates an instance of LazyCompilationPlugin.

### Properties

* `backend` {LazyCompilationTransport}
* `entries` {boolean}
* `imports` {boolean}
* `test` {string|RegExp|GlobCondition|object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `getCompilerHooks(compiler)`

* `compiler` {Compiler}
* Returns: {LazyCompilationPluginHooks}

Returns the hooks a development server taps to serve the lazy compilation backend from its own server.
