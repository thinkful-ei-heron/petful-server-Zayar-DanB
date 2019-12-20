const app = require('../src/server')

describe('App', () => {
  it('GET / responds with 200 "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200)
  })
  describe('/api', () => {
    describe('/dogs', () => {
      it('GET /dogs responds with 200', () => {
        return supertest(app)
          .get('/api/dogs')
          .expect(200)
      })
      it('GET /dogs responds with an array of dogs', () => {
        return supertest(app)
          .get('/api/dogs')
          .then(result => {
            expect(result.body).to.be.an('array')
          })
      })
      it('POST /dogs responds with 200', () => {
        return supertest(app)
          .post('/api/dogs')
          .then(result => {
            expect(result.body).to.be.an('object')
          })
      })

    })
    describe('/cats', () => {
      it('GET /cats responds with 200', () => {
        return supertest(app)
          .get('/api/cats')
          .expect(200)
      })
      it('GET /cats responds with an array of cats', () => {
        return supertest(app)
          .get('/api/cats')
          .then(result => {
            expect(result.body).to.be.an('array')
          })
      })
      it('POST /cats responds with 200', () => {
        return supertest(app)
          .post('/api/cats')
          .then(result => {
            expect(result.body).to.be.an('object')
          })
      })
    })
  })
})


