// File ini akan menjadi entry point serverless untuk Vercel

const app = require("../server");

// Export app sebagai default handler
module.exports = app;
