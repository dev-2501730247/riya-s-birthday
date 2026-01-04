// ====================
// FIRST SURPRISE
// ====================
const revealBtn = document.getElementById("revealBtn");
const hiddenMessage = document.getElementById("hiddenMessage");
const treeBtn = document.getElementById("treeBtn");

revealBtn.addEventListener("click", () => {
    hiddenMessage.style.display = "block";
    revealBtn.style.display = "none";
    treeBtn.style.display = "inline-block";
});

// ====================
// SECOND SURPRISE
// ====================
const treeScene = document.getElementById("treeScene");
const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const blessing = document.getElementById("blessing");

// ONLY 12 PHOTOS
const photos = [];
for (let i = 1; i <= 12; i++) {
    photos.push(`image/heartpics/h${i}.jpg`);
}

const blessings = [
    "May you always be happy 💫",
    "Your energy lights up every room ✨",
    "Never lose that childlike joy 🌸",
    "You matter more than you know 🤍",
    "Your smile is contagious 💗",
    "Stay wild, kind, and fearless 🌷",
    "You make life lighter 💞",
    "Keep being beautifully you 🌟",
    "Your laughter is magic 😄",
    "You are deeply loved 💖",
    "May all your dreams sparkle and come true 🌈",
    "Happy Birthday, Riya 🎂"
];


let index = 0;

treeBtn.addEventListener("click", () => {
    treeScene.style.display = "block";

    // FORCE blessing visible
    blessing.style.display = "flex";
    blessing.style.opacity = "1";
    blessing.textContent = blessings[0];

    photo.style.opacity = "0";
    index = 0;

    dropHeart();
});

function dropHeart() {
    if (index >= photos.length) return;

    // Reset heart
    heart.style.animation = "none";
    heart.offsetHeight;
    heart.style.animation = "fallDown 1.2s ease forwards";

    setTimeout(() => {
        // PHOTO
        photo.src = photos[index];
        photo.style.opacity = "1";

        // BLESSING
        blessing.textContent = blessings[index];

        index++;
    }, 1200);

    setTimeout(dropHeart, 2200);
}
