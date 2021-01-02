import catchAsync from "../util/catchAsync";
import AppError from "../util/appError";
import User from "../models/userModel";
import Post from "../models/postModel";

const sendMessage = (res, status, message) => {
  res.status(status).json({
    status: "failed",
    message,
  });
};

const sendData = (res, data) => {
  res.status(200).json({
    status: "ok",
    data,
  });
};

const createPost = catchAsync(async (req, res, next) => {
  res.setHeader("Content-type", "application/json");

  const userId = req.params.uid;
  const { name, pictureId, pictureURL } = req.body;

  if (!name) return next(new AppError("Provide post name.", 400));
  if (!pictureId) return next(new AppError("Provide asset id.", 400));
  if (!pictureURL) return next(new AppError("Provide your asset url.", 400));
  const body = {
    ...req.body,
    user: userId,
  };
  const postInfo = await Post.create(body);

  if (!postInfo) {
    return sendMessage(res, 400, "somthing wrong.");
  }

  // create relation between post and user
  await User.findOne(
    {
      _id: userId,
    },
    (err, data) => {
      if (data) {
        data.posts.push(postInfo._id);
        data.save();
      }
    }
  );

  return sendData(res, postInfo);
});

const getPosts = catchAsync(async (req, res, next) => {
  res.setHeader("Content-type", "application/json");

  const postInfo = await Post.find();

  for (let i = 0; i < postInfo.length; i += 1) {
    postInfo[i]._doc.likes = postInfo[i].likeCount.length;
    postInfo[i].likeCount = undefined;
    postInfo[i].comments = undefined;
  }
  return sendData(res, postInfo);
});

const getSinglePost = catchAsync(async (req, res, next) => {
  res.setHeader("Content-type", "application/json");

  const postId = req.params.pid;
  const postInfo = await Post.findById(postId);

  if (!postInfo) return next(new AppError("post not found.", 404));
  postInfo._doc.likes = postInfo.likeCount.length;
  postInfo.likeCount = undefined;
  return sendData(res, postInfo);
});

export { createPost, getPosts, getSinglePost };
