/**
 * groupBy.js
 *
 * A small, reusable utility that groups the elements of an array into an
 * object whose keys are produced by a caller-supplied key function.
 *
 * This is a natural companion to the existing findDuplicates (two.js) and
 * chunkArray helpers already in this repository.
 */

/**
 * Groups an array of items by the value returned by `keyFn` for each item.
 *
 * @template T
 * @param {T[]} array        - The input array to group.
 * @param {function(T): string|number} keyFn
 *                           - A function that receives each element and returns
 *                             the key it should be grouped under.
 * @returns {Object.<string, T[]>} An object mapping each key to the array of
 *                                 elements that produced that key.
 *
 * @throws {TypeError} If `array` is not an Array or `keyFn` is not a function.
 *
 * @example
 * groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd');
 * // => { odd: [1, 3, 5], even: [2, 4] }
 */
function groupBy(array, keyFn) {
  if (!Array.isArray(array)) {
    throw new TypeError('groupBy: first argument must be an Array');
  }
  if (typeof keyFn !== 'function') {
    throw new TypeError('groupBy: second argument must be a function');
  }

  return array.reduce((groups, item) => {
    const key = keyFn(item);
    // Initialise the bucket for this key if it does not exist yet.
    if (!Object.prototype.hasOwnProperty.call(groups, key)) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

// ---------------------------------------------------------------------------
// Demo — run with:  node groupBy.js
// ---------------------------------------------------------------------------

// Example 1: group numbers by odd / even
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('--- Group numbers by parity ---');
console.log(groupBy(numbers, n => (n % 2 === 0 ? 'even' : 'odd')));
// => { odd: [1, 3, 5, 7], even: [2, 4, 6, 8] }

// Example 2: group words by their first letter
const words = ['apple', 'avocado', 'banana', 'blueberry', 'cherry', 'apricot'];
console.log('\n--- Group words by first letter ---');
console.log(groupBy(words, w => w[0]));
// => { a: ['apple', 'avocado', 'apricot'], b: ['banana', 'blueberry'], c: ['cherry'] }

// Example 3: group objects by a property value
const people = [
  { name: 'Alice', department: 'Engineering' },
  { name: 'Bob',   department: 'Design' },
  { name: 'Carol', department: 'Engineering' },
  { name: 'Dave',  department: 'Design' },
  { name: 'Eve',   department: 'Engineering' },
];
console.log('\n--- Group people by department ---');
console.log(groupBy(people, p => p.department));

module.exports = groupBy;
