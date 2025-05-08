async function foo() {
  console.log('Start foo');
  const result = await new Promise(resolve => setTimeout(resolve('okay') , 0));
  console.log('End foo');
  console.log(result);
}

foo();
console.log('After foo');