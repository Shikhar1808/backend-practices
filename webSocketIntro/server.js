const express = require('express');
require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.static('public'));

const server = http.createServer(app);

const io = new Server(server);

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { //socket is the client(user)
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
const start = async ()=>{
    try{
        
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error){
        console.log(error);
    }
};
start();