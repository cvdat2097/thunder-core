import express from 'express';

import sumRouter from './router/sum-router';

const router = express.Router();
router.use('/sum', sumRouter);

export default router;
