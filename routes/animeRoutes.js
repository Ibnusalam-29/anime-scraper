// File ini hanya mengatur routing
// Logic tetap dipisahkan ke service

const express = require("express");
const router = express.Router();
const animeService = require("../services/animeService");

/**
 * Route Home - Menampilkan top anime
 */
router.get("/", async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const animes = await animeService.getTopAnime(page);

        res.render("index", { animes });
    } catch (error) {
        next(error);
    }
});

/**
 * Route Detail Anime
 */
router.get("/anime/:id", async (req, res, next) => {
    try {
        const anime = await animeService.getAnimeDetail(req.params.id);
        res.render("detail", { anime });
    } catch (error) {
        next(error);
    }
});

/**
 * Route Halaman Bookmark
 */
router.get("/bookmarks", (req, res) => {
    res.render("bookmarks");
});

module.exports = router;
