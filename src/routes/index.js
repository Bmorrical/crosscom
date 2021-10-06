import express from 'express';
import anonymousRouter from './api/anonymous';

const router = express.Router();

router.use('/', anonymousRouter);

module.exports = router;
