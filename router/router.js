import express from 'express';
import authRouter from './authRouter';
import profileRouter from './profileRouter';
import postRouter from './postRouter';
import commentRouter from './commentRouter';
import likeUnlikeRouter from './likeUnlikeRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/posts', postRouter);
router.use('/posts', commentRouter);
router.use('/posts', likeUnlikeRouter);

export default router;
