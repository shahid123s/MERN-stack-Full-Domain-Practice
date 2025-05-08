// // function parent () {
// //     let count = 0;

// //     return function child (fn ){
// //         count++;
// //         console.log(count);
// //         fn(newFn)
// //     }
// // }

// // let child = parent();

// // child()
// // child()



// // function hoc (fn){


// //     fn(fn)


// // }


// // hoc(child);




// // // // callback hell 
// // // function second(fn){

// // // }

// // // function third(fn) {

// // // }

// // // function first (second) {
// // //     let result = second(third(forth))
// // // }


// // // callback to promisre 

// // function getUser(userId, callback) {
// //     setTimeout(() => {
// //       console.log('Fetched user');
// //       callback(null, { id: userId, name: 'Alice' });
// //     }, 1000);
// //   }

// //   function getOrders(user, callback) {
// //     setTimeout(() => {
// //       console.log('Fetched orders for', user.name);
// //       callback(null, ['order1', 'order2']);
// //     }, 1000);
// //   }

// //   function getOrderDetails(orderId, callback) {
// //     setTimeout(() => {
// //       console.log('Fetched details for', orderId);
// //       callback(null, { id: orderId, item: 'Book' });
// //     }, 1000);
// //   }

// //   // Callback hell
// //   getUser(1, (err, user) => {
// //     if (err) return console.error(err);
// //     getOrders(user, (err, orders) => {
// //       if (err) return console.error(err);
// //       getOrderDetails(orders[0], (err, details) => {
// //         if (err) return console.error(err);
// //         console.log('Order details:', details);
// //       });
// //     });
// //   });



// //   const promise1 = new Promise ((res, rej) => {
// //     res(getUser())
// //     rej('Error')
// //   })






// // const promise = new Promise(getUser).then(getOrders).then(getOrderDetails).catch();


// // // diff weakset and weakMap 


// // let obj = {};
// // let obj2 = {};

// // let weekmap = new WeakMap();
// // weekmap.set(obj, 'prvate ');


// // let weakset = new WeakSet();
// // weakset.add(obj2);



// ///1,[4,5],5,3,[4,5],[42,5,6]]
// // output should be [[4,5]]


// function findduplicates (arr) {
//     let queue = []
//     let result = []
//     for(let i = 0 ; i < arr.length ; i++){
//         if(Array.isArray(arr[i])) helper(arr[i]);
//     }



//     function helper(arr) {
//         for(let i = 0 ; i < arr.length ; i++){
//             console.log())
//             if(Array.isArray(arr[i])){
//                 queue.push(arr[i]);
//                 helper(arr[i])
//                 for(let j  = 0; j < queue.length; j++){
//                     if(arr[i] == queue[j]){
//                         result.push(arr[i]);
//                         queue.splice(j, 1);
//                         j--;
//                     }
//                 }
//             }
//     }
// }
//     console.log(result)
//     return result
// }



// findduplicates([1, 4, [5, 3] , [4,5],5,3,[4,5], [5, 3] , [42,[2, 3], 5,[2, 3],6], 4,4 ])

// // dont convert 



// find the max 

/*
let arr = [3,5,3,7,4,6,7,4,8,9,8]
let k =3 
output should be [8,9,8]
find the triple whose sum is maximum
 */



function maxSum(arr, k) {
    let max = -Infinity;
    let result = [];
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(stack, 'ineach loop') 
        if (stack.length < k) {
            stack.push(arr[i])
        } else {
            let sumval = sum(stack);
            if (sumval > max) {
                max = sum
                console.log(stack, 'in sum check')
                result.push([...stack])
            }
            stack= [];
        }
    }

    function sum(arr) {
        // console.log(arr, 'arra')
        console.log(arr.reduce((acc, curr) => acc += curr, 0))
    }

    // console.log(result, 'result')
    console.log(max);
}


maxSum([3,5,3,7,4,6,7,4,8,9,8], 3)



let arr =  [9, 8, 7, 6, 5, 4, 3,2, 1];


// <Chat message={} setMessage ={setterMehtod}>;
// 




export default reviewQuestion

// 








// callback hell 

