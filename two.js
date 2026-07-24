function findDuplicates(inputArray) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of inputArray) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}

module.exports = {
  findDuplicates,
};

if (require.main === module) {
  const sampleData = [1, 'apple', 5, 2, 'banana', 5, 1, 8, 'apple', 10];

  console.log('Input Array:', sampleData);
  console.log('Duplicates Found:', findDuplicates(sampleData));
}
