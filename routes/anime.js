const express = require("express");
const { default: fetch } = require("node-fetch");
const router = express.Router();

const Anime = require("../models/Anime");

// Fetch Anime from API and save Anime ID to a model to create relationship between anime and user/reviews
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const apiUrl = `https://kitsu.io/api/edge/anime/${id}`;
    // const animeCharacterUrl = `https://kitsu.io/api/edge/anime/${id}/anime-characters`;
    // const fetch_response = await fetch(animeCharacterUrl);

    const fetch_response = await fetch(apiUrl);
    const json = await fetch_response.json();

    // const animeCharacterData = json.data.map(
    //   (data) => data.relationships.character.links.related
    // );
    // const animedata = animeCharacterData.map(
    //   async (data) => await Promise.all(fetch(data))
    // );
    // console.log(animedata);

    // const newAnime = new Anime({ id: req.params.id });

    // const anime = await newAnime.save();

    // Fetch characters for anime
    // const animeCharacters = await fetch(
    //   json.data.relationships.animeCharacters.links.related
    // );

    // res.send(animeCharacters);
    res.send(json);
  } catch (err) {
    console.error(err);
  }
});

// // Save Anime ID from API call
// router.post("/:id", async (req, res) => {
//   try {
//     const newAnime = new Anime({
//       id: req.params.id,
//     });

//     const anime = await newAnime.save();

//     res.json({ anime });
//   } catch (err) {
//     console.error(err);
//   }
// });

module.exports = router;
