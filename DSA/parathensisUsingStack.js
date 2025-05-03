function parathesis (s = '') {
    let stack = [];

    let pair = {
        ')' :'(',
        '}' : '{',
        ']' : '[',
    }

    for(const char of s) {
        if(!pair[char]) stack.push(char) 
        else if(pair[char] !== stack.pop()) return false;

    }

    return stack.length === 0;
}


console.log(parathesis('([])'))



