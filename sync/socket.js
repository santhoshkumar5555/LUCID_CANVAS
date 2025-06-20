// File: sync/socket.js
let socket;

export function initSocket() {
  socket = io();

  socket.on('draw', (data) => {
    if (data.type === 'moodChange') {
      window.moodColor = data.color;
    }
  });
}

export function broadcastEvent(data) {
  if (socket) socket.emit('draw', data);
}
