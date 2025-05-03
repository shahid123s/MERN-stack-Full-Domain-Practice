// No, there are a few issues in this Graph implementation:
// 1. The condition in addEdges() is incorrect - it should check if vertices DON'T exist
// 2. No error handling for invalid inputs
// 3. No method to display/traverse the graph

class Graph {
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }
    
    addEdges(vertex1, vertex2){
        if(!this.adjList[vertex1] || !this.adjList[vertex2]) {
            console.log('Both vertices must exist first');
            return;
        }

        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);
    }


    // This BFS implementation has a few issues:
    // 1. Using 'for...in' with arrays is incorrect - it iterates over array indices, not values
    // 2. 'edg' will be the index, not the actual vertex value
    // Here's the corrected version:
    bfs(start) {
        let queue = [start];
        let visited = new Set();
        visited.add(start)
        let result = [];

        while(queue.length) {
            let node = queue.shift();
            result.push(node);

            for(let neighbor of this.adjList[node]){
                if(!visited.has(neighbor)){
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        return result;
    }


    dfs(start) {
        const visited = new Set();
        const result = [];

        function helper(vertex) {
            visited.add(vertex)
            result.push(vertex);
            for(let neighbor of this.adjList[vertex]){
                if(!visited.has(neighbor)){
                    helper(neighbor)
                }
            }
        }

        helper(start);
        return result;
    }

//     dfs(start) {
//     const visited = new Set();
//     const result = [];

//     const dfsHelper = (vertex) => {
//         visited.add(vertex);
//         result.push(vertex);

//         for(let neighbor of this.adjList[vertex]) {
//             if(!visited.has(neighbor)) {
//                 dfsHelper(neighbor);
//             }
//         }
//     }

//     dfsHelper(start);
//     return result;
// }    

    display() {
        for(let vertex in this.adjList) {
            console.log(vertex + " -> " + this.adjList[vertex].join(", "));
        }
    }
}










// 

