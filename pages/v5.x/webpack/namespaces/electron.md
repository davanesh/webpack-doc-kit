# electron

## Class: `ElectronTargetPlugin`

### Constructors

#### `new ElectronTargetPlugin([context][, type])`

* `context` {"main"|"preload"|"renderer"}
* `type` {"asset"|"asset-url"|"css-import"|"import"|"jsonp"|"var"|"this"|"script"|"module"|"commonjs"|"window"|"system"|"assign"|"self"|"global"|"promise"|"css-url"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"amd-async"|"umd"|"umd2"|"module-import"|"node-commonjs"}
* Returns: {ElectronTargetPlugin}

### Properties

* `type` {ExternalsType}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
