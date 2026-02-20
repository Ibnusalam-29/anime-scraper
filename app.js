require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const animeRoutes = require("./routes/animeRoutes");
const errorHandler = require("./middleware/errorHandler");

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", animeRoutes);

// Error handler
app.use(errorHandler);

// Jalankan server (untuk local)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server jalan di http://localhost:${PORT}`);
    });
}

module.exports = app;