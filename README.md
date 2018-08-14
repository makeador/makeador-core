# makeador-core


<p>
  <a href="https://travis-ci.org/makeador/makeador-core">
    <img src="https://travis-ci.org/makeador/makeador-core.svg?branch=master"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/makeador-core">
    <img src="https://img.shields.io/npm/v/makeador-core.svg"
         alt="NPM Version">
  </a>

  <a href="https://npmjs.org/package/makeador-core">
    <img src="http://img.shields.io/npm/dm/makeador-core.svg"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/makeador/makeador-core.svg">
    <img src="https://david-dm.org/makeador/makeador-core.svg"
         alt="Dependency Status">
  </a>
</p>

`makeador-core` is the barebones of the whole makeador ecosystem, intended to be used in CLIs and microservices.

## Documentation
This module exposes a default function (`makeador`) returning an apparently random `makea` state (not random).

### `makeador() : String`
Returns a makea state string

### Makea states
- `'Makea'`
- `'No makea'`
- `'Not sure if makea'`

### Usage
```js
import makeador from `makeador-core`;

makeador() // > Makea
makeador() // > No makea
makeador() // > Not sure if makea
makeador() // > Makea
makeador() // > Not sure if makea
makeador() // > No makea
makeador() // > Makea
makeador() // > Makea
makeador() // > No makea
makeador() // > Not sure if makea
makeador() // > No makea
```
