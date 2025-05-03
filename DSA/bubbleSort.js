 // This is not a correct implementation of bubble sort
// In bubble sort, we compare adjacent elements and swap them if needed
// Here's the correct bubble sort implementation:
function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}

// 

 
