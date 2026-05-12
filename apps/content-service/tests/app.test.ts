import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';

describe('GET /projects', () => {
  it('should return an empty array of projects', async () => {
    const res = await request(app).get('/projects');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
