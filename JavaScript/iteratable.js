// What is the difference between a for loop and a forEach loop?
// A for loop is a traditional loop that iterates over a block of code a specified number of times.
// A forEach loop is a method that executes a provided function once for each array element.

// Example of for loop
function forLoopExample() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// forLoopExample();
// Output:
// 0
// 1
// 2
// 3
// 4

// Example of forEach loop
function forEachLoopExample() {
    const array = [1, 2, 3, 4, 5];
    array.forEach((element) => {
        console.log(element);
    });
}
// forEachLoopExample();
// Output:
// 1
// 2
// 3
// 4
// 5

// What is the difference between a while loop and a do...while loop?
// A while loop executes a block of code as long as the specified condition is true.
// A do...while loop executes a block of code once, and then repeats the loop as long as the specified condition is true.

// Example of while loop
function whileLoopExample() {
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}
// whileLoopExample();
// Output:
// 0
// 1
// 2
// 3
// 4

// Example of do...while loop
function doWhileLoopExample() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
}
// do
WhileLoopExample();
// Output:
// 0
// 1
// 2
// 3
// 4



// What is the difference between a map and a filter?
// A map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
// A filter is a method that creates a new array with all elements that pass the test implemented by the provided function.

// Example of map
function mapExample() {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.map((element) => element * 2);
    console.log(newArray);
}
// mapExample();
// Output:
// [2, 4, 6, 8, 10]

// Example of filter
function filterExample() {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.filter((element) => element % 2 === 0);
    console.log(newArray);
}
// filterExample();
// Output:
// [2, 4]

// What is the difference between a reduce and a reduceRight?
// A reduce is a method that applies a function against an accumulator and each element in the array to reduce it to a single value.
// A reduceRight is a method that applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.

// Example of reduce

function reduceExample() {
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sum);
}
// reduceExample();
// Output:
// 15

// Example of reduceRight
function reduceRightExample() {
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduceRight((accumulator, currentValue) => {
        console.log(accumulator, currentValue, 'On reduceRight');
        return accumulator + currentValue;
    });
    console.log(sum);
}
reduceRightExample();
// Output:
// 15

// What is the difference between a spread operator and a rest parameter?
// A spread operator is used to expand an array into individual elements.
// A rest parameter is used to collect all remaining arguments into an array.

// Example of spread operator
function spreadOperatorExample() {
    const array = [1, 2, 3, 4, 5];
    const newArray = [...array, 6, 7, 8];
    console.log(newArray);
}
// spreadOperatorExample();
// Output:
// [1, 2, 3, 4, 5, 6, 7, 8]

// Example of rest parameter
function restParameterExample(...args) {
    console.log(args);
}
// restParameterExample(1, 2, 3, 4, 5);
// Output:
// [1, 2, 3, 4, 5]

// What is the difference between a for...of loop and a for...in loop?
// A for...of loop is used to iterate over the values of an iterable object.
// A for...in loop is used to iterate over the properties of an object.

// Example of for...of loop
function forOfLoopExample() {
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
}
// forOfLoopExample();
// Output:
// 1
// 2
// 3
// 4
// 5

// Example of for...in loop
function forInLoopExample() {
    const object = { a: 1, b: 2, c: 3 };
    for (const key in object) {
        console.log(key, object[key]);
    }
}
// forInLoopExample();
forInLoopExample();
// Output:
// a 1
// b 2
// c 3

// What is the difference between a map and a forEach?
// A map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
// A forEach is a method that executes a provided function once for each array element.
function mapForEachExample() {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.map((element) => element * 2);
    console.log(newArray);
}
// mapForEachExample();
// Output:
// [2, 4, 6, 8, 10]
// Example of forEach
function forEachExample() {
    const array = [1, 2, 3, 4, 5];
    array.forEach((element) => {
        console.log(element);
    });
}
// forEachExample();
// Output:
// 1
// 2
// 3
// 4
// 5
// Example of forEach with index
function forEachWithIndexExample() {
    const array = [1, 2, 3, 4, 5];
    array.forEach((element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    });
}
// forEachWithIndexExample();
// Output:
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5

// What is the difference between a for...of loop and a forEach loop?
// A for...of loop is used to iterate over the values of an iterable object.
// A forEach loop is a method that executes a provided function once for each array element.

// Example of for...of loop
function forOfLoopExample() {
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
}
// forOfLoopExample();
// Output:
// 1
// 2
// 3
// 4
// 5

// Example of forEach loop
function forEachLoopExample() {
    const array = [1, 2, 3, 4, 5];
    array.forEach((element) => {
        console.log(element);
    });
}
// forEachLoopExample();
// Output:
// 1
// 2
// 3
// 4
// What is the difference between a for...in loop and a for...of loop?
// A for...in loop is used to iterate over the properties of an object.
// A for...of loop is used to iterate over the values of an iterable object.

// Example of for...in loop
function forInLoopExample() {
    const object = { a: 1, b: 2, c: 3 };
    for (const key in object) {
        console.log(key, object[key]);
    }
}
// forInLoopExample();
// Output:
// a 1
// b 2
// c 3

// Example of for...of loop
function forOfLoopExample() {
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
}
// forOfLoopExample();
// Output:
// 1
// 2
// 3
// 4
// 5

// Example of for...in loop with array
function forInLoopWithArrayExample() {
    const array = [1, 2, 3, 4, 5];
    for (const index in array) {
        console.log(index, array[index]);
    }
}
// forInLoopWithArrayExample();
// Output:
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5

// Example of for...of loop with array
function forOfLoopWithArrayExample() {
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
}
// forOfLoopWithArrayExample();
// Output:
// 1
// 2
// 3
// 4
// 5

