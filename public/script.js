// THEME
function toggleTheme() {
    document.body.classList.toggle("light");
    localStorage.setItem("theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
}

window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    }
};

// BOOKMARK
function addBookmark(id, title, image) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (!bookmarks.find(b => b.id === id)) {
        bookmarks.push({ id, title, image });
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        alert("Ditambahkan ke bookmark!");
    }
}

function showBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    let html = bookmarks.map(b =>
        `<div>
            <img src="${b.image}" width="80">
            <p>${b.title}</p>
        </div>`
    ).join("");

    document.getElementById("anime-container").innerHTML =
        "<h2>Bookmarks</h2>" + html;
}

// INFINITE SCROLL
let page = 1;
window.onscroll = async function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        page++;
        const res = await fetch(`/?page=${page}`);
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const newCards = doc.querySelectorAll(".card");

        newCards.forEach(card => {
            document.getElementById("anime-container").appendChild(card);
        });
    }
}

// LOAD BOOKMARK PAGE
function loadBookmarksPage() {
    const container = document.getElementById("bookmark-container");
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (bookmarks.length === 0) {
        container.innerHTML = "<h3>Belum ada bookmark 😢</h3>";
        return;
    }

    container.innerHTML = bookmarks.map(b => `
        <div class="card">
            <img src="${b.image}">
            <h4>${b.title}</h4>
            <a href="/anime/${b.id}">Detail</a>
            <button class="bookmark"
                onclick="removeBookmark('${b.id}')">
                Hapus
            </button>
        </div>
    `).join("");
}

// REMOVE BOOKMARK
function removeBookmark(id) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks = bookmarks.filter(b => b.id !== id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarksPage();
};