const app = require("./app.js");
const port = 3000;
const server = app.listen(port, function () {
  console.log("Express listening on port", port);
});


const listen = require("socket.io");
const io = listen(server);
io.on("connection", (socket) => {
  io.emit('join');
  socket.on('disconnect',()=>{
    io.emit('leave');
  })
  socket.on('client send', (data) =>{
    io.emit('server send', data.message);
  });
});

