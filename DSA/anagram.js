// This implementation has a few issues:
// 1. It doesn't check if strings have equal length (anagrams must have same length)
// 2. It doesn't verify if all characters in str1 were used (hashTable values should all be 0)
// 3. It's case sensitive which may not be desired
function anagram (str1 = '', str2 = '') {
    // Check if strings are same length
    if (str1.length !== str2.length) return false;

    let hashTable = {};

    // Convert to lowercase for case-insensitive comparison
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for(let char of str1) {
        hashTable[char] = (hashTable[char] || 0) + 1;
    }

    for(let char of str2){
        if(!hashTable[char]) return false;
        hashTable[char]--;
    }

    // Verify all characters were used
    for(let char in hashTable) {
        if(hashTable[char] !== 0) return false;
    }

    return true;
}

