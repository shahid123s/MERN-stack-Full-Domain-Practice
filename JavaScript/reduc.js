const arr  = [1, 2, 3,4, 5, 6, 7 ,7, 8, ];


const result = arr.reduce((acc, curr) => {
    if(curr % 2 !== 0 )  acc += curr;

    return acc
}, 0);


console.log(result)