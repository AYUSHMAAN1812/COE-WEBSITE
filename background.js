const strongText = document.getElementById('strong-text');
const fullText = "Inventing & Innovating in Technologies for Humanity";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        strongText.innerText = fullText.substring(0, index + 1);
        index++;
        if (index === fullText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        strongText.innerText = fullText.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? 30 : 50);
}

window.onload = typeEffect;