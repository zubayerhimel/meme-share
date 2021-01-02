import express from 'express';
import {
  getProfile,
} from '../controllers/profileController';

const router = express.Router();

router.route('/:id').get(getProfile);

export default router;
