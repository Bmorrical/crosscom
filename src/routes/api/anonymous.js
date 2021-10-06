import express from 'express';
import AnonymousController from '../../controllers/AnonymousController';

const router = express.Router();

// CHECK WITH AUTH
router.get('/', AnonymousController.heartBeat);

module.exports = router;
