# makeador-core
`makeador-core` is the barebones of the whole makeador ecosystem, intended to be used in CLIs and microservices.

## Documentation
This module exposes a default function (`makeador`) returning an apparently random `makea` state (not random).

### `makeador() : {String}`
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
