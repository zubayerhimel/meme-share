import catchAsync from "../util/catchAsync";
import AppError from "../util/appError";
import User from "../models/userModel";

const sendData = (res, data) => {
  res.status(200).json({
    status: "ok",
    data,
  });
};

const getProfile = catchAsync(async (req, res, next) => {
  res.setHeader("Content-type", "application/json");

  const userInfo = await User.findById(req.params.id);
  if (!userInfo) {
    return next(new AppError("profile not found.", 400));
  }

  const { posts } = userInfo;
  for (let i = 0; i < posts.length; i += 1) {
    posts[i]._doc.likes = posts[i].likeCount.length;
    posts[i].likeCount = undefined;
  }

  return sendData(res, userInfo);
});

export { getProfile };
