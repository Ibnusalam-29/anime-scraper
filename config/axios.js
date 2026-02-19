// File ini untuk membuat instance axios terpusat
// Supaya kalau baseURL berubah, cukup ubah di sini saja

const axios = require("axios");

// Membuat axios instance dengan baseURL Jikan API
const axiosInstance = axios.create({
    baseURL: "https://api.jikan.moe/v4",
    timeout: 5000
});

module.exports = axiosInstance;
