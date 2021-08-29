const supertest = require('supertest');

describe('test the port the server is running and the status of the request', () => {
  const request = supertest('http://localhost:3001/guitars');

  describe('success', () => {
    it('should respond on port 3001 with statusCode 200 OK', async () => {
      const res = await request.get('/');
      expect(res.status).toBe(200);
    });
  });

  describe('bad request', () => {
    it('should respond on port 3001 with statusCode: 400', async () => {
      const res = await request.post('/');
      expect(res.status).toBe(400);
    });

    it('should respond with message "Invalid Data"', async () => {
      const res = await request.post('/');
      expect(res.text).toBe('{"error":"Erro: Invalid Data"}');
    });
  });
});
