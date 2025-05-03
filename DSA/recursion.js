// what is recursion ?
// A function that calls itself

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(3);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3);

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(4);

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

power(2, 4);

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

factorial(4);

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]);

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

recursiveRange(6);

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(4);
