# electron

## Class: `ElectronTargetPlugin`

### Constructors

#### `new ElectronTargetPlugin([context][, type])`

* `context` {"main"|"preload"|"renderer"}
* `type` {"asset"|"asset-url"|"css-import"|"var"|"this"|"import"|"script"|"module"|"commonjs"|"global"|"assign"|"self"|"window"|"system"|"promise"|"css-url"|"jsonp"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"amd-async"|"umd"|"umd2"|"module-import"|"node-commonjs"}
* Returns: {ElectronTargetPlugin}

### Properties

* `type` {ExternalsType}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
