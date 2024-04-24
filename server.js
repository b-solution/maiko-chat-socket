const { default: axios } = require("axios");
require("dotenv").config();
const port = process.env.SCOKET_PORT;
const io = require("socket.io")(port, {
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
});

io.on("connection", (socket) => {
  socket.on("workspace-changes", (change) => {
    console.log("w-change: ", change);
    io.emit("w-change", change);
  });
  socket.on("conv-changes", (change) => {
    console.log(socket.id);
    console.log("conv: ", change);
    io.emit("c-change", change);
  });
  socket.on("prompt-changes", (change) => {
    console.log("prompt: ", change);
    io.emit("p-change", change);
  });
  socket.on("folder-change", (change) => {
    io.emit("f-change", change);
  });
});
