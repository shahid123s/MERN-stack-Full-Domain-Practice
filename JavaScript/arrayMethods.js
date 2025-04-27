// What are the common array mehods in JavaScript?

// // 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
// // 2. pop() - Removes the last element from an array and returns that element.
// // 3. shift() - Removes the first element from an array and returns that element.
// // 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// // 5. concat() - Merges two or more arrays and returns a new array.
// // 6. join() - Joins all elements of an array into a string.
// // 7. slice() - Returns a shallow copy of a portion of an array into a new array object.
// // 8. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// // 9. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// // 10. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// // 11. includes() - Determines whether an array includes a certain value among its entries.
// // 12. find() - Returns the value of the first element in the provided array that satisfies the provided testing function.
// // 13. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
// // 14. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// // 15. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
// // 16. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// // 17. reduceRight() - Executes a reducer function (that you provide) on each element of the array (from right to left), resulting in a single output value.
// // 18. forEach() - Executes a provided function once for each array element.
// // 19. every() - Tests whether all elements in the array pass the test implemented by the provided function.
// // 20. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
// // 21. sort() - Sorts the elements of an array in place and returns the sorted array.
// // 22. reverse() - Reverses the elements of an array in place.
// // 23. fill() - Fills all the elements of an array from a start index to an end index with a static value.
// // 24. copyWithin() - Shallow copies part of an array to another location in the same array and returns it without modifying its size.
// // 25. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// // 26. flatMap() - First maps each element using a mapping function, then flattens the result into a new array.
// // 27. keys() - Returns a new Array Iterator object that contains the keys for each index in the array.
// // 28. values() - Returns a new Array Iterator object that contains the values for each index in the array.
// // 29. entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// // 30. from() - Creates a new, shallow-copied Array instance from an array-like or iterable object.
// // 31. of() - Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// // 32. toString() - Returns a string representing the specified array and its elements.
// // 33. toLocaleString() - Returns a localized string representing the array and its elements.


// These are Array Static methods (used on the Array constructor itself):

// // 34. Array.isArray() - Returns true if the argument is an array, false otherwise.
// // 35. Array.of() - Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// // 36. Array.prototype.

// Example of push
function pushExample() {
    const array = [1, 2, 3];
    array.push(4);
    console.log(array);
}

// pushExample();
// Output:
// [1, 2, 3, 4]

// Example of pop
function popExample() {
    const array = [1, 2, 3];
    array.pop();
    console.log(array);
}
// popExample();
// Output:
// [1, 2]

// Example of shift
function shiftExample() {
    const array = [1, 2, 3];
    array.shift();
    console.log(array);
}
// shiftExample();
// Output:
// [2, 3]

// Example of unshift
function unshiftExample() {
    const array = [1, 2, 3];
    array.unshift(0);
    console.log(array);
}
// unshiftExample();
// Output:
// [0, 1, 2, 3]

// Example of concat
function concatExample() {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = array1.concat(array2);
    console.log(array3);
}
// concatExample();
// Output:
// [1, 2, 3, 4, 5, 6]

// Example of join
function joinExample() {
    const array = [1, 2, 3];
    const string = array.join('-');
    console.log(string);
}
// joinExample();
// Output:
// 1-2-3

// Example of slice
function sliceExample() {
    const array = [1, 2, 3, 4, 5];
    const slicedArray = array.slice(1, 3);
    console.log(slicedArray);
}
// sliceExample();
// Output:
// [2, 3]
// Example of splice

function spliceExample() {
    const array = [1, 2, 3, 4, 5];
    const removedElements = array.splice(1, 2);
    console.log(array);
    console.log(removedElements);
}

// spliceExample();
// Output:
// [1, 4, 5]
// [1, 4, 5]

// Example of indexOf
function indexOfExample() {
    const array = [1, 2, 3, 4, 5];
    const index = array.indexOf(3);
    console.log(index);
}
// indexOfExample();
// Output:
// 2

// Example of lastIndexOf
function lastIndexOfExample() {
    const array = [1, 2, 3, 4, 5, 3];
    const index = array.lastIndexOf(3);
    console.log(index);
}
// lastIndexOfExample();
// Output:
// 5

// Example of includes
function includesExample() {
    const array = [1, 2, 3, 4, 5];
    const includes = array.includes(3);
    console.log(includes);
}
// includesExample();
// Output:
// true

