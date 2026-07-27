function countVowels(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = countVowels;

// Usage example:
console.log(countVowels('Hello World')); // 3
