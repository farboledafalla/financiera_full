import { createClient } from 'redis';
import logger from './logger.js';

const redisClient = createClient({
   url: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
});

redisClient.on('error', (err) => logger.error('Redis Client Error', err));
redisClient.on('connect', () => logger.info('Redis Client Connected'));

await redisClient.connect();

export const cacheMiddleware = (duration) => {
   return async (req, res, next) => {
      const key = `cache:${req.originalUrl}`;
      try {
         const cachedResponse = await redisClient.get(key);
         if (cachedResponse) {
            return res.json(JSON.parse(cachedResponse));
         }
         res.sendResponse = res.json;
         res.json = (body) => {
            redisClient.setEx(key, duration, JSON.stringify(body));
            res.sendResponse(body);
         };
         next();
      } catch (error) {
         next(error);
      }
   };
};

export default redisClient;
