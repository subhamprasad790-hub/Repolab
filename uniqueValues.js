/**
 * Return the first occurrence of each value in an array, preserving order.
 *
 * @param {unknown[]} values - Values to deduplicate.
 * @returns {unknown[]} A new array containing only unique values.
 * @throws {TypeError} When values is not an array.
 */
function uniqueValues(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("uniqueValues expects an array");
  }

  return [...new Set(values)];
}

module.exports = uniqueValues;

if (require.main === module) {
  const values = ["apple", "banana", "apple", "pear", "banana"];
  console.log(uniqueValues(values));
  // Expected output: [ 'apple', 'banana', 'pear' ]
}
