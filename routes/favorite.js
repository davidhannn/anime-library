const express = require("express");
const { default: fetch } = require("node-fetch");
const router = express.Router();
const auth = require("../middleware/auth");

const Favorite = require("../models/Favorite");

/// Save Favorite Anime
router.post("/favoriteNumber", auth, (req, res) => {
  Favorite.find({ animeId: req.body.animeId }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  });
});

// Find Favorite information inside Favorite Collection by Movie Id, userFrom
router.post("/favorited", auth, (req, res) => {
  Favorite.find({ animeId: req.body.animeId, user: req.body.userFrom }).exec(
    (err, favorite) => {
      if (err) return res.status(400).send(err);

      //Check if user already favorited movie
      let result = false;
      if (favorite.length !== 0) {
        result = true;
      }

      res.status(200).json({
        success: true,
        favorited: result,
      });
    }
  );
});

/// Save the Information about the anime or UserID inside favorite collection
router.post("/addToFavorite", auth, (req, res) => {
  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/removeFromFavorite", auth, (req, res) => {
  Favorite.findOneAndDelete({
    animeId: req.body.animeId,
    user: req.body.user,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

router.post("/getFavoritedAnime", auth, (req, res) => {
  Favorite.find({ user: " req.body.user" }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favorites });
  });
});

module.exports = router;
