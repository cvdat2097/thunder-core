import validateRequest from '@/controller/helper/validate-request';
import { check } from 'express-validator';

export const localAuthValidator = validateRequest([
  check('username').isString(),
  check('password').isString(),
]);
