const express = require("express");
const { default: fetch } = require("node-fetch");
const router = express.Router();

//Get Anime Search Results
router.get("/:text", async (req, res) => {
  try {
    const text = req.params.text;
    const response = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=20`
    ).then((res) => res.json());

    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
