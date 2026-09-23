# json

## Class: `JsonModulesPlugin`

The JsonModulesPlugin is the entrypoint plugin for the json modules feature.
It adds the json module type to the compiler and registers the json parser and generator.

### Constructors

#### `new JsonModulesPlugin()`

* Returns: {JsonModulesPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
