// what is promise ? 
// Promise is a object representation of eventual completion (or rejection) of an asynchronus operation, 

// Eg: 

let fetchData = new Promise((res, rej) => {
    setTimeout(() => {
        let success = false;
        
        if(success)res("Hello World");
        else rej("Error");
    }, 2000);

})

fetchData.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})
// Output:
// Hello World


// what is async/await?
// async/await is a syntax for working with promises that allows you to write asynchronous code in a more synchronous manner.
// Example of async/await

async function asyncAwaitExample() {
 try {
    const message = await fetchData;
    console.log(message);
 } catch (error) {
    console.error(error)
 }
}

asyncAwaitExample()