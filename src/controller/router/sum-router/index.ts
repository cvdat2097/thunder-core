import express from 'express';

import sumService from '@/service/sum-service';
import { sumValidator } from './sum-validator';

const router = express.Router();

router.get('/', sumValidator, (req, res) => {
  const { a, b } = req.query;
  const result = sumService.sum(a, b);
  return res.json({
    result,
  });
});

export default router;
