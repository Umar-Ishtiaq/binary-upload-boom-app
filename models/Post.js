const mongoose = require("mongoose");

//why we use schema is to have a structure or a template so that it is easier to maintain or update
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: { //this will take the _id of the current user
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",// ref is used to refer the user schema 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
