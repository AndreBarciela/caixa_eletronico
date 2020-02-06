const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:4000/`;
const request = require('supertest')(url);

describe('GraphQL', () => {
    it('Retorna o saldo da conta com numero = 54321', (done) => {
        request.post('/graphql')
        .send({ query: 'query { saldo(conta: 54321) }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            res.body.user.should.have.property('saldo')
            done();
        })
    })
});