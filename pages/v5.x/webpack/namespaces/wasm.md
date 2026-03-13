# wasm

## Class: `AsyncWebAssemblyModulesPlugin`

### Constructors

#### Constructor

* `options` {AsyncWebAssemblyModulesPluginOptions}
* Returns: {AsyncWebAssemblyModulesPlugin}

### Properties

* `options` {AsyncWebAssemblyModulesPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `renderModule(module, renderContext, hooks)`

* `module` {Module}
* `renderContext` {WebAssemblyRenderContext}
* `hooks` {CompilationHooksAsyncWebAssemblyModulesPlugin}
* Returns: {Source}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksAsyncWebAssemblyModulesPlugin}

***

## Class: `EnableWasmLoadingPlugin`

### Constructors

#### Constructor

* `type` {string}
* Returns: {EnableWasmLoadingPlugin}

### Properties

* `type` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `checkEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

#### Static method: `setEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}
