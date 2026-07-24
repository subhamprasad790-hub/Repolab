function chunkArray(inputArray, chunkSize) {
  if (!Array.isArray(inputArray)) {
    throw new TypeError('Expected the first argument to be an array.');
  }

  if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
    throw new TypeError('Chunk size must be a positive integer.');
  }

  const chunks = [];

  for (let index = 0; index < inputArray.length; index += chunkSize) {
    chunks.push(inputArray.slice(index, index + chunkSize));
  }

  return chunks;
}

module.exports = chunkArray;
