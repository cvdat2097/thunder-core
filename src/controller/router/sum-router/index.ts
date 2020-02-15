import express from 'express';

import sumService from '@/service/sum-service';
import { sumValidator } from './validator';
import { sumSanitizer } from './sanitizer';

const router = express.Router();

router.get('/', sumValidator, sumSanitizer, (req: any, res: any) => {
  const { a, b } = req.query;
  const result = sumService.sum(a, b);
  return res.json({
    result,
  });
});

export default router;
