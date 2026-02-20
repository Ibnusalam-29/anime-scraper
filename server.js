require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express(); // ✅ BUAT APP DULU

const animeRoutes = require("./routes/animeRoutes");
const errorHandler = require("./middleware/errorHandler");

// Set view engine
app.set("view engine", "ejs");

// Set folder views secara eksplisit
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", animeRoutes);

// Error handler (HARUS paling bawah)
app.use(errorHandler);

module.exports = app;