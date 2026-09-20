# electron

## Class: `ElectronTargetPlugin`

### Constructors

#### `new ElectronTargetPlugin([context][, type])`

* `context` {"preload"|"main"|"renderer"}
* `type` {"asset"|"asset-url"|"css-import"|"module"|"promise"|"import"|"var"|"this"|"script"|"commonjs"|"jsonp"|"global"|"assign"|"amd"|"amd-require"|"umd"|"umd2"|"commonjs2"|"system"|"window"|"self"|"commonjs-static"|"commonjs-module"|"css-url"|"node-commonjs"|"module-import"|"amd-async"}
* Returns: {ElectronTargetPlugin}

### Properties

* `type` {ExternalsType}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
