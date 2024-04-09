// console.log("hello i'm starting a new NodeJS project")
// const { createServer } = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello rahul saini')
})

app.get('/mobile', function (req, res) {
    res.send('this is my mobile number: 7691080706')
  })

app.listen(3000)
