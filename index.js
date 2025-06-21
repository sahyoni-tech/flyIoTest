import http from 'http';
const server = http.createServer((req, res) => {
  res.end('Hello from Fly.io 👋');
});
server.listen(process.env.PORT || 3000);