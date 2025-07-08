const fragments = [
    { text: "<", class: "text-bleuciel" },
    { text: "div", class: "text-red-400" },
    { text: " ", class: "" },
    { text: "class=", class: "text-orange-200" },
    { text: '"cartePrésentation block bg-[#1F2937] mx-auto rounded-xl w-25"', class: "text-emerald-500" },
    { text: ">", class: "text-bleuciel" },
];

const target = document.getElementById("paragrapheforcode");

let fragIndex = 0;
let charIndex = 0;
let currentSpan = null;

function typeNextLetter() {
    if (fragIndex >= fragments.length) {
        clearInterval(typingInterval);
        return;
    }

    const frag = fragments[fragIndex];

    if (charIndex === 0) {
        currentSpan = document.createElement("span");
        if (frag.class) currentSpan.classList.add(...frag.class.split(" "));
        target.appendChild(currentSpan);
    }

    currentSpan.textContent += frag.text.charAt(charIndex);
    charIndex++;

    if (charIndex >= frag.text.length) {
        fragIndex++;
        charIndex = 0;
    }
}

const typingInterval = setInterval(typeNextLetter, 50);



// Nav

document.addEventListener("DOMContentLoaded", () => {
    const menuMobile = document.getElementById("menumobile");
    const flecheBack = document.getElementById("flecheback");

    const burgerIcon = document.createElement("span");
    burgerIcon.id = "iconburger";
    burgerIcon.className =
        "material-symbols-outlined absolute top-0 left-0 text-bleuhovered cursor-pointer";
    burgerIcon.textContent = "menu";
    burgerIcon.style.display = "inline-block";

    const backDiv = flecheBack.parentElement;
    backDiv.appendChild(burgerIcon);

    menuMobile.style.transform = "translateX(-100%)";
    flecheBack.style.display = "none";
    burgerIcon.style.display = "inline-block";
    burgerIcon.style.position = "fixed";

    function ouvrirMenu() {
        menuMobile.style.transition = "transform 0.3s ease";
        menuMobile.style.transform = "translateX(0)";
        flecheBack.style.display = "inline-block";
        burgerIcon.style.display = "none";
    }

    function fermerMenu() {
        menuMobile.style.transition = "transform 0.3s ease";
        menuMobile.style.transform = "translateX(-100%)";
        flecheBack.style.display = "none";
        burgerIcon.style.display = "inline-block";
    }

    burgerIcon.addEventListener("click", ouvrirMenu);

    flecheBack.addEventListener("click", fermerMenu);
});
