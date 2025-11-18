function findDuplicates(inputArray) {
    // 1. Initialize a Set to store elements we've seen so far.
    //    Sets only store unique values, allowing for fast O(1) lookups.
    const seen = new Set();
    
    // 2. Initialize a Set to store the duplicate elements found.
    //    Using a Set here ensures that each duplicate is listed only once, 
    //    even if it appears multiple times in the input array.
    const duplicates = new Set();

    // 3. Iterate through the input array
    for (const item of inputArray) {
        // Check if the current item is already in the 'seen' Set
        if (seen.has(item)) {
            // If it is, we've found a duplicate! Add it to the duplicates Set.
            duplicates.add(item);
        } else {
            // If it's the first time we've seen it, add it to the 'seen' Set.
            seen.add(item);
        }
    }

    // 4. Convert the duplicates Set back to an Array and return it.
    return Array.from(duplicates);
}

// --- Example Usage ---

const data = [1, 'apple', 5, 2, 'banana', 5, 1, 8, 'apple', 10];
const result = findDuplicates(data);

console.log("Input Array:", data);
console.log("Duplicates Found:", result); 
// Expected Output: Duplicates Found: [1, 5, 'apple']