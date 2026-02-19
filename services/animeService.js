// File ini berisi semua logic pengambilan data anime
// Jadi controller tidak langsung akses API

const axios = require("../config/axios");
const NodeCache = require("node-cache");

// Membuat cache dengan TTL 10 menit
const cache = new NodeCache({ stdTTL: 600 });

/**
 * Mengambil top anime berdasarkan halaman
 */
async function getTopAnime(page = 1) {
    const cacheKey = `topAnime-${page}`;

    // Cek apakah data ada di cache
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    const response = await axios.get(`/top/anime?page=${page}`);
    const data = response.data.data;

    // Simpan ke cache
    cache.set(cacheKey, data);

    return data;
}

/**
 * Mengambil detail anime berdasarkan ID
 */
async function getAnimeDetail(id) {
    const cacheKey = `animeDetail-${id}`;

    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    const response = await axios.get(`/anime/${id}`);
    const data = response.data.data;

    cache.set(cacheKey, data);

    return data;
}

module.exports = {
    getTopAnime,
    getAnimeDetail
};
