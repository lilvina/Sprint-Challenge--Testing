const express = require('express')
const server = express()
const db = require('../data/dbConfig.js')

server.use(express.json())

server.get('/', (req, res) => {
  res.send('working server')
})

server.get('/games', (req, res) => {
  db('games_table')
  .then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

server.post('/games', (req, res) => {
  db('games_table')
  .insert(req.body)
  .then(response => {
    res.status(201).json(response)
  }).catch(err => {
    res.status(422).json({message: 'Please provide title and genre'})
  })
})

module.exports = server
