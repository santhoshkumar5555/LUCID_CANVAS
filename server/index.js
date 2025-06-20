// File: server/index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/../'));

io.on('connection', (socket) => {
  socket.on('draw', (data) => {
    socket.broadcast.emit('draw', data);
  });
});

server.listen(3000, () => console.log('LucidCanvas server running on http://localhost:3000'));
