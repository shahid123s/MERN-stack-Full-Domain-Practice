// find the duplicate in an array 


function findDuplicate (arr = []) {
    if(!arr.length) return [];
    console.log(arr)
    let obj = {}
    let result = []
    for(let ele of arr) {
        obj[ele] = (obj[ele]|| 0) + 1;
    }
    for(let key in obj){
        if(obj[key] > 1)  result.push(Number(key))
    }
return result;
}

console.log(findDuplicate([1, 2, 3, 4, 12, 5 ,1 , 3,4 ,2, 5,  8, 8, 9, ]))