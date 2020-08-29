const express = require("express");
const connectDB = require("./config/db");
const fetch = require("node-fetch");

const app = express();

// Connect to Mongo Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/api", async (req, res) => {
  const api_url = "https://kitsu.io/api/edge/trending/anime";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();

  res.json(json.data);
});

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/anime", require("./routes/anime"));
app.use("/review", require("./routes/review"));
app.use("/search", require("./routes/search"));
app.use("/favorite", require("./routes/favorite"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
