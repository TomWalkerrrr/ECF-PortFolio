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