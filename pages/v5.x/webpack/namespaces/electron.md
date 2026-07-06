# electron

## Class: `ElectronTargetPlugin`

### Constructors

#### `new ElectronTargetPlugin([context][, type])`

* `context` {"main"|"preload"|"renderer"}
* `type` {"asset"|"module"|"asset-url"|"css-import"|"global"|"promise"|"import"|"commonjs"|"jsonp"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|"css-url"}
* Returns: {ElectronTargetPlugin}

Creates an instance of ElectronTargetPlugin.

### Properties

* `type` {ExternalsType}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
