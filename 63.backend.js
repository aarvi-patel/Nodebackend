// console.log("helllo backend tut.............")

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('1.html', 'text/plain');
  // res.end('Hello World aarvi');
  res.end('Hello aarvi patel....................');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
