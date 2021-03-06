import { check } from 'express-validator';
import validateRequest from '../../helper/validate-request';

export const sumValidator = validateRequest([
  check('a', 'first number is invalid')
    .isNumeric()
    .toInt(),
  check('b', 'second number is invalid')
    .isNumeric()
    .toInt(),
]);
