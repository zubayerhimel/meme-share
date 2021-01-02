import express from 'express';
import {
  likePost,
  unLikePost,
} from '../controllers/likeUnlikeController';

const router = express.Router();

router.route('/like/:pid/:uid').post(likePost);
router.route('/unlike/:pid/:uid').post(unLikePost);

export default router;
