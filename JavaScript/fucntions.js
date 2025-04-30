// What are the Advanced Functions in JavaScript?
// // 1. Higher-order functions: Functions that take other functions as arguments or return them as results.
// // 2. Closures: Functions that have access to the outer function's scope even after the outer function has returned.
// // 3. IIFE (Immediately Invoked Function Expression): A function that runs as soon as it is defined.
// // 4. Recursion: A function that calls itself.
// // 5. Callbacks: Functions that are passed as arguments to other functions and are executed after a certain event.
// // 6. Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
// // 7. Async/Await: A syntax for working with promises that allows you to write asynchronous code in a synchronous manner.
// // 8. Generators: Functions that can be paused and resumed, allowing you to create iterators.
// // 9. Decorators: Functions that modify the behavior of other functions or classes.
// // 10. Currying: A technique of evaluating a function with multiple arguments into a sequence of functions with a single argument.
// // 11. Partial application: A technique of fixing a number of arguments to a function, producing another function of smaller arity.
// // 12. Memoization: An optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.
// // 13. Function composition: The process of combining two or more functions to produce a new function.
// // 14. Function binding: A technique to set the value of 'this' in a function.
// // 15. Function throttling: A technique to limit the number of times a function can be called in a given time period.
// // 16. Function debouncing: A technique to ensure that a function is only called once after a certain period of inactivity.
// // 17. Function chaining: A technique to call multiple methods on an object in a single statement.
// // 18. Function overloading: A technique to define multiple functions with the same name but different parameters.
// // 19. Function underloading: A technique to define a function that can accept different types of arguments.
// // 20. Function hoisting: A JavaScript mechanism where function declarations are moved to the top of their containing scope during the compile phase.
// // 21. Function scoping: The visibility of variables within a function.
// // 22. Function context: The value of 'this' within a function.
// // 23. Function prototype: An object that allows you to add properties and methods to a function.
// // 24. Function constructor: A way to create a new function object.
// // 25. Function expression: A way to define a function as part of an expression.
// // 26. Function declaration: A way to define a function with a name.
// // 27. Function statement: A way to define a function with a name.
// // 28. Function literal: A way to define a function without a name.
// // 29. Function object: An object that represents a function.
// // 30. Function prototype chain: A mechanism that allows you to inherit properties and methods from other objects.
// // 31. Function prototype inheritance: A mechanism that allows you to inherit properties and methods from other objects.
// // 32. Function prototype method: A method that is defined on the function prototype.
// // 33. Function prototype property: A property that is defined on the function prototype.

// 1. Higher-order functions: Functions that take other functions as arguments or return them as results.
const higherOrder = (fn) => (x) => fn(x);
const add = x => x + 1;
const result = higherOrder(add)(5); // Returns 6

// 2. Closures: Functions that have access to the outer function's scope even after the outer function has returned.
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}
const counter = createCounter();
counter(); // Returns 1

// 3. IIFE (Immediately Invoked Function Expression): A function that runs as soon as it is defined.
(function() {
  console.log("I run immediately!");
})();

// 4. Recursion: A function that calls itself.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 5. Callbacks: Functions that are passed as arguments to other functions and are executed after a certain event.
function fetchData(callback) {
  setTimeout(() => {
    callback("Data");
  }, 1000);
}

// 6. Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

// 7. Async/Await: A syntax for working with promises that allows you to write asynchronous code in a synchronous manner.
async function getData() {
  const result = await fetch('api/data');
  return result.json();
}

// 8. Generators: Functions that can be paused and resumed.
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// 9. Decorators: Functions that modify the behavior of other functions or classes.
function log(target, name, descriptor) {
  return descriptor;
}

// 10. Currying: Breaking down a function with multiple arguments into sequence of functions.
const multiply = a => b => a * b;
multiply(2)(3); // Returns 6

// 11. Partial application: Fixing some arguments of a function.
const add3 = add.bind(null, 3);

// 12. Memoization: Caching function results.
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

// 13. Function composition: Combining multiple functions.
const compose = (f, g) => x => f(g(x));

// 14. Function binding: Setting 'this' value.
const boundFunction = someFunction.bind(thisArg);

// 15. Function throttling: Limiting function calls.
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// 16. Function debouncing: Delaying function execution.
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  }
}

// 17. Function chaining: Multiple method calls in sequence.
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  add(n) {
    this.value += n;
    return this;
  }
}

// 18. Function overloading: Multiple functions with same name.
function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
}
function greet(name) {
  return `Hello ${name}`;
}

// 19. Function underloading: Flexible argument handling.
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 20-33. Various function concepts demonstrated through prototype chain
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  return `Hello, ${this.name}!`;
};

// 34. Arrow functions: Concise function syntax with lexical this binding
const arrowFunc = () => console.log(this);

// 35. Generator functions with async/await
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}

// 36. Function factories: Functions that create other functions
function multiply(x) {
  return function(y) {
    return x * y;
  }
}




// What is the difference between call, apply, and bind?
// Call and apply are used to invoke a function with a specific this value and arguments provided individually.
// Bind is used to create a new function with a specific this value and arguments provided initially.

// Example of call
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet.call(null, 'John'); // Output: Hello, John!
// Example of apply
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet.apply(null, ['John']); // Output: Hello, John!
// Example of bind
function greet(name) {
  console.log(`Hello, ${name}!`);
}
const greetJohn = greet.bind(null, 'John');
greetJohn(); // Output: Hello, John!

