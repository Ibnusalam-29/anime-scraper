require("dotenv").config();
const express = require("express");
const path = require("path");

const animeRoutes = require("./routes/animeRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Set folder views secara eksplisit
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", animeRoutes);

// Error handler
app.use(errorHandler);

// JANGAN pakai app.listen()

module.exports = app;