// Example of find
function findExample() {
    const array = [1, 2, 3, 4, 5];
    const foundElement = array.find(element => element > 3);
    console.log(foundElement);
}
// findExample();
// findExample();
// Output:
// 4

// Example of findIndex
function findIndexExample() {
    const array = [1, 2, 3, 4, 5];
    const index = array.findIndex(element => element > 3);
    console.log(index);
}
// findIndexExample();
// Output:
// 3

// Example of filter
function filterExample() {
    const array = [1, 2, 3, 4, 5];
    const filteredArray = array.filter(element => element > 3);
    console.log(filteredArray);
}
// filterExample();
// Output:
// [4, 5]

// Example of map
function mapExample() {
    const array = [1, 2, 3, 4, 5];
    const mappedArray = array.map(element => element * 2);
    console.log(mappedArray);
}
// mapExample();
// Output:
// [2, 4, 6, 8, 10]

// Example of reduce
function reduceExample() {
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}
// reduceExample();
// Output:
// 15

// Example of reduceRight
function reduceRightExample() {
    const array = [1, 2, 3, 4, 5];
    const result = array.reduceRight((acc, curr) => acc - curr);
    console.log(result);
}
// reduceRightExample();
// Output:
// -5

// Example of forEach
function forEachExample() {
    const array = [1, 2, 3, 4, 5];
    array.forEach(element => console.log(element * 2));
}
// forEachExample();
// Output:
// 2
// 4
// 6
// 8
// 10

// Example of every
function everyExample() {
    const array = [1, 2, 3, 4, 5];
    const allGreaterThanZero = array.every(element => element > 0);
    console.log(allGreaterThanZero);
}
// everyExample();
// Output:
// true

// Example of some
function someExample() {
    const array = [1, 2, 3, 4, 5];
    const hasElementGreaterThanFour = array.some(element => element > 4);
    console.log(hasElementGreaterThanFour);
}
// someExample();
// Output:
// true

// Example of sort
function sortExample() {
    const array = [5, 2, 8, 1, 9];
    array.sort((a, b) => a - b);
    console.log(array);
}
// sortExample();
// Output:
// [1, 2, 5, 8, 9]

// Example of reverse
function reverseExample() {
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}
// reverseExample();
// Output:
// [5, 4, 3, 2, 1]

// Example of fill
function fillExample() {
    const array = [1, 2, 3, 4, 5];
    array.fill(0, 1, 4);
    console.log(array);
}
// fillExample();
// Output:
// [1, 0, 0, 0, 5]

// Example of copyWithin
function copyWithinExample() {
    const array = [1, 2, 3, 4, 5];
    array.copyWithin(0, 3);
    console.log(array);
}
// copyWithinExample();
// Output:
// [4, 5, 3, 4, 5]

// Example of flat
function flatExample() {
    const array = [1, [2, 3], [4, [5]]];
    const flattenedArray = array.flat(2);
    console.log(flattenedArray);
}
// flatExample();
// Output:
// [1, 2, 3, 4, 5]

// Example of flatMap
function flatMapExample() {
    const array = [1, 2, 3, 4];
    const result = array.flatMap(x => [x * 2]);
    console.log(result);
}
// flatMapExample();
// Output:
// [2, 4, 6, 8]

// Example of Array.isArray
function isArrayExample() {
    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray('123'));
}
// isArrayExample();
// Output:
// true
// false

// Example of Array.from
function fromExample() {
    const arrayFromString = Array.from('hello');
    console.log(arrayFromString);
}
// fromExample();
// Output:
// ['h', 'e', 'l', 'l', 'o']

// Example of Array.of
function ofExample() {
    const array = Array.of(1, 2, 3);
    console.log(array);
}
// ofExample();
// Output:
// [1, 2, 3]


function keysExample() {
    const array = ['a', 'b', 'c'];
    const iterator = array.keys();
    for (let key of iterator) {
        console.log(key);
    }
}
// keysExample();
// Output:
// 0
// 1
// 2

function valuesExample() {
    const array = ['a', 'b', 'c'];
    const iterator = array.values();
    for (let value of iterator) {
        console.log(value);
    }
}
// valuesExample();
// Output:
// a
// b
// c
function entriesExample() {
    const array = ['a', 'b', 'c'];
    const iterator = array.entries();
    for (let [index, value] of iterator) {
        console.log(index, value);
    }
}
// entriesExample();
// Output:
// 0 'a'
// 1 'b'
// 2 'c'