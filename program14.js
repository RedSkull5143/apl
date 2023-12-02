// The createReadStream function is used to create a readable stream from the file.
// The 'data' event is emitted whenever data is available to be read from the stream. The event handler logs the received chunk to the console.
// The 'end' event is emitted when the entire stream has been read. The event handler logs a message indicating the end of the stream.
// The 'error' event is emitted if an error occurs during the reading process. The event handler logs the error message to the console.

const fs = require('fs');

// Replace 'input.txt' with the path to your input file
const inputFilePath = 'program14.txt';

// Create a readable stream
const readableStream = fs.createReadStream(inputFilePath, 'utf-8');

// Event handler for 'data' event
readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// Event handler for 'end' event
readableStream.on('end', () => {
  console.log('End of stream reached');
});

// Event handler for 'error' event
readableStream.on('error', (err) => {
  console.error('Error:', err.message);
});

