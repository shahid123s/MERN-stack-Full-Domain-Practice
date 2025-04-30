// What is Node.js?
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance applications.
// It uses an event-driven, non-blocking I/O model, making it lightweight and efficient. Node.js is commonly used for building web servers, APIs, and real-time applications.'

// // What is the event loop in Node.js?
// The event loop is a core feature of Node.js that allows it to perform non-blocking I/O operations. It enables Node.js to handle multiple requests concurrently without blocking the execution of other code.
// The event loop continuously checks the event queue for pending tasks and executes them in a single thread, allowing for efficient handling of asynchronous operations.


// Is Node.js single-threaded or multi-threaded?
// Node.js is single-threaded in its execution model, meaning it uses a single thread to handle requests and execute code.
// However, it can handle multiple concurrent connections using non-blocking I/O operations and the event loop.
// This allows Node.js to efficiently manage multiple requests without blocking the execution of other code.
// // Node.js can also utilize worker threads and child processes to perform CPU-intensive tasks in parallel, but the main event loop remains single-threaded.
// // // Example of single-threaded execution in Js Basics last part 

// What is Dependency and dev dependency? 
// Dependencies are libraries or packages that your application needs to run in production.
// Dev dependencies are libraries or packages that are only needed during development and testing.
// // Example of dependencies - Express, Mongoose, etc.
// // Example of dev dependencies - Jest, ESLint, etc.


// What are the core modules in Node.js?
// Core modules are built-in modules in Node.js that provide essential functionality for building applications.
// Some common core modules include:
// 1. fs: File system module for interacting with the file system.'
// 2. http: HTTP module for creating web servers and handling HTTP requests.
// 3. path: Module for working with file and directory paths.
// 4. os: Module for operating system-related utility methods and properties.
// 5. url: Module for URL parsing and formatting.
// 6. events: Module for working with event-driven programming.
// 7. stream: Module for working with streaming data.
// 8. util: Module for utility functions and inheritance.
// 9. crypto: Module for cryptographic operations.
// 10. buffer: Module for working with binary data.
// 11. child_process: Module for spawning child processes.
// 12. cluster: Module for creating child processes that share server ports.
// 13. dns: Module for DNS resolution.
// 14. net: Module for networking and TCP/IPC communication.
// 15. tls: Module for secure communication over TLS/SSL.
// 16. zlib: Module for compression and decompression of data.
// 17. readline: Module for reading data from a readable stream one line at a time.
// 18. vm: Module for compiling and running code within V8 virtual machine.
// 19. inspector: Module for debugging and profiling Node.js applications.
// 20. perf_hooks: Module for measuring performance of Node.js applications.
// 21. async_hooks: Module for tracking asynchronous resources.
// 22. trace_events: Module for tracing events in Node.js applications.
// 23. worker_threads: Module for creating threads in Node.js.
// 24. http2: Module for HTTP/2 support.
// 25. module: Module for working with modules in Node.js.
// 26. assert: Module for writing tests and assertions.
// 27. console: Module for console logging.
// 28. domain: Module for managing asynchronous context.
// 29. timers: Module for scheduling and executing code after a delay.
// 30. repl: Module for creating a Read-Eval-Print Loop.
// 31. process: Module for interacting with the current Node.js process.
// 32. querystring: Module for parsing and formatting URL query strings.
// 33. string_decoder: Module for decoding strings from Buffer objects.
// 34. tty: Module for working with terminal I/O.
// 35. v8: Module for interacting with the V8 JavaScript engine.
// 36. http_parser: Module for parsing HTTP requests and responses.
// 37. module: Module for working with modules in Node.js.
// 38. internalBinding: Module for accessing internal Node.js bindings.
// 39. internal/util: Module for internal utility functions.
// 40. internal/process: Module for accessing internal process-related functions.


// What is the difference between require and import?
// require is a built-in function in Node.js that is used to load modules.
// import is a statement used in ES6 modules to import modules from other files.
// The main difference is that require is synchronous and returns the module.exports object, while import is asynchronous and returns a Promise that resolves to the module's default export.
// // Example of require
const fs = require('fs');
// Example of import
import fs from 'fs';

