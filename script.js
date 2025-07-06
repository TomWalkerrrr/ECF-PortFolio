document.addEventListener("DOMContentLoaded", () => {
  const menuMobile = document.getElementById("menumobile");
  const flecheBack = document.getElementById("flecheback");

  const burgerIcon = document.createElement("span");
  burgerIcon.id = "iconburger";
  burgerIcon.className =
    "material-symbols-outlined absolute top-0 left-0 text-bleuhovered cursor-pointer";
  burgerIcon.textContent = "menu";
  burgerIcon.style.display = "inline-block";

  const backDiv = flecheBack.parentElement; // selection du parent
  backDiv.appendChild(burgerIcon); // Ajoute l'élément burgerIcon au parent

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

// Underline partie And All declaration

const introductionUnder = document.getElementById("introduction");
const passionUnder = document.getElementById("passion");
const presentation = document.getElementById("presentation");

// Who i am partie
const whoiam = document.getElementById("whoiam");

// L'éffet écriture

const finalText = "Qui je suis ?|";
let i = 0;

function typeWriter() {
  if (i < finalText.length) {
    whoiam.textContent = finalText.substring(0, i);
    i++;
    setTimeout(typeWriter, 900);
  }
}

// Animation de fonds

let x = 0;
let y = 0;

function moveBackground() {
  x += 0.06;
  y += 0.02;
  document.body.style.backgroundPosition = `${x}px ${y}px`;
  requestAnimationFrame(moveBackground);
}

if (document.body.dataset.page === "index") {
  moveBackground();
}

// Animation de fonds

// Présentation éffet

// Présentation éffet

// L'éffet écriture

document.addEventListener("DOMContentLoaded", () => {
  const whoiam = document.getElementById("whoiam");
  const presentation = document.getElementById("presentation");
  const introductionUnder = document.getElementById("introduction");

  let whoiamTriggered = false;
  let presentationTriggered = false;
  let passionTriggered = false;
  let introductionTriggered = false;

  // Effet écriture une fois seulement
  let i = 0;
  const finalText = "Qui je suis ?|";

  function typeWriter() {
    if (i < finalText.length) {
      whoiam.textContent = finalText.substring(0, i);
      i++;
      setTimeout(typeWriter, 150);
    }
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Animation "Who I am"
    if (scrollY > 500 && !whoiamTriggered) {
      whoiam.style.fontSize = "2.2rem";
      typeWriter();
      whoiamTriggered = true;
    } else if (scrollY <= 500 && whoiamTriggered) {
      whoiam.style.fontSize = "1.875rem";
      whoiam.textContent = "Qui je suis ?";
      whoiamTriggered = false;
      i = 0; // reset typewriter index si on veut refaire l'effet
    }

    // Animation présentation
    if (scrollY > 600 && !presentationTriggered) {
      presentation.style.fontSize = "2.2rem";
      presentationTriggered = true;
    } else if (scrollY <= 600 && presentationTriggered) {
      presentation.style.fontSize = "1.875rem";
      presentationTriggered = false;
    }

    // Animation introduction underline
    if (scrollY > 675 && !introductionTriggered) {
      introductionUnder.style.textDecoration = "underline";
      introductionUnder.style.fontSize = "1.8rem";
      introductionUnder.classList.add(
        "relative left-1/2 -translate-x-1/2 w-fit"
      );
      introductionUnder.style.color = "#18D8FB";
      introductionTriggered = true;
    } else if (scrollY <= 675 && introductionTriggered) {
      introductionUnder.style.textDecoration = "none";
      introductionUnder.style.fontSize = "1.5rem";
      introductionUnder.classList.remove(
        "relative left-1/2 -translate-x-1/2 w-fit"
      );
      introductionUnder.style.color = ""; // reset couleur
      introductionTriggered = false;
    }

    if (scrollY > 825 && !passionTriggered) {
      passionUnder.style.textDecoration = "underline";
      passionUnder.style.fontSize = "1.8rem";
      passionUnder.classList.add("relative left-1/2 -translate-x-1/2 w-fit");
      passionTriggered = true;
      passionUnder.style.color = "#18D8FB";
    } else if (scrollY <= 825 && passionTriggered) {
      passionUnder.style.textDecoration = "none";
      passionUnder.style.fontSize = "1.5rem";
      passionUnder.classList.remove("relative left-1/2 -translate-x-1/2 w-fit");
      passionUnder.style.color = "";
      passionTriggered = false;
    }
  });
});

// Who i am partie
