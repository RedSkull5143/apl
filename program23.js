const express = require('express');
const app = express();

// app.set('view engine', 'html');

app.get('/', (req, res) => {
  // res.send()
//   res.send('Hello World!');

  // res.json()
//   res.json({
//     song: 'Moye Moye',
//     author: 'chota thakur',
//     listens: '535M'
//   });

  // res.sendFile()
//   res.sendFile(__dirname+'/program18.html');

  // res.redirect()
//   res.redirect('/about');

  // res.status()
//   res.status(404).send('Not Found');
});

app.listen(3000)