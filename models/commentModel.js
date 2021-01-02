import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
  },
});

// Query middleware
commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: '-posts name',
  });
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
