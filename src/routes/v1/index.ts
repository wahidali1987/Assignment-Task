import express from 'express';
import place from './place/place';

const router = express.Router();
router.use('', place);

export default router;
