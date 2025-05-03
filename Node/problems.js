const fs = require('fs');
const { dirname } = require('path');

// Get current date and time
const now = new Date();
const formatted = now.toISOString()
; // e.g., 2025-04-29T10:30:00.000Z

// Write to file
fs.writeFile('../current_date.txt', `Current Date and Time: ${formatted}\n`, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Date and time written to current_date.txt');
});

console.log(__dirname)

// fs.unlink('current_date.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err);
//     return;
//   }
//   console.log('File deleted successfully');
// });

fs.readFile('current_date.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Date and time read from file:', data);
});


fs.unlink('../current_date.txt', (err) => {
  if(err){
    console.log(err);
    return
  }
  console.log('Filed Deleted Succesfully ')
})