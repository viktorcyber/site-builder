import request from 'supertest';

import app from '@/app.js';

describe('User Controller', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
