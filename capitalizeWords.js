function capitalizeWords(str) {
  if (typeof str !== 'string') {
    throw new TypeError('capitalizeWords expects a string');
  }

  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

module.exports = capitalizeWords;

// Usage example:
console.log(capitalizeWords('hello world from repolab')); // Hello World From Repolab
