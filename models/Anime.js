const mongoose = require("mongoose");

const AnimeSchema = mongoose.Schema({
  id: {
    type: String,
  },
});

module.exports = mongoose.model("anime", AnimeSchema);
