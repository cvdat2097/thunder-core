import validateRequest from '@/controller/helper/validate-request';
import { check, header } from 'express-validator';

export const localAuthValidator = validateRequest([
  check('username').isString(),
  check('password').isString(),
]);

export const jwtAuthValidator = validateRequest([
  header('Authorization').isString(),
]);