// What is the difference between module.exports and exports?
// module.exports is the object that is returned as the result of a require call.
// exports is a shorthand for module.exports.
// If you assign a new value to exports, it will not affect module.exports.
// To export a single value, you should use module.exports.
// To export multiple values, you can use exports.
// // Example of module.exports
module.exports = {
  name: 'John',
  age: 30,
};
// // Example of exports
exports.name = 'John';
exports.age = 30;
// // Example of using both
module.exports = {
  name: 'John',
  age: 30,
};
exports.city = 'New York';
// // Example of using both

const person = require('./person');
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// What is the difference between ESM and CommonJS?
// ESM (ECMAScript Modules) is the standard module system in JavaScript that uses import and export statements.
// CommonJS is the module system used in Node.js that uses require and module.exports.
// The main difference is that ESM is asynchronous and supports static analysis, while CommonJS is synchronous and does not support static analysis.
// ESM is designed for the browser and supports tree-shaking, while CommonJS is designed for Node.js and does not support tree-shaking.
// // Example of ESM
import fs from 'fs';
// // Example of CommonJS
const fs = require('fs');
// // Example of ESM with dynamic import
(async () => {
  const fs = await import('fs');
  console.log(fs);
})();
// // Example of CommonJS with dynamic import
(async () => {
  const fs = await import('./fs.js');
  console.log(fs);
})();
// // Example of ESM with named exports
export const name = 'John';
export const age = 30;
// // Example of CommonJS with named exports
exports.name = 'John';
exports.age = 30;
// // Example of ESM with default export
export default function greet() {
  console.log('Hello, World!');
}
// // Example of CommonJS with default export
module.exports = function greet() {
  console.log('Hello, World!');
};

// // Example of ESM with named import
import { name, age } from './person.js';
console.log(name); // Output: John
console.log(age); // Output: 30
// // Example of CommonJS with named import
const { name, age } = require('./person.js');
console.log(name); // Output: John
console.log(age); // Output: 30
// // Example of ESM with default import
import greet from './greet.js';
greet(); // Output: Hello, World!
// // Example of CommonJS with default import
const greet = require('./greet.js');


greet(); // Output: Hello, World!
// // Example of ESM with dynamic import
(async () => {
  const { default: greet } = await import('./greet.js');
  greet(); // Output: Hello, World!
})();

// // Example of CommonJS with dynamic import
(async () => {
  const { default: greet } = await import('./greet.js');
  greet(); // Output: Hello, World!
})();
// // Example of ESM with named export


// What is HTTP Method?
// HTTP methods are used to specify the action to be performed on a resource.
// The most common HTTP methods are:
// 1. GET: Retrieve data from the server.
// 2. POST: Send data to the server.
// 3. PUT: Update data on the server.
// 4. DELETE: Delete data from the server.
// 5. PATCH: Partially update data on the server.
// 6. HEAD: Retrieve metadata about a resource.
// 7. OPTIONS: Retrieve supported HTTP methods for a resource.
// 8. TRACE: Retrieve diagnostic information about a resource.
// 9. CONNECT: Establish a tunnel to the server.
// 10. COPY: Copy a resource from one location to another.
// 11. LINK: Create a link between two resources.
// 12. UNLINK: Remove a link between two resources.
// 13. PURGE: Remove a resource from the cache.
// 14. LOCK: Lock a resource for exclusive access.
// 15. UNLOCK: Unlock a resource.
// 16. PROPFIND: Retrieve properties of a resource.
// 17. VIEW: Retrieve a resource for viewing.
// 18. PROPPATCH: Update properties of a resource.
// 19. MKCOL: Create a new collection.
// 20. MOVE: Move a resource from one location to another.


// What are the parts of  HTTP request?
// An HTTP request consists of the following parts:
// 1. Request Line: Contains the HTTP method, URL, and HTTP version.
// 2. Headers: Key-value pairs that provide additional information about the request.
// 3. Body: Contains the data sent with the request (optional).
// 4. Query Parameters: Key-value pairs appended to the URL (optional).
// 5. Path Parameters: Key-value pairs included in the URL path (optional).
// 6. Fragment: A fragment identifier that points to a specific section of the resource (optional).
// 7. Cookies: Data sent by the server to the client and stored on the client-side (optional).
// 8. Authorization: Information used to authenticate the client (optional).
// 9. Content-Type: Indicates the media type of the resource (optional).
// 10. Content-Length: Indicates the size of the request body (optional).
// 11. Accept: Indicates the media types that are acceptable for the response (optional).
// 12. User-Agent: Information about the client software (optional).
// 13. Host: The domain name of the server (optional).
// 14. Referer: The URL of the resource that linked to the requested resource (optional).
// 15. Origin: The origin of the request (optional).
// 16. Cache-Control: Directives for caching mechanisms (optional).
// 17. Connection: Control options for the current connection (optional).
// 18. Upgrade: Requests the server to switch protocols (optional).
// 19. Expect: Indicates that the client expects a specific server behavior (optional).


