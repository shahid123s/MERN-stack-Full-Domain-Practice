// Reverse a string or an array in place ;

function reverseString(str)  {
    let flag= 0
    if(typeof str === 'string') {
        str = [...str]  // n
        flag = 1;
    }
    let start = 0;
    let end = str.length -1 ;
    while(start < end) { // n/2
        [str[start], str[end]] = [str[end], str[start]];  //  why this is not work in stirng is string in immutable we can only add a value to that 
        start++, end--;
    }
    return flag === 1 ? str = str.join(''): str;
}

console.log(reverseString([1, 2, 3, 4, 5, 6]))

// time complexity  ->   O(n) for array and string 
// space complexity  ->  O(n) for string and O(1) for array  // because of the conversion array -> string & string -> array 


// recursion 
function reverseStringUsingRecursion(str) {
    let flag= 0
    if(typeof str === 'string') {
        str = [...str] 
        flag = 1;
    }

    function helper(start = 0, end = str.length - 1) {
        if(start > end) return;
        [str[start], str[end]] = [str[end], str[start]];
        helper(start+1, end - 1);
    }
    helper();
    return flag === 1 ? str = str.join(''): str;
}

console.log(reverseStringUsingRecursion([1, 2, 3, 4, 5, 6,``]))

// time complexity is same but space complextiy  is O(n) due to the recursion stack 