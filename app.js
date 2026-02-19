const express = require("express");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// HOME (dengan page)
app.get("/", async (req, res) => {
    const page = req.query.page || 1;

    try {
        const response = await axios.get(
            `https://api.jikan.moe/v4/top/anime?page=${page}`
        );

        res.render("index", {
            animes: response.data.data,
            page: page
        });
    } catch (err) {
        res.send("Error mengambil data");
    }
});

// DETAIL
app.get("/anime/:id", async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.jikan.moe/v4/anime/${req.params.id}`
        );

        res.render("detail", {
            anime: response.data.data
        });
    } catch (err) {
        res.send("Anime tidak ditemukan");
    }
});

// HALAMAN BOOKMARK
app.get("/bookmarks", (req, res) => {
    res.render("bookmarks");
});


app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
});
