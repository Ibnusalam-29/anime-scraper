// Middleware global untuk menangani error
// Supaya error tidak crash server

module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Terjadi kesalahan pada server.");
};