
# APL CODES
#########################################################################
1. program for printing hello on the browser using Node.js
const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello\n');
});
const PORT = 3000;
server.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}/`);
});
#########################################################################
2. program to read the file contents using Node.js file system
const fs = require('fs');
const filePath = 'path/to/your/file.txt'; // Replace with the path to your file
// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
console.error('Error reading the file:', err);
return;
}
console.log('File contents:');
console.log(data);
});
#########################################################################
3. program to write the contents to the file using Node.js file system
const fs = require('fs');
const filePath = 'path/to/your/file.txt'; // Replace with the path to your file
const contentToWrite = 'Hello, this is the content to be written to the file.\n';
// Write to file asynchronously
fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
if (err) {
console.error('Error writing to the file:', err);
return;
}
console.log('Content has been written to the file successfully.');
});
#########################################################################
4. program for demonstrating the concept of callback function in Node.js
// Function that simulates an asynchronous operation
function simulateAsyncOperation(data, callback) {
setTimeout(() => {
if (data) {
callback(null, `Operation successful. Received data: ${data}`);
} else {
callback('Error: No data provided', null);
}
}, 2000); // Simulating a 2-second asynchronous operation
}
// Callback function to handle the result of the asynchronous operation
function handleResult(error, result) {
if (error) {
console.error('Error:', error);
} else {
console.log('Result:', result);
}
}
// Simulating the usage of the asynchronous operation with a callback
const inputData = 'Sample Data';
simulateAsyncOperation(inputData, handleResult);
#########################################################################
5. program to read the contents from the directory and display on console using
Node.js
const fs = require('fs');
const directoryPath = 'path/to/your/directory'; // Replace with the path to your directory
// Read directory asynchronously
fs.readdir(directoryPath, (err, files) => {
if (err) {
console.error('Error reading the directory:', err);
return;
}
console.log('Files in the directory:');
files.forEach((file, index) => {
console.log(`${index + 1}. ${file}`);
});
});
#########################################################################
6. program for demonstrating any 5 functions of file systems
const fs = require('fs');
const path = require('path');
// Function 1: Reading the contents of a file synchronously
const filePath = 'path/to/your/file.txt';
try {
const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('File Content (Sync):', fileContent);
} catch (err) {
console.error('Error reading file synchronously:', err);
}
// Function 2: Creating a new directory
const newDirectoryPath = 'path/to/your/newDirectory';
try {
fs.mkdirSync(newDirectoryPath);
console.log('New directory created:', newDirectoryPath);
} catch (err) {
console.error('Error creating new directory:', err);
}
// Function 3: Writing to a file asynchronously
const contentToWriteAsync = 'Content to be written asynchronously.';
const filePathAsync = 'path/to/your/asyncFile.txt';
fs.writeFile(filePathAsync, contentToWriteAsync, 'utf8', (err) => {
if (err) {
console.error('Error writing file asynchronously:', err);
} else {
console.log('File written asynchronously:', filePathAsync);
}
});
// Function 4: Checking if a path is a directory
const isDirectoryPath = 'path/to/your';
fs.stat(isDirectoryPath, (err, stats) => {
if (err) {
console.error('Error checking if path is a directory:', err);
} else {
console.log(`Is '${isDirectoryPath}' a directory?`, stats.isDirectory());
}
});
// Function 5: Renaming a file
const oldFilePath = 'path/to/your/oldFile.txt';
const newFilePath = 'path/to/your/newFile.txt';
fs.rename(oldFilePath, newFilePath, (err) => {
if (err) {
console.error('Error renaming file:', err);
} else {
console.log('File renamed successfully:', oldFilePath, 'to', newFilePath);
}
});
#########################################################################
7. program for demonstrating any 5 functions of console global object
// Function 1: Logging to the console
console.log('Hello, this is a log message.');
// Function 2: Logging an error to the console
console.error('Oops! An error occurred.');
// Function 3: Logging a warning to the console
console.warn('Warning: Something might be wrong.');
// Function 4: Logging an object to the console
const myObject = { key: 'value', nested: { anotherKey: 'anotherValue' } };
console.log('Logging an object:', myObject);
// Function 5: Formatting output with placeholders
const name = 'John';
const age = 30;
console.log('Name: %s, Age: %d', name, age);
#########################################################################
8. program for demonstrating any 5 functions of process global object
// Function 1: Accessing command line arguments
console.log('Command line arguments:', process.argv);
// Function 2: Retrieving the current working directory
console.log('Current working directory:', process.cwd());
// Function 3: Getting the Node.js version
console.log('Node.js version:', process.version);
// Function 4: Retrieving environment variables
console.log('Environment variables:', process.env);
// Function 5: Exiting the Node.js process
console.log('Exiting the process in 2 seconds...');
setTimeout(() => {
process.exit(0); // Exit with code 0 (success)
}, 2000);
#########################################################################
9. program for demonstrating any 5 functions of OS utility module
const os = require('os');
// Function 1: Retrieving information about the operating system
console.log('OS Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
// Function 2: Retrieving information about system memory
console.log('Total System Memory:', os.totalmem() / (1024 * 1024), 'MB');
console.log('Free System Memory:', os.freemem() / (1024 * 1024), 'MB');
// Function 3: Retrieving information about the CPU
console.log('Number of CPU Cores:', os.cpus().length);
console.log('CPU Architecture:', os.arch());
console.log('CPU Model:', os.cpus()[0].model);
// Function 4: Retrieving information about the current user
console.log('User Info:', os.userInfo());
// Function 5: Retrieving the hostname of the operating system
console.log('Hostname:', os.hostname());
#########################################################################
10. program for demonstrating any 5 functions of Path utility module
const path = require('path');
// Function 1: Joining path segments
const joinedPath = path.join('path', 'to', 'your', 'file.txt');
console.log('Joined Path:', joinedPath);
// Function 2: Resolving an absolute path
const absolutePath = path.resolve('path', 'to', 'your', 'file.txt');
console.log('Absolute Path:', absolutePath);
// Function 3: Extracting the directory name from a path
const dirname = path.dirname('/path/to/your/file.txt');
console.log('Directory Name:', dirname);
// Function 4: Extracting the file name from a path
const basename = path.basename('/path/to/your/file.txt');
console.log('File Name:', basename);
// Function 5: Checking if a path is an absolute path
const isAbsolute1 = path.isAbsolute('/path/to/your/file.txt');
const isAbsolute2 = path.isAbsolute('relative/path/to/your/file.txt');
console.log('Is Absolute (1):', isAbsolute1);
console.log('Is Absolute (2):', isAbsolute2);
#########################################################################
11. program for demonstrating any 5 functions of Net utility module
const net = require('net');
// Function 1: Creating a TCP server
const server = net.createServer((socket) => {
console.log('Client connected.');
// Function 2: Handling data from a client
socket.on('data', (data) => {
console.log('Received data from client:', data.toString());
// Function 3: Writing data to a client
socket.write('Server says: Hello, client!');
});
// Function 4: Handling the end of a connection
socket.on('end', () => {
console.log('Client disconnected.');
});
});
// Function 5: Listening on a specific port
const PORT = 3000;
server.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
#########################################################################
12. program for demonstrating any 3 functions of Domain utility module
const domain = require('domain');
const http = require('http');
// Function 1: Creating a domain
const myDomain = domain.create();
// Function 2: Handling errors within the domain
myDomain.on('error', (err) => {
console.error('Error caught by domain:', err.message);
});
// Creating a simple HTTP server within the domain
myDomain.run(() => {
// Function 3: Running code within the domain
const server = http.createServer((req, res) => {
// Simulating an error within the domain
throw new Error('Simulated error within the domain');
});
// Listening on port 3000
server.listen(3000, () => {
console.log('Server listening on port 3000');
});
});
#########################################################################
13. program for demonstrating any 3 functions of DNS utility module
const dns = require('dns');
// Function 1: Resolving a domain name to an IP address (lookup)
dns.lookup('www.example.com', (err, address, family) => {
if (err) {
console.error('Error resolving domain:', err.message);
return;
}
console.log('Resolved IP address:', address);
});
// Function 2: Resolving a domain name to an array of IP addresses (resolve4)
dns.resolve4('www.example.com', (err, addresses) => {
if (err) {
console.error('Error resolving domain:', err.message);
return;
}
console.log('Resolved IP addresses (resolve4):', addresses);
});
// Function 3: Resolving an IP address to a domain name (reverse)
dns.reverse('8.8.8.8', (err, hostnames) => {
if (err) {
console.error('Error reversing IP address:', err.message);
return;
}
console.log('Reversed IP address (reverse):', hostnames);
});
#########################################################################
14. program for reading data from stream using Node.js
const fs = require('fs');
// File path
const filePath = 'path/to/your/file.txt';
// Create a readable stream
const readableStream = fs.createReadStream(filePath, 'utf8');
// Event: 'data' - Triggered when data is available
readableStream.on('data', (chunk) => {
console.log('Received data chunk:', chunk);
});
// Event: 'end' - Triggered when there is no more data to read
readableStream.on('end', () => {
console.log('End of stream');
});
// Event: 'error' - Triggered when an error occurs
readableStream.on('error', (err) => {
console.error('Error reading stream:', err);
});
#########################################################################
15. program for writing data to the stream using Node.js
const fs = require('fs');
// File path
const filePath = 'path/to/your/output.txt';
// Create a writable stream
const writableStream = fs.createWriteStream(filePath, { encoding: 'utf8' });
// Data to be written
const dataToWrite = 'Hello, this is data to be written to the stream.\n';
// Write data to the stream
writableStream.write(dataToWrite, 'utf8', () => {
console.log('Data has been written to the stream.');
// End the stream
writableStream.end(() => {
console.log('Stream ended.');
});
});
// Event: 'finish' - Triggered when all data has been flushed to the underlying system
writableStream.on('finish', () => {
console.log('All data has been flushed to the underlying system.');
});
// Event: 'error' - Triggered when an error occurs
writableStream.on('error', (err) => {
console.error('Error writing to stream:', err);
});
#########################################################################
16. program for creating a module for arithmetic operations and use it in another
program using Node.js
// arithmetic.js
// Function to add two numbers
function add(a, b) {
return a + b;
}
// Function to subtract two numbers
function subtract(a, b) {
return a - b;
}
// Function to multiply two numbers
function multiply(a, b) {
return a * b;
}
// Function to divide two numbers
function divide(a, b) {
// Check for division by zero
if (b === 0) {
throw new Error('Cannot divide by zero');
}
return a / b;
}
// Exporting the functions to be used in other programs
module.exports = {
add,
subtract,
multiply,
divide,
};
—--------------—--------------—--------------—--------------—--------------—--------------—--------------—-
// app.js
// Require the arithmetic module
const arithmetic = require('./arithmetic');
// Use the functions from the arithmetic module
const resultAdd = arithmetic.add(5, 3);
const resultSubtract = arithmetic.subtract(10, 4);
const resultMultiply = arithmetic.multiply(2, 6);
try {
const resultDivide = arithmetic.divide(8, 2);
console.log('Result of addition:', resultAdd);
console.log('Result of subtraction:', resultSubtract);
console.log('Result of multiplication:', resultMultiply);
console.log('Result of division:', resultDivide);
} catch (error) {
console.error('Error during division:', error.message);
}
#########################################################################
17. program for get HTTP method using Express.js
const express = require('express');
const app = express();
const port = 3000;
// Middleware to log the HTTP method
app.use((req, res, next) => {
console.log(`Received ${req.method} request for ${req.path}`);
next();
});
// Route to handle any HTTP method
app.all('/api', (req, res) => {
res.send(`Received ${req.method} request for /api`);
});
// Start the Express server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
#########################################################################
18. program for post HTTP method using Express.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware to parse JSON requests
app.use(bodyParser.json());
// Route to handle POST requests
app.post('/api', (req, res) => {
const requestData = req.body;
console.log('Received POST request with data:', requestData);
res.json({ message: 'POST request received successfully', data: requestData });
});
// Start the Express server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
#########################################################################
19. program for put HTTP method using Express.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware to parse JSON requests
app.use(bodyParser.json());
// Route to handle PUT requests
app.put('/api/:id', (req, res) => {
const requestId = req.params.id;
const requestData = req.body;
console.log(`Received PUT request for ID ${requestId} with data:`, requestData);
// Process the request data or update the resource with ID requestId
res.json({ message: `PUT request for ID ${requestId} processed successfully`, data:
requestData });
});
// Start the Express server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
#########################################################################
20. program for demonstrating the concept of Express.js router
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware to parse JSON requests
app.use(bodyParser.json());
// Sample router for handling users
const userRouter = express.Router();
// Middleware specific to the user router
userRouter.use((req, res, next) => {
console.log('User Router Middleware:', new Date());
next();
});
// Route within the user router
userRouter.get('/profile', (req, res) => {
res.json({ message: 'User profile retrieved successfully' });
});
// Mount the user router under '/users'
app.use('/users', userRouter);
// Start the Express server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
#########################################################################
21. program for demonstrating the use of app.use() in Express.js
const express = require('express');
const app = express();
const port = 3000;
// Middleware function for logging requests
const requestLogger = (req, res, next) => {
console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
next();
};
// Middleware function for handling maintenance mode
const maintenanceMode = (req, res, next) => {
// Simulating maintenance mode
const isMaintenanceMode = true;
if (isMaintenanceMode) {
res.status(503).send('Service temporarily unavailable due to maintenance.');
} else {
next();
}
};
// Use the request logger middleware for all routes
app.use(requestLogger);
// Use the maintenance mode middleware for a specific route
app.use('/admin', maintenanceMode);
// Route for handling GET requests to '/'
app.get('/', (req, res) => {
res.send('Hello, Express!');
});
// Route for handling GET requests to '/admin/dashboard'
app.get('/admin/dashboard', (req, res) => {
res.send('Admin Dashboard');
});
// Start the Express server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
#########################################################################
22. program for demonstrating any 5 functions of request object in Express.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware to parse JSON requests
app.use(bodyParser.json());
// Route with route parameters
app.get('/api/user/:id', (req, res) => {
const userId = req.params.id;
res.send(`User ID: ${userId}`);
});
// Route with query parameters
app.get('/api/books', (req, res) => {
const genre = req.query.genre;
const author = req.query.author;
res.send(`Books - Genre: ${genre}, Author: ${author}`);
});
// Route with request body
app.post('/api/users', (req, res) => {
const newUser = req.body;
res.json({ message: 'User created successfully', user: newUser });
});
// Route to access request headers
app.get('/api/headers', (req, res) => {
const userAgent = req.headers['user-agent'];
res.send(`User-Agent: ${userAgent}`);
});
// Route to get client's IP address
app.get('/api/ip', (req, res) => {
const clientIP = req.ip;
res.send(`Client IP Address: ${clientIP}`);
});
// Start the Express server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
#########################################################################
23. program for demonstrating any 5 functions of response object in Express.js
const express = require('express');
const app = express();
const port = 3000;
// Function 1: Sending plain text
app.get('/plaintext', (req, res) => {
res.send('Hello, this is a plain text response!');
});
// Function 2: Sending JSON
app.get('/json', (req, res) => {
const data = {
message: 'Hello, this is a JSON response!',
date: new Date(),
};
res.json(data);
});
// Function 3: Setting status code
app.get('/status', (req, res) => {
res.status(404).send('Page not found');
});
// Function 4: Redirecting
app.get('/redirect', (req, res) => {
res.redirect('https://www.example.com');
});
// Function 5: Setting headers
app.get('/headers', (req, res) => {
res.set('Content-Type', 'text/plain');
res.send('Response with custom headers');
});
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});
#########################################################################
24. Write a program for display hello using react.js class component
Open the src/App.js file and replace its content with the following:
import React, { Component } from 'react';
class HelloComponent extends Component {
render() {
return (
<div>
<h1>Hello, React!</h1>
</div>
);
}
}
export default HelloComponent;
—------------------------------------------------------------------------------------------------------------------------
import React from 'react';
import HelloComponent from './HelloComponent'; // Adjust the path accordingly
function App() {
return (
<div className="App">
<HelloComponent />
</div>
);
}
export default App;
#########################################################################
25. program for creating registration form using react.js
Replace the content of src/App.js with the following code:
import React, { useState } from 'react';
import './App.css';
function RegistrationForm() {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: '',
password: '',
});
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};
const handleSubmit = (e) => {
e.preventDefault();
// You can add form submission logic here
console.log('Form submitted:', formData);
};
return (
<div>
<h1>Registration Form</h1>
<form onSubmit={handleSubmit}>
<label>
First Name:
<input
type="text"
name="firstName"
value={formData.firstName}
onChange={handleChange}
/>
</label>
<br />
<label>
Last Name:
<input
type="text"
name="lastName"
value={formData.lastName}
onChange={handleChange}
/>
</label>
<br />
<label>
Email:
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
/>
</label>
<br />
<label>
Password:
<input
type="password"
name="password"
value={formData.password}
onChange={handleChange}
/>
</label>
<br />
<button type="submit">Submit</button>
</form>
</div>
);
}
export default RegistrationForm;
—-----------------------------------------------------------------------------------------------------------------------
src/App.js
import React from 'react';
import RegistrationForm from './RegistrationForm';
const App = () => {
return (
<div>
<RegistrationForm />
</div>
);
};
export default App;
#########################################################################
26. program for display hello using react.js function component
import React from 'react';
const HelloComponent = () => {
return (
<div>
<h1>Hello, React!</h1>
</div>
);
};
export default HelloComponent;
—---------------------------------------------------------------------------------------------------------------
App.js
import React from 'react';
import HelloComponent from './HelloComponent'; // Adjust the path accordingly
const App = () => {
return (
<div>
<HelloComponent />
</div>
);
};
export default App;
#########################################################################
27. program for display hello using react.js and apply times new roman font, size=20,
color=red using CSS stylesheet
Create a new React component file, let's call it HelloStyledComponent.js:
-------------------------------------------------------------------------------------
import React from 'react';
import './HelloStyledComponent.css';
const HelloStyledComponent = () => {
return (
<div className="hello-container">
<h1 className="hello-text">Hello, React!</h1>
</div>
);
};
export default HelloStyledComponent;
-------------------------------------------------------------------------------------
Create a CSS file named HelloStyledComponent.css:
css
Copy code
.hello-container {
font-family: 'Times New Roman', serif;
font-size: 20px;
color: red;
}
.hello-text {
margin: 0; /* Remove default margin for h1 */
}
-------------------------------------------------------------------------------------
Import and use HelloStyledComponent in your main application file, such as App.js:
jsx
Copy code
import React from 'react';
import HelloStyledComponent from './HelloStyledComponent'; // Adjust the path accordingly
const App = () => {
return (
<div>
<HelloStyledComponent />
</div>
);
};
export default App;
#########################################################################
28. Create the MongoDB database and insert the records either using interface or
using Node.js program
const { MongoClient } = require('mongodb');
// Connection URI
const uri = 'mongodb://localhost:27017';
// Database Name
const dbName = 'your_database_name'; // Change this to your desired database name
// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
try {
// Connect to the MongoDB server
await client.connect();
// Specify the database
const db = client.db(dbName);
// Specify the collection
const collection = db.collection('your_collection_name'); // Change this to your desired
collection name
// Insert records
const recordsToInsert = [
{ name: 'John Doe', age: 30, email: 'john@example.com' },
{ name: 'Jane Doe', age: 25, email: 'jane@example.com' },
];
const result = await collection.insertMany(recordsToInsert);
console.log(`${result.insertedCount} records inserted successfully.`);
} finally {
// Close the connection
await client.close();
}
}
// Run the program
run().catch(console.error);
