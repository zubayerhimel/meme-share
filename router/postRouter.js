import express from 'express';
import {
  createPost,
  getPosts,
  getSinglePost,
} from '../controllers/postController';

const router = express.Router();

router.route('/:uid').post(createPost);
router.route('/').get(getPosts);
router.route('/:pid').get(getSinglePost);

export default router;
