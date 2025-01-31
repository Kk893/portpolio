// typhographic.js - Glitch Effect on Hover
const word = document.querySelector(".glitch-text");
const originalText = word.innerText;
let isAnimating = false;

function getRandomChar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
    return chars[Math.floor(Math.random() * chars.length)];
}

function glitchEffect() {
    if (isAnimating) return;
    isAnimating = true;
    let iterations = 0;
    const interval = setInterval(() => {
        word.innerText = originalText
            .split("")
            .map((char, i) => (Math.random() > 0.5 ? getRandomChar() : char))
            .join("");

        iterations++;
        if (iterations > 10) {
            clearInterval(interval);
            word.innerText = originalText;
            isAnimating = false;
        }
    }, 100);
}

word.addEventListener("mouseenter", glitchEffect);
