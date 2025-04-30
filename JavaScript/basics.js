// What is asynchronus and synchronous code?
// Synchronous code is executed line by line, in order.
// Asynchronous code is executed in the background, allowing the program to continue running while waiting for a response.
// Example of synchronous code

function synchronousExample() {
    console.log("Start");
    console.log("Middle");
    console.log("End");
}

// Example of asynchronous code

function asynchronousExample() {
    console.log("Start");
    setTimeout(() => {
        console.log("Middle");
    }, 2000);
    console.log("End");
}


// synchronousExample();
// Output:
// Start
// Middle
// End

// asynchronousExample();
// Output:
// Start
// End
// Middle

// What is a callback function?
// A callback function is a function that is passed as an argument to another function, and is executed after the completion of some asynchronous operation.
// Example of a callback function

function callbackExample(callback) {
    setTimeout(() => {
        callback("Hello World");
    }, 2000);
}

// callbackExample((message) => {
//     console.log(message);
// })

// Output:
// Hello World

// What is a promise?
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Example of a promise

function promiseExample() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise is resolved");
            resolve("Hello World");
        }, 2000);
    });
}

// promiseExample().then((message) => {
//     console.log(message);
// }   )
// Output:  
// Hello World


function PromiseExample () {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            rej('Hello World Promise is rejected'); 
        })
    })    
}

// PromiseExample().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error, 'Rejection of Promise')
// })



//  What is async/await?
// Async/await is a syntax for working with promises that allows you to write asynchronous code in a more synchronous manner.
// Example of async/await

async function asyncAwaitExample() {
    const message = await promiseExample();
    console.log(message);
}   

asyncAwaitExample();
// Output:
// Hello World

// What is the difference between a function expression and a function declaration?
// A function expression is a function that is assigned to a variable, while a function declaration is a function that is declared with the function keyword.

// Example of a function expression

const functionExpression = function () {
    console.log("Function Expression");
}


// Example of a function declaration    
function functionDeclaration() {
    console.log("Function Declaration");
}


// what is the difference between var, let and const?
// var is function scoped, let and const are block scoped.
// var can be redeclared and updated, let can be updated but not redeclared, const can neither be updated nor redeclared.

// Example of var
function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
// varExample();
// Output:
// 20
// 20

// Example of let
function letExample() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
// letExample();
// Output:
// 20
// 10

// Example of const
function constExample() {
    const x = 10;
    if (true) {
        const x = 20;
        console.log(x);
    }
    console.log(x);
}
// constExample();
// Output:
// 20 
// 10

// What is hoisting?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Example of hoisting

function hoistingExample() {
    console.log(x);
    var x = 10;
    console.log(x);
}
// hoistingExample();
// Output:
// undefined
// 10

// What are the advantages and disadvantages of using hoisting?
// // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// // Advantages:
// // 1. Allows you to use variables and functions before they are declared.
// // 2. Can help avoid errors in certain situations.
// // 3. Makes code easier to read and understand.
// // 4. Can improve performance in some cases.
// // 5. Can help with code organization and structure.
// // 6. Can help with variable scoping and closures.
// // 7. Can help with code reusability and modularity.
// // 8. Can help with code optimization and performance.
// // 9. Can help with code maintainability and readability.
// // Disadvantages:
// // 1. Can lead to confusion and bugs if not understood properly.
// // 2. Makes code less readable and maintainable.
// // 3. Can cause unexpected behavior if not used carefully.
// // 4. Can lead to performance issues in large codebases.
// // 5. Can make debugging more difficult.
// // 6. Can lead to variable shadowing and scope issues.
// // 7. Can lead to variable hoisting issues.
// // 8. Can lead to function hoisting issues.
// // 9. Can lead to performance issues in large codebases.


// what is TDZ (Temporal Dead Zone) ? 
// TDZ is a behavior in JavaScript where variables declared with let and const cannot be accessed before they are declared.

// Example of TDZ
function tdzExample() {
    console.log(x);
    let x = 10;
    console.log(x);
}
// tdzExample();
// Output:
// ReferenceError: Cannot access 'x' before initialization

// What is the difference between null and undefined?
// null is an intentional absence of any object value, while undefined is a variable that has been declared but not assigned a value.

// What is the difference between == and ===?
// == is a loose equality operator that compares values after performing type coercion.
// === is a strict equality operator that compares values without performing type coercion.

// Example of ==

console.log(1 == '1');
// Output:
// true

// Example of ===

console.log(1 === '1');
// Output:
// false

// What is the difference between let and var?
// let is block scoped, var is function scoped.

// Example of let
function letExample() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
// letExample();
// Output:
// 20
// 10


// Example of var
function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
// varExample();
// Output: 
// 20
// 20


// What is the difference between a shallow copy and a deep copy?
// A shallow copy creates a new object that is a copy of the original object, but does not create copies of nested objects.--- "passing by reference".
// A deep copy creates a new object that is a copy of the original object, including all nested objects.--- "passing by value".


// Example of shallow copy
const originalObject = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
};
const shallowCopy = { ...originalObject };
shallowCopy.name = "Jane";
shallowCopy.address.city = "Los Angeles";
console.log(originalObject);
// Output:
// {
//     name: "John",    
//     age: 30,
//     address: {
//         city: "Los Angeles",
//         state: "NY"
//     }
// }

// Example of deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.name = "Jane";
deepCopy.address.city = "Los Angeles";
console.log(originalObject);
// Output:
// {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         state: "NY"
//     }
// }

// What is the difference between a closure and a scope?
// A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned.
// A scope is a region of code where variables are accessible.

// Example of closure
function closureExample() {
    let x = 10;
    function innerFunction() {
        console.log(x);
    }
    return innerFunction;
}

const closure = closureExample();
closure();
// Output:
// 10

// Example of scope
function scopeExample() {
    let x = 10;
    function innerFunction() {
        console.log(x);
    }
    innerFunction();
}
// scopeExample();
// Output:
// 10




// What is single thread and multi thread?
// Single thread means that only one task can be executed at a time.
// Multi thread means that multiple tasks can be executed at the same time.

// Example of single thread
function singleThreadExample() {
    console.log("Start");
    console.log("Middle");
    console.log("End");
}
// singleThreadExample();
// Output:
// Start
// Middle
// End

// Example of multi thread
function multiThreadExample() {
    console.log("Start");
    setTimeout(() => {
        console.log("Middle");
    }, 2000);
    console.log("End");
}
// multiThreadExample();
// Output:]
// Start
// End
// Middle

// Is JavaScript single threaded or multi threaded?
// JavaScript is single threaded, meaning it can only execute one task at a time.
// However, it can handle asynchronous operations using callbacks, promises, and async/await.
// This allows JavaScript to perform non-blocking I/O operations, making it efficient for handling multiple requests concurrently.
// It also allows JavaScript to handle events and timers, which can be used to execute code at specific times or intervals.

