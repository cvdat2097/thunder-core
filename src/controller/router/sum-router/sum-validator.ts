import { check } from 'express-validator';
import validateRequest from '../validate-request';

export const sumValidator = validateRequest([
  check('a', 'first number is invalid').isNumeric(),
  check('b', 'second number is invalid').isNumeric(),
]);
