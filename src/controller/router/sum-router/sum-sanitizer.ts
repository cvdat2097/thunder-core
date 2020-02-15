import { sanitizeQuery } from 'express-validator';

export const sumSanitizer = [
  sanitizeQuery('a').toInt(),
  sanitizeQuery('b').toInt(),
];
