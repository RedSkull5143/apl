const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Get the request URL
  const url = req.url;

  // Get the request method
  const method = req.method;

  // Get the request headers
  const headers = req.headers;

  // Get the request body
  const body = req.body;

  // Get the request cookies
  const cookies = req.cookies;

  // Send a response
  res.send(`
    URL: ${url}
    Method: ${method}
    Headers: ${JSON.stringify(headers)}
    Body: ${JSON.stringify(body)}
    Cookies: ${JSON.stringify(cookies)}
  `);
});