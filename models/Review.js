const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  review: {
    type: String,
    required: [true, "Please enter a review!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // anime: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Anime",
  //   required: [true, "Review must belong to an anime"],
  // },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a user"],
  },
});

module.exports = mongoose.model("review", ReviewSchema);

// Parent referencing to the User and the Anime
// Don't want huge arrays in parent element, thinking there will only be a few reviews so Parent referencing is more ideal
