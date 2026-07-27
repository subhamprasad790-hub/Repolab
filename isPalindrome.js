function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split('').reverse().join('');

    return normalized === reversed;
}

module.exports = isPalindrome;

// --- Example Usage ---

const sample = 'A man, a plan, a canal: Panama';
console.log(`"${sample}" is a palindrome:`, isPalindrome(sample));
