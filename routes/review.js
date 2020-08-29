const express = require("express");
const router = express.Router();
// const reviewController = require("../controllers/reviewController");
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const Review = require("../models/Review");

router.get("/saveReview", async (req, res) => {
  const review = new Review(req.body);

  review.save((err, review) => {
    if (err) return res.json({ success: false, err });

    Review.find({ id: review.id })
      .populate("user")
      .exec((err, result) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

module.exports = router;
