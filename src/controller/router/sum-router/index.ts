import express from 'express';

import sumService from '@/service/sum-service';
import { sumValidator } from './sum-validator';
import { sumSanitizer } from './sum-sanitizer';

const router = express.Router();

router.get('/', sumValidator, sumSanitizer, (req: any, res: any) => {
  const { a, b } = req.query;
  const result = sumService.sum(a, b);
  return res.json({
    result,
  });
});

export default router;
