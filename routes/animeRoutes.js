const express = require("express");
const router = express.Router();
const animeService = require("../services/animeService");

/**
 * Home - Top Anime
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
 * Detail Anime
 */
router.get("/anime/:id", async (req, res, next) => {
    try {
        const anime = await animeService.getAnimeDetail(req.params.id);

        res.render("detail", {
            anime
        });

    } catch (error) {
        next(error);
    }
});

/**
 * API Episodes (AJAX Infinite Scroll)
 */
router.get("/anime/:id/episodes", async (req, res, next) => {
    try {
        const page = req.query.page || 1;

        const result = await animeService.getAnimeEpisodes(
            req.params.id,
            page
        );

        res.json({
            success: true,
            episodes: result.episodes || [],
            pagination: result.pagination || {}
        });

    } catch (error) {
        next(error);
    }
});

/**
 * Bookmark Page
 */
router.get("/bookmarks", (req, res) => {
    res.render("bookmarks");
});

module.exports = router;