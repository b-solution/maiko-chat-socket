const { default: axios } = require("axios");

const io = require("socket.io")(3002, {
  cors: {
    origin: ["http://localhost:3000"],
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
  //   socket.on("add-conversation", async (conversation) => {
  //     const { data } = await axios.post("http://localhost:3000/api/add-conversation", conversation);
  //     //socket.emit("conversation", data);
  //     console.log(data);
  //   });
});
