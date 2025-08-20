const letters = [
    document.getElementById("DESIGND"),
    document.getElementById("DESIGNE"),
    document.getElementById("DESIGNS"),
    document.getElementById("DESIGNI"),
    document.getElementById("DESIGNG"),
    document.getElementById("DESIGNN"),
];

function animationDesign() {
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add("scale-up");
            setTimeout(() => {
                letter.classList.remove("scale-up");
            }, 800);
        }, index * 200);
    });
}

setInterval(animationDesign, 2000);

// Animation des lettre pour Une passion dans design

const passionletter = [
    // document.getElementById("letter1"), // U
    // document.getElementById("letter2"), // N
    // document.getElementById("letter3"), // E
    document.getElementById("letter4"), // &nbsp
    document.getElementById("letter5"), // P
    document.getElementById("letter6"), // A
    document.getElementById("letter7"), // S
    document.getElementById("letter8"), // S
    document.getElementById("letter9"), // I
    document.getElementById("letter10"), // O
    document.getElementById("letter11"), // N
];

function animationPassion() {
    passionletter.forEach((passionletter, index) => {
        setTimeout(() => {
            passionletter.classList.add("scale-up");
            setTimeout(() => {
                passionletter.classList.remove("scale-up");
            }, 700);
        }, index * 170);
    })
}

setInterval(animationPassion, 2000);

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
