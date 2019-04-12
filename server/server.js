const express = require('express')
const server = express()

server.use(express.json())

server.get('/', () => {
  res.send('working server')
})

module.exports = server
