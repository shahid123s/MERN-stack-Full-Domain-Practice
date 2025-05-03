let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch (arr,target, first = 0, last = arr.length, ) {
    let mid = Math.floor((first+last) / 2);
    console.log(mid)
    if(arr[mid] === target) return mid
    if(arr[mid] < target)  binarySearch(arr, target,  mid + 1 , last);
    else if(arr[mid] > target)  binarySearch(arr, target, first, mid -1);
    else return  -1;
}

console.log(binarySearch(arr, 3));  
