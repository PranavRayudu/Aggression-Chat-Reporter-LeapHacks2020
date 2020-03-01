const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  severity: {
    type: Integer
  },
  processed: {
    type: Integer
  },
  tags: [{
     tag: String 
  }],
  created: {
      type: Date, default: Date.now
    }
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;