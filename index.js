const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const port = process.env.PORT || 7000;
app.get("/search", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
    res.json("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
