# container

## Class: `ContainerPlugin`

### Constructors

#### Constructor

* `options` {ContainerPluginOptions}
* Returns: {ContainerPlugin}

### Properties

* `options` {ContainerPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ContainerReferencePlugin`

### Constructors

#### Constructor

* `options` {ContainerReferencePluginOptions}
* Returns: {ContainerReferencePlugin}

### Properties

* `options` {ContainerReferencePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ModuleFederationPlugin`

### Constructors

#### Constructor

* `options` {ModuleFederationPluginOptions}
* Returns: {ModuleFederationPlugin}

### Properties

* `options` {ModuleFederationPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksModuleFederationPlugin}

Get the compilation hooks associated with this plugin.

***

## `scope`

> `const` **scope**: {object}

#### T

`T`
* `scope` {string}
* `options` {ContainerOptionsFormat}
* Returns: {Record}
