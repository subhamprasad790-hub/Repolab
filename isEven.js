function isEven(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('isEven(num) expects a valid number');
  }

  return num % 2 === 0;
}

module.exports = { isEven };

// Usage example:
console.log(isEven(4)); // true
