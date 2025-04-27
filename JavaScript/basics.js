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
