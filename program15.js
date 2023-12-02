// The createWriteStream function is used to create a writable stream to the specified file.
// The write method is used to write data to the stream. The callback function is invoked once the data has been written.
// The 'finish' event is emitted when the stream has been completely written. The event handler logs a message indicating the completion of stream writing.
// The 'error' event is emitted if an error occurs during the writing process. The event handler logs the error message to the console.

const fs = require('fs');

// Replace 'output.txt' with the path to your output file
const outputFilePath = 'program15.txt';

// Create a writable stream
const writableStream = fs.createWriteStream(outputFilePath, { encoding: 'utf-8' });

// Data to be written to the stream
const dataToWrite = 'Hello, this is data to be written to the stream.';

// Write data to the stream
writableStream.write(dataToWrite, 'utf-8', () => {
  console.log('Data has been written to the stream.');

  // Close the stream after writing
  writableStream.end();
});

// Event handler for 'finish' event
writableStream.on('finish', () => {
  console.log('Stream writing is complete.');
});

// Event handler for 'error' event
writableStream.on('error', (err) => {
  console.error('Error:', err.message);
});
