# schemes

## Class: `HttpUriPlugin`

### Constructors

#### Constructor

* `options` {HttpUriOptions}
* Returns: {HttpUriPlugin}

### Properties

* `options` {HttpUriOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `VirtualUrlPlugin`

### Constructors

#### Constructor

* `modules` {VirtualModules}
* `schemeOrOptions` {string|Omit}
* Returns: {VirtualUrlPlugin}

### Properties

* `context` {string}
* `modules` {NormalizedModules}
* `options` {VirtualUrlOptions}
* `scheme` {string}
* `DEFAULT_SCHEME` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `findVirtualModuleConfigById(id)`

* `id` {string}
* Returns: {VirtualModule}

#### `getCacheVersion(version)`

* `version` {string|true|object}
* Returns: {string}

Get the cache version for a given version value
