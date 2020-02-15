import express from 'express';

import sumService from '@/service/sum-service';

const router = express.Router();

router.get('/', (req, res) => {
  const { a, b } = req.query;
  const result = sumService.sum(a, b);
  return res.json({
    result,
  });
});

export default router;
