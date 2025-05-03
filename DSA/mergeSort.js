function mergeSort (arr = []){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    return mergeSortHelper(left, right);

}

function mergeSortHelper(left, right){
    let sorted = [];
    let i = 0 , j = 0;
    while(left.length && right.length){
        if(left[i] > right[j]){
            sorted.push(right[j]) 
            j++
        } else {
            sorted.push(left[i]);
            i++
        }
    }
    return [...sorted, ...left.slice(i), ...right.slice(j)];
}
