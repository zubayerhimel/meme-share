import catchAsync from '../util/catchAsync';
import AppError from '../util/appError';
import Comment from '../models/commentModel';
import Post from '../models/postModel';

const sendMessage = (res, status, message) => {
  res.status(status).json({
    status: 'failed',
    message,
  });
};

const sendData = (res, data) => {
  res.status(200).json({
    status: 'ok',
    data,
  });
};

const createComment = catchAsync(async (req, res, next) => {
  res.setHeader('Content-type', 'application/json');

  const postId = req.params.pid;

  const { text } = req.body;

  if (!text) return next(new AppError('Provide comment text.', 400));

  const commentInfo = await Comment.create(req.body);

  if (!commentInfo) {
    return sendMessage(res, 'failed', 'somthing wrong.');
  }

  // create relation between post and comment
  await Post.findOne({
    _id: postId,
  }, (err, data) => {
    if (data) {
      data.comments.push(commentInfo._id);
      data.save();
    }
  });

  return sendData(res, commentInfo);
});

export {
  createComment,
};
