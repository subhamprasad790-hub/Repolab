const chunkArray = require('./chunkArray');

const sampleItems = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'];
const chunkedItems = chunkArray(sampleItems, 2);

console.log('Original items:', sampleItems);
console.log('Chunked items:', chunkedItems);
