
const fs = require('fs');

// Create read and write streams
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

// Pipe the read stream to write stream
readStream.pipe(writeStream);

// Handle errors
readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writeStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

// Log when piping is finished
writeStream.on('finish', () => {
  console.log('Piping completed');
});

// Piping is a mechanism in Node.js to transfer data between streams
// It allows reading data from a source (read stream) and writing it to a destination (write stream) automatically
// The pipe() method handles the data flow, back-pressure and prevents memory overflow
// In this example, data is piped from input.txt to output.txt file



