# electron

## Class: `ElectronTargetPlugin`

### Constructors

#### `new ElectronTargetPlugin([context][, type])`

* `context` {"preload"|"main"|"renderer"}
* `type` {"asset"|"module"|"asset-url"|"css-import"|"promise"|"import"|"commonjs"|"jsonp"|"this"|"var"|"assign"|"window"|"self"|"global"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"amd-async"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|"css-url"}
* Returns: {ElectronTargetPlugin}

### Properties

* `type` {ExternalsType}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
