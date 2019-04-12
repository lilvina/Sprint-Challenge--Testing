const request = require('supertest')
const server = require('./server.js')

describe('server.js', () => {
  describe('GET /games', () => {
    it('should respond with 200 OK', () => {
      return request(server)
      .get('/games')
      .then(response => {
        expect(response.status).toBe(200)
      })
    })

    it('should always return an array', () => {
      return request(server)
      .get('/games')
      .then(response => {
        expect(response.status).toEqual([])
      })
    })
  })

  describe('POST /games', () => {
    it('should respond with 201 OK', () => {
      return request(server)
      .post('/games')
      .send({title: 'Mario', genre: 'Nintendo'})
      .then(response => {
        expect(response.status).toBe(201)
      })
    })
    it('should return 422 if information is incomplete', () => {
      return request(server)
      .post('/games')
      .send({title: ''})
      .then(response => {
        expect(response.status).toBe(422)
      })
    })
    it('should accept new game', () => {
      return request(server)
      .post('/games')
      .send({title: 'Pacman', genre: 'Arcade'})
      .then(response => {
        expect(response.status).toBe(201)
      })
    })
  })
})
