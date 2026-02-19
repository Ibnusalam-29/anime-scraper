🎌 Anime Scraper Portfolio
Website Anime Scraper modern menggunakan Node.js + Express + EJS, dengan fitur:

🔍 Search Anime
🌙 Dark / Light Mode
⭐ Bookmark Anime (LocalStorage)
♾ Infinite Scroll
📱 Responsive Modern UI
☁ Deploy Ready (Vercel Serverless)

🚀 Live Demo
Deploy menggunakan:
🌍 Vercel

🛠 Tech Stack
Backend: Node.js + Express
Frontend: EJS + Vanilla JS
API Source: Jikan API
Styling: CSS Modern Responsive
Deployment: Vercel Serverless

💻 Cara Menjalankan di Local
1️⃣ Clone Repository
git clone https://github.com/USERNAME/anime-portfolio.git
cd anime-portfolio

2️⃣ Install Dependencies
npm install

3️⃣ Jalankan Server
npm run dev atau node server.js

Buka di browser:
http://localhost:3000

☁ Cara Deploy ke Vercel
1️⃣ Install Vercel CLI (Opsional)
npm install -g vercel
2️⃣ Login
vercel login
3️⃣ Deploy
vercel

Ikuti instruksi sampai selesai.
⚙ Konfigurasi Penting (Vercel)

File vercel.json:

{
  "version": 2,
  "builds": [
    { "src": "api/index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "api/index.js" }
  ]
}

✨ Fitur Detail
🌙 Dark / Light Mode
Disimpan menggunakan localStorage
Otomatis mengingat preferensi user
⭐ Bookmark Anime
Disimpan di browser (LocalStorage)
Tidak memerlukan database
Bisa melihat halaman khusus /bookmark
♾ Infinite Scroll
Auto load data ketika scroll ke bawah
Menggunakan fetch API
Tidak perlu reload halaman
📱 Responsive UI
Mobile Friendly
Grid Layout Modern
Clean Design Portfolio Style

📚 Tujuan Project
Project ini dibuat untuk:
Portfolio Backend Developer
Belajar Web Scraping
Belajar REST API
Belajar Serverless Deployment
Showcase Fullstack Skill

⚠ Catatan Penting
Data anime diambil dari Jikan API (Unofficial MyAnimeList API)
Tidak menggunakan database
Bookmark hanya tersimpan di device user

👨‍💻 Author
Ibnu Salam
Fresh Graduate Teknik Informatika
Backend & Web Developer Enthusiast

⭐ Jika Project Ini Membantu
Silakan ⭐ repository ini di GitHub 🙌