// What are the parts of HTTP response?
// An HTTP response consists of the following parts:
// 1. Status Line: Contains the HTTP version, status code, and status message.
// 2. Headers: Key-value pairs that provide additional information about the response.
// 3. Body: Contains the data sent with the response (optional).
// 4. Cookies: Data sent by the server to the client and stored on the client-side (optional).
// 5. Content-Type: Indicates the media type of the resource (optional).
// 6. Content-Length: Indicates the size of the response body (optional).
// 7. Location: Indicates the URL to redirect the client to (optional).
// 8. Cache-Control: Directives for caching mechanisms (optional).
// 9. Expires: Indicates the date and time after which the response is considered stale (optional).
// 10. ETag: A unique identifier for the resource (optional).
// 11. Last-Modified: Indicates the date and time the resource was last modified (optional).
// 12. Server: Information about the server software (optional).
// 13. Content-Encoding: Indicates the encoding used on the response body (optional).
// 14. Content-Language: Indicates the language of the response body (optional).
// 15. Content-Disposition: Indicates how the content should be displayed (optional).
// 16. Content-Range: Indicates the range of bytes returned in the response (optional). 
// 17. Accept-Ranges: Indicates the range of bytes accepted by the server (optional).
// 18. Connection: Control options for the current connection (optional).
// 19. Upgrade: Requests the client to switch protocols (optional).
// 20. Vary: Indicates the request headers that were used to select the response (optional).


// What is the difference between res.send and res.json and res.write ?
// res.send is used to send a response to the client.
// res.json is used to send a JSON response to the client.
// res.write is used to send a chunk of data to the client.

  
// What is middleware in Node.js? And what are the types of middleware? And What is the difference between middleware and route handler? and application middleware and router middleware? 

// Middleware is a function that has access to the request, response, and next middleware function in the application.
// It can perform operations on the request and response objects, modify them, or end the request-response cycle.
// Middleware can be used for logging, authentication, error handling, etc.

// Difference between middleware and route handler:
// - Middleware runs before route handlers and can modify request/response
// - Route handlers are endpoint-specific and typically send the final response
// - Middleware uses next() to pass control, route handlers typically end the cycle

// Difference between application and router middleware:
// - Application middleware runs on every request to the app
// - Router middleware only runs on requests to specific routes

// Types of middleware:
// 1. Application Middleware: Applied to entire application using app.use()
// 2. Router Middleware: Applied to specific router using router.use() 
// 3. Error Handling Middleware: Has 4 parameters (err, req, res, next) to handle errors
// 4. Built-in Middleware: Included in Node.js/Express (e.g. express.json())
// 5. Third-party Middleware: External packages (e.g. cors, helmet)
// 6. Custom Middleware: Created by developer for specific needs

// Example of custom middleware:
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
}

// Example of error handling middleware:
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}



// What is CORS and what is the process and how it going ?

// CORS (Cross-Origin Resource Sharing) is a security mechanism that allows/restricts web apps running at one origin to request resources from a different origin.

// CORS Process:
// 1. Browser sends preflight request (OPTIONS) to check if CORS is allowed
// 2. Server responds with Access-Control-Allow-* headers
// 3. If allowed, browser sends actual request
// 4. Server responds with requested resource + CORS headers

// Example of CORS middleware in Express:
const cors = require('cors');

// Allow all origins
app.use(cors());

// Allow specific origin
app.use(cors({
  origin: 'http://example.com'
}));

// Allow multiple origins
app.use(cors({
  origin: ['http://example1.com', 'http://example2.com']
}));

// Custom CORS configuration
app.use(cors({
  origin: true, // reflect request origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // cache preflight for 24 hours
}));

// Manual CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Handle preflight requests
app.options('*', cors()); // enable preflight for all routes 
 

// Yes, 5 is a numeric literal - it is a fixed value that appears directly in the code
console.log(5)
