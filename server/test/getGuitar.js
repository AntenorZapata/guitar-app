// const guitarBody = require('./guitarBody');
const { expect } = require('chai');
// const sinon = require('sinon');
const { getAll } = require('../controllers/guitarController');

describe('test the port the server is running and the status of the request', () => {
  describe(' get success', () => {
    it('should respond on port 3001 with statusCode 200 OK', async () => {
      const res = await getAll();
      console.log(res);

      expect(res.status).to.be.equal(200);
    });

    //   it('should response have a length of 1', async () => {
    //     const res = await request.get('/guitars');
    //     expect(res.body).toHaveLength(0);
    //     expect(res.body[0]).toHaveProperty('brand', 'ibanez');
    //   });
    // });

    // describe('post bad request', () => {
    //   it('should respond on port 3001 with statusCode: 400', async () => {
    //     const res = await request.post('/guitars');
    //     expect(res.status).toBe(400);
    //   });

    //   it('should respond with message "Invalid Data"', async () => {
    //     const res = await request.post('/guitars');
    //     expect(res.body.error).toBe('Erro: Invalid Data');
    //   });
    // });

    // describe('post success', () => {
    //   it('should respond on port 3001 with statusCode: 400', async () => {
    //     // const res = await request.post('/guitars').send(guitarBody);

    //     expect(res.status).toBe(201);
    //   });
  });
});
