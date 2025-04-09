// tests/app.test.js
const request = require('supertest');
const app = require('../app'); // your express app

describe('GET /health', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('OK');
  });
});
