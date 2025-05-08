// check if the  string is palindrome or not 


function isPalindrome (str = ''){
    if(!str) return false;
    let start = 0, end = str.length - 1
    while(start < end) {
        if(str[start] !== str[end]) return false
        start++ , end --;
    }
    return  true;
}


console.log(isPalindrome('malayalam'))


// time complexity -> O(n)
// space complexity -> O(1) no extra space 


// advanced version 
function isAdvancedPalindrome(str = '') {
    if (typeof str !== 'string' || !str.length) return false;

    // Step 1: Normalize the string
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Step 2: Check palindrome using two pointers
    let start = 0, end = cleanedStr.length - 1;
    while (start < end) {
        if (cleanedStr[start] !== cleanedStr[end]) return false;
        start++;
        end--;
    }

    return true;
}

// Example test cases
console.log(isAdvancedPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isAdvancedPalindrome("No lemon, no melon"));             // true
console.log(isAdvancedPalindrome("Hello"));                          // false