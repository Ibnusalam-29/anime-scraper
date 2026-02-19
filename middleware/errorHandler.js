// Middleware global untuk menangani error
// Supaya error tidak crash server

function errorHandler(err, req, res, next) {
    console.error(err.stack);

    res.status(500).send("Terjadi kesalahan pada server 😢");
}

module.exports = errorHandler;
