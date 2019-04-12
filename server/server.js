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
    const id = response
    db('games_table')
    .where({id})
    .then(games => {
      res.status(201).json(games)
    }).catch(err => {
      res.status(404).json(err)
    })
  }).catch(err => {
    res.status(422).json({message: 'Please provide correct title and genre'})
  })
})

module.exports = server
