import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();

const io = new Server(httpServer,{ cors: {
    origin: "*"
  } });

io.on("connection", (socket) => {
    socket.on("message", (msg) => {
        console.log(msg)
        socket.broadcast.emit("incoming-message", socket.id, msg);
    });
});

io.listen(3000);