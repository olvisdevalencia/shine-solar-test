const request = require('supertest');
const app = require('../src');
const redis = require('redis-mock');

// Mock the Redis client
jest.mock('redis', () => ({
  createClient: () => redis.createClient(),
}));

describe('Rate Limiter and Data Transformation Service', () => {
  let redisClient: any;

  beforeAll(() => {
    // Create a Redis client
    redisClient = redis.createClient();
  });

  afterAll(() => {
    // Quit the Redis client
    redisClient.quit();
  });

  describe('POST /api/transform', () => {
    test('should return transformed payload with rate limiting applied', async () => {
      // Set up the test data
      const payload = { foo: null, bar: 123 };
      const expectedResponse = { bar: 123 };

      // Make 10 requests in quick succession
      for (let i = 0; i < 10; i++) {
        const res = await request(app)
          .post('/api/transform')
          .send(payload);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedResponse);
      }

      // Make an 11th request (should be rate limited)
      const res = await request(app)
        .post('/api/transform')
        .send(payload);
      expect(res.status).toBe(429);
    });
  });
});