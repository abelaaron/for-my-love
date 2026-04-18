const music = document.getElementById("bgMusic");
let musicStarted = false;

// 🎵 START MUSIC ON FIRST CLICK (AUTOPLAY FIX)
document.addEventListener("click", () => {
    if (!musicStarted && music) {

        musicStarted = true; // 🔒 lock FIRST

        music.currentTime = 0;
        lyricIndex = 0;

        music.play();

        startBeatSync();
        startLyricsSync();
    }
});
// 🎵 LYRICS DATA (PUT HERE 👇)
const lyrics = [
    { time: 2, text: "Yeah..." },
    { time: 5, text: "One love ❤️" },
    { time: 8, text: "Ek hi life hai..." },
    { time: 12, text: "Bas tere saath rehna hai 😌" },

    { time: 17, text: "Sab kuch alag lagta hai..." },
    { time: 21, text: "Jab tu mere saath hoti hai 💖" },

    { time: 26, text: "Hritvi..." },
    { time: 29, text: "Tujhe shayad pata bhi nahi 🥺" },

    { time: 34, text: "Kitna pasand karta hu tujhe 💕" },

    { time: 40, text: "Ye sirf crush nahi hai..." },
    { time: 44, text: "Kuch real hai yeh ✨" },

    { time: 50, text: "One love ❤️" },
    { time: 54, text: "Aur wo tu hai..." },

    { time: 60, text: "Sirf tu hi 💖" },

    { time: 66, text: "Kisi aur ki zarurat nahi hai" },

    { time: 72, text: "Bas tu... hamesha 😌" },

    { time: 78, text: "HRITVI 💖" },

    { time: 82, text: "Sach bolu..." },
    { time: 86, text: "Shayad... mujhe tu pasand se bhi zyada hai ❤️" }
];

// 👇 ALREADY EXISTING CODE
let lyricIndex = 0;

// 🎤 START LYRICS SYNC
function startLyricsSync() {
    const lyricsText = document.getElementById("lyricsText");

    setInterval(() => {
        if (!music) return;

        let currentTime = music.currentTime;

        if (lyricIndex < lyrics.length && currentTime >= lyrics[lyricIndex].time) {
            
            showLyric(lyrics[lyricIndex].text, lyricsText);
            lyricIndex++;
        }

    }, 200);
}

// ✨ SHOW LYRIC WITH TYPE EFFECT
function showLyric(text, element) {
    element.classList.remove("show-lyric");
    element.innerHTML = "";

    let i = 0;
    
    const typing = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, 40);

    setTimeout(() => {
        element.classList.add("show-lyric");
    }, 50);
    if(text.includes("HRITVI")){
    document.body.style.background = "linear-gradient(135deg,#ff6b6b,#ff9ff3)";
}
}
// Counter Animation
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const target = number.getAttribute('data-target');
        let current = 0;
        
        if (target === '∞') {
            const timer = setInterval(() => {
                current += 1;
                if (current >= 10) {
                    number.textContent = '∞';
                    clearInterval(timer);
                } else {
                    number.textContent = current;
                }
            }, 100);
        } else {
            const targetNum = parseInt(target);
            const increment = targetNum / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNum) {
                    number.textContent = targetNum;
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 20);
        }
    });
}

// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Show Questions
function showQuestion() {
    scrollToSection('questions');
}

// 💖 FINAL LOVE
function showFinalLove() {
    const finalLove = document.querySelector('.final-love');
    const button = document.querySelector('.love-button span');

    if (finalLove && button) {
        finalLove.classList.add('show');
        button.textContent = '💖 I LOVE YOU HRITVI 💖';

        createHeartExplosion();
        setTimeout(showLoveMeter, 1500);
    }
}

// 🎚️ LOVE METER
function showLoveMeter() {
    const section = document.querySelector('.promise-section');

    const box = document.createElement('div');
    box.style.marginTop = "40px";
    box.style.textAlign = "center";

    const title = document.createElement('h2');
    title.innerText = "Okay... now tell me 😌";
    
    const subtitle = document.createElement('p');
    subtitle.innerText = "How much do you love me? 💖";

    const slider = document.createElement('input');
    slider.type = "range";
    slider.min = 0;
    slider.max = 100;
    slider.value = 50;
    slider.style.width = "300px";

    const response = document.createElement('p');
    response.style.marginTop = "15px";
    response.innerText = "Slide it... 👀";

    // ✅ CREATE IMAGE ONLY ONCE
    const img = document.createElement("img");
    img.style.width = "220px";
    img.style.marginTop = "15px";
    img.style.borderRadius = "15px";
    img.src = "neutral.jpg"; // default image

    // ✅ SINGLE CLEAN LOGIC
    slider.oninput = () => {
        let val = slider.value;

        if (val > 80) {
            response.innerText = "WAIT WHAT 😳 YOU LOVE ME THIS MUCH?? 💍💖";
            img.src = "happy.jpg";
        } 
        else if (val > 50) {
            response.innerText = "Okayyy I see you 😌❤️";
            img.src = "neutral.jpg";
        } 
        else if (val > 20) {
            response.innerText = "Bas itna? 😒 I'll make it more 😤";
            img.src = "sad.jpg";
        } 
        else {
            response.innerText = "NAHH THIS IS ILLEGAL 😭💔 TRY AGAIN";
            img.src = "angry.jpg";
        }
    };

    // ✅ APPEND PROPERLY (ONLY ONCE)
    box.appendChild(title);
    box.appendChild(subtitle);
    box.appendChild(slider);
    box.appendChild(response);
    box.appendChild(img);

    section.appendChild(box);

    setTimeout(startHeartGame, 2000);
}

 // 💥 FLOATING HEARTS
 function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            font-size: ${Math.random() * 20 + 10}px;
            z-index: 1000;
            pointer-events: none;
            animation: floatUp 4s linear forwards;
        `;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 300);
}

// 💣 HEART EXPLOSION
function createHeartExplosion() {
    for(let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = "💖";
            heart.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                font-size: 20px;
                animation: explode 2s ease-out forwards;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 100);
    }
}

// 🎮 GAME
let score = 0;
let gameInterval;

function startHeartGame() {
    document.getElementById("heartGame").classList.remove("hidden");
    score = 0;
    updateScore();
    gameInterval = setInterval(createHeart, 500);
}

function createHeart() {
    const gameArea = document.getElementById("gameArea");

    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = ["💖","💕","💘"][Math.floor(Math.random()*3)];

    heart.style.left = Math.random() * 90 + "%";

    heart.onclick = () => {
        score++;
        updateScore();
        heart.remove();
    };

    gameArea.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

function updateScore() {
    document.getElementById("score").innerText = "Score: " + score;
}

function endGame() {
    clearInterval(gameInterval);

    let msg = score > 15 
        ? "Okay wait... that's actually really cute 😭❤️"
        : "Hehe that's cute 😌❤️";

    document.getElementById("heartGame").innerHTML = `
        <h2>${msg}</h2>
        <p>I think I already fell for you ❤️</p>
    `;
}

// 🎵 BEAT SYNC ANIMATION
function startBeatSync() {
    const heart = document.querySelector('.heart-animation');
    const name = document.querySelector('.name-animation');

    setInterval(() => {
        heart.style.transform = "scale(1.3)";
        name.style.transform = "scale(1.05)";

        setTimeout(() => {
            heart.style.transform = "scale(1)";
            name.style.transform = "scale(1)";
        }, 200);

    }, 800);
}

// DOM READY
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    createFloatingHearts();
});
