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

