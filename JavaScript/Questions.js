// //  event bubbling 
// //  event capturing
// //  event delegation

// // What is event delegation ? 
// // Event delegation is a technique where instead of attaching event handlers to individual elements,
// // we attach a single handler to a parent element that handles events on its children through event bubbling
// // Benefits:
// // 1. Better memory usage since fewer event handlers are needed
// // 2. No need to attach/detach handlers when elements are added/removed
// // 3. Works for dynamically added elements

// // Example of event delegation
// document.querySelector(".grandparent").addEventListener("click", (e) => {
//   // e.target is the actual element clicked
//   if(e.target.matches(".child")) {
//     console.log("Child element clicked");
//   } else if(e.target.matches(".parent")) {
//     console.log("Parent element clicked"); 
//   } else if(e.target.matches(".grandparent")) {
//     console.log("Grandparent element clicked");
//   }
// });


// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // event bubbling
// // child.addEventListener("click", () => {
// //   console.log("you clicked on child");
// // });

// // parent.addEventListener("click", () => {
// //   console.log("you clicked on parent");
// // });

// // grandParent.addEventListener("click", () => {
// //   console.log("you clicked on grandparent");
// // });

// // event capturing
// // child.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! child");
// //   },
// //   true
// // );

// // parent.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! parent");
// //   },
// //   true
// // );

// // grandParent.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! grandparent");
// //   },
// //   true
// // );

// // event delegation
// grandParent.addEventListener("click", (e) => {
//   console.log(e.target);
// });


// converting nested array into flatten array without using inbuild function

// This implementation has a few issues:
// 1. map() is being used but the return value is not captured
// 2. The function doesn't actually flatten the array, it just logs values
// 3. No array is being returned with the flattened results

function flattenNestedArray(arr) {
    let result = [];
    arr.forEach((x) => {
        if(Array.isArray(x)) {
            result = [...result, ...flattenNestedArray(x)]
        } else {
            result.push(x);
        }
    });
    return result;
}


console.log(flattenNestedArray([1, [2], [[3], 4], 5]))



function flattenNestedPjbect (obj) {
     let result = {};
     for (let i in obj) {
        if (typeof obj[i] === 'object') {
            result = {...result, ...flattenNestedPjbect(obj[i])};
        } else {
            result[i] = obj[i];
        }
     }
     return result;
}
console.log(flattenNestedPjbect({a: 1, b: {c: 2, d: {e: 3}}}))


