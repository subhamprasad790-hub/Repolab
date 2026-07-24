# Repolab

A small JavaScript playground repository with a reusable duplicate-finding utility.

## Included utility

### `findDuplicates`

The `two.js` module exports a `findDuplicates(inputArray)` function that returns each duplicated value once, preserving the order in which duplicates are first detected.

#### Example

```js
const { findDuplicates } = require('./two');

const values = [1, 'apple', 5, 2, 'banana', 5, 1, 'apple'];
console.log(findDuplicates(values));
// => [5, 1, 'apple']
```

## Run the demo

```bash
node two.js
```

This prints a sample input array and the duplicates found in it.
