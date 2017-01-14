# tuple-set [![Build Status](https://img.shields.io/circleci/project/bcherny/tuple-set.svg?branch=master&style=flat-square)](https://circleci.com/gh/bcherny/tuple-set) [![NPM](https://img.shields.io/npm/v/tuple-set.svg?style=flat-square)](https://www.npmjs.com/package/tuple-set) [![MIT](https://img.shields.io/npm/l/tuple-set.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> ES6 Set where keys are 2-tuples

## Installation

```sh
npm install tuple-set --save
```

## Usage

```js
import { TupleSet } from 'tuple-set'

const set = new TupleSet

set.add(1, 2)
   .add(3, 4)

set.has(1, 2) // true
set.size      // 2
```

## Tests

```sh
npm test
```

## License

MIT