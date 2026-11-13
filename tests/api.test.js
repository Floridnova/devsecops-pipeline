   const request = require('supertest');
   const app = require('../src/app');

   test('GET /health returns ok', async () => {
     const res = await request(app).get('/health');
     expect(res.statusCode).toBe(200);
     expect(res.body.status).toBe('ok');
   });

   test('GET /items returns two items', async () => {
     const res = await request(app).get('/items');
     expect(res.statusCode).toBe(200);
     expect(res.body).toHaveLength(3);
   });

   test('unknown route returns 404', async () => {
     const res = await request(app).get('/nope');
     expect(res.statusCode).toBe(404);
   });