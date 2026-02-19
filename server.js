/**
 * File utama aplikasi
 * Bertugas menjalankan server
 */

require("dotenv").config();
const express = require("express");
const path = require("path");

const animeRoutes = require("./routes/animeRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Set template engine
app.set("view engine", "ejs");

// Set folder static
app.use(express.static("public"));

// Gunakan routes
app.use("/", animeRoutes);

// Gunakan error handler
app.use(errorHandler);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
