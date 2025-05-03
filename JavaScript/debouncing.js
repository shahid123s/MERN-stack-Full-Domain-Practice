// This debouncing implementation is correct. It:
// 1. Takes a function and delay as parameters with default values
// 2. Creates a closure to maintain the timeout variable
// 3. Clears any existing timeout before setting a new one
// 4. Uses apply() to preserve the context and pass arguments correctly
// 5. Returns a debounced version of the original function


function debouncing(fn = () => { }, delay = 1000) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    };
};





function throttling(fn = () => { }, delay = 1000) {
    let shouldWait = false;

    return function (...args) {
        if (shouldWait) return;

        fn.apply(this, args);
        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, delay);
    }
}


// Yes, this is a good implementation of BFS (Breadth-First Search) for a binary tree because:
// 1. It uses a queue data structure (array with push/shift) which is essential for BFS
// 2. It processes nodes level by level by adding children to queue
// 3. It handles both left and right children properly
// 4. It stores values in result array in BFS order
// However, we should return the result array at the end
function bfs(){
    let queue = [this.head];
    const result = []
    while (queue.length) {
        let curr = queue.shift();
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right);
        result.push(curr.val);
    }
    return result; // Added return statement
}

function dfs() {
    let curr = this.head;
    let result = [];
    function dfsHelper(node) {
        if (!node) return;
        dfsHelper(node.left);
        result.push(node.val);
        dfsHelper(node.right)
    }
    dfsHelper(curr)
    return result
}
