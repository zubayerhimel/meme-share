import mongoose from 'mongoose';

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
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Comment',
    },
  ],
  likeCount: [
    {
      type: String,
    },
  ],
  createAt: {
    type: Date,
    default: new Date(),
  },
});

// Query middleware
postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'comments',
    select: '-__v',
  });
  next();
});

const Post = mongoose.model('Post', postSchema);

export default Post;
