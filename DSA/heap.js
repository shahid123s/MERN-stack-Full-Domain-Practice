function heapSort(arr = []) {
    let n = arr.length;
    for( let i  = Math.floor(n/2); i >= 0; i--){
        heapify(arr, n, i);
    }

    for(let i  = n - 1 ; i >= 0 ; i --){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
     
}


function heapify(arr, size, index){
    let larget = index;
    let left=  2 * index  + 1;
    let right = 2 * index  + 2;
    
    if(left < size && arr[left] > arr[index]) larget = left;
    if(right < size && arr[right] > arr[index]) larget = right;

    if(larget != index){
        [arr[index], arr[larget]] = [arr[larget], arr[index]];
        heapify(arr, size, larget);
    }
}


const promise = new Promise((res, rej) => {
      if(success)  res('resolever')
      else   rej('Error')
})

