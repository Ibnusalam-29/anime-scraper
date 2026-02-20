const axios = require("axios");

const BASE_URL = "https://api.jikan.moe/v4";

exports.getTopAnime = async (page = 1) => {
    const response = await axios.get(`${BASE_URL}/top/anime?page=${page}`);
    return response.data.data;
};

exports.getAnimeDetail = async (id) => {
    const response = await axios.get(`${BASE_URL}/anime/${id}`);
    return response.data.data;
};

exports.getAnimeEpisodes = async (id, page = 1) => {
    const response = await axios.get(
        `${BASE_URL}/anime/${id}/episodes?page=${page}`
    );

    return {
        episodes: response.data.data,
        pagination: response.data.pagination
    };
};