// server.js

const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const fs = require("fs");
const Server = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 8080;
const io = socketio.listen(server);


app.get("/", (req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("13");
});

io.on("connect", (socket) => {
  
    socket.on("message", (data) => {
        io.emit("message", data);
        console.log(1);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
