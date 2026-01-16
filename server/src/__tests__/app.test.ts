import request from 'supertest';

import app from '@/app.js';
import { serverOptions } from '@/utils/constants.js';

describe('GET /', () => {
  it('should return infomation server', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual(serverOptions);
  });

  it('should return 404 for an invalid route', async () => {
    const response = await request(app).get('/invalid');
    expect(response.status).toBe(404);
  });
});
