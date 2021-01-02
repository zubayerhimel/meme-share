import express from 'express';
import {
  createComment,
} from '../controllers/commentController';

const router = express.Router();

router.route('/comments/:pid').post(createComment);

export default router;
