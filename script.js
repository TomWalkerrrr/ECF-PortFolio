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

window.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;

  console.log(scrollY);

  // Scroll pour l'élément WhoIAm (Qui je suis)
  if (scrollY > 500) {
    whoiam.style.fontSize = "2.2rem";
    typeWriter();
  } else if (scrollY < 500) {
    console.log("test");
    whoiam.style.fontSize = "1.875rem";
  }
  // Scroll pour l'élément WhoIAm (Qui je suis)

  // Scroll pour présentation
  if (scrollY > 600) {
    presentation.style.fontSize = "2.2rem";
  } else if (scrollY < 600 || scrollY > 665) {
    presentation.style.fontSize = "1.875rem";
  }
  // Scroll pour présentation

  if (scrollY > 675) {
    introductionUnder.style.textDecoration = "underline";
    introductionUnder.style.fontSize = "1.8rem";
    introductionUnder.style.transform = "translate(50%)";
    setTimeout(() => {
      introductionUnder.style.color = "red";
    }, 500);
  } else if (scrollY < 675) {
    introductionUnder.style.textDecoration = "none";
    introductionUnder.style.fontSize = "1.5rem";
    introductionUnder.style.transform = "translate(0%)";
  }
});
// Who i am partie
