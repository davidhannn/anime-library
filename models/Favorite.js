const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  animeId: {
    type: String,
  },
  animeTitle: {
    type: String,
  },
  animeImage: {
    type: String,
  },
});

module.exports = mongoose.model("favorite", FavoriteSchema);
