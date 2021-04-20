const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const PORT = process.env.PORT || 5000
const router = require('./router')
const app = express()
const server = http.createServer(app)

app.use(router)

const io = socketio(server)

server.listen(PORT, () => console.log(`Server running at port ${PORT}`))
