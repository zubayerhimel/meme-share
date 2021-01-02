import mongoose from "mongoose";
import moment from "moment";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  pictureId: {
    type: String,
  },
  pictureURL: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  ],
  likeCount: [
    {
      type: String,
    },
  ],
  createAt: {
    type: String,
    default: moment(new Date(Date.now())).format("LLL"),
  },
});

// Query middleware
postSchema.pre(/^find/, function (next) {
  this.populate({
    path: "comments",
    select: "-__v",
  }).populate({
    path: "user",
    select: "-posts name",
  });
  next();
});

const Post = mongoose.model("Post", postSchema);

export default Post;
