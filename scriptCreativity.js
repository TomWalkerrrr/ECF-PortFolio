const body = document.getElementById("body");

const titlePageTop = document.getElementById("headertitle");
const sousTitlePage = document.getElementById("soustitle");
const titleInBox = document.getElementById("textcontainerprincipale");
const divBox =  document.getElementById("containerprincipale");
const sousTitleBox = document.getElementById("soustextprincipale");

const boitecreate = document.getElementById("boitecreate");
const createpage = document.getElementById("textcreate");
const fondlineaire = document.getElementById("linear");
const animation = document.getElementById("animation");
const colortext = document.getElementById("color");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const borderboite = document.getElementById("borderboite");
const tailletext = document.getElementById("tailletext");
const unrem = document.getElementById("unrem");
const deuxrem = document.getElementById("deuxrem");
const troisrem = document.getElementById("troisrem");
const quatrerem = document.getElementById("quatrerem");

const checkboxlinear = document.getElementById("checkboxlinear");
const animationcheck = document.getElementById("checkboxanimation");
const checkboxBorder = document.getElementById("checkboxborder");

// clique sur premiere checkbox 

checkboxlinear.addEventListener("change", (e) => {
    if (e.currentTarget.checked) {
        body.style.background = "linear-gradient(120deg, #38bdf8, #6366f1)"; // sky-400 → indigo-500
    } else {
        body.style.background = ""; // reset to default
    }
});

checkboxborder.addEventListener("change", (e) => {
    if (e.currentTarget.checked) {
        boitecreate.classList.remove("rounded-lg")
        borderboite.classList.remove("rounded-lg")
        divBox.classList.remove("rounded-lg")
    } else {
        boitecreate.classList.add("rounded-lg")
        divBox.classList.add("rounded-lg")
        borderboite.classList.add("rounded-lg")
    }
})


// red la couleur 

red.addEventListener("click", () => {
    titleInBox.classList.toggle("text-red-500");
    red.classList.toggle("text-red-500");
    animation.classList.toggle("text-red-500");
    fondlineaire.classList.toggle("text-red-500");
    colortext.classList.toggle("text-red-500");
    createpage.classList.toggle("text-red-500");
    tailletext.classList.toggle("text-red-500");
    sousTitlePage.classList.toggle("text-red-500");
    titlePageTop.classList.toggle("text-red-500");
    sousTitleBox.classList.toggle("text-red-500");
    borderboite.classList.toggle("text-red-500");
    divBox.classList.toggle("text-red-500");

    titleInBox.classList.toggle("text-white");
    red.classList.toggle("text-white");
    animation.classList.toggle("text-white");
    fondlineaire.classList.toggle("text-white");
    colortext.classList.toggle("text-white");
    createpage.classList.toggle("text-white");
    tailletext.classList.toggle("text-white");
    sousTitlePage.classList.toggle("text-white");
    titlePageTop.classList.toggle("text-white");
    sousTitleBox.classList.toggle("text-white");
    borderboite.classList.toggle("text-white");
    divBox.classList.toggle("text-white");
});


yellow.addEventListener("click", () => {
    titleInBox.classList.toggle("text-yellow-500");
    yellow.classList.toggle("text-yellow-500");
    animation.classList.toggle("text-yellow-500");
    fondlineaire.classList.toggle("text-yellow-500");
    colortext.classList.toggle("text-yellow-500");
    createpage.classList.toggle("text-yellow-500");
    tailletext.classList.toggle("text-yellow-500");
    sousTitlePage.classList.toggle("text-yellow-500");
    titlePageTop.classList.toggle("text-yellow-500");
    sousTitleBox.classList.toggle("text-yellow-500");
    borderboite.classList.toggle("text-yellow-500");
    divBox.classList.toggle("text-yellow-500");

    titleInBox.classList.toggle("text-white");
    yellow.classList.toggle("text-white");
    animation.classList.toggle("text-white");
    fondlineaire.classList.toggle("text-white");
    colortext.classList.toggle("text-white");
    createpage.classList.toggle("text-white");
    tailletext.classList.toggle("text-white");
    sousTitlePage.classList.toggle("text-white");
    titlePageTop.classList.toggle("text-white");
    sousTitleBox.classList.toggle("text-white");
    borderboite.classList.toggle("text-white");
    divBox.classList.toggle("text-white");
});

blue.addEventListener("click", () => {
    titleInBox.classList.toggle("text-blue-500");
    blue.classList.toggle("text-blue-500");
    animation.classList.toggle("text-blue-500");
    fondlineaire.classList.toggle("text-blue-500");
    colortext.classList.toggle("text-blue-500");
    createpage.classList.toggle("text-blue-500");
    tailletext.classList.toggle("text-blue-500");
    sousTitlePage.classList.toggle("text-blue-500");
    titlePageTop.classList.toggle("text-blue-500");
    sousTitleBox.classList.toggle("text-blue-500");
    borderboite.classList.toggle("text-blue-500");
    divBox.classList.toggle("text-blue-500");

    titleInBox.classList.toggle("text-white");
    blue.classList.toggle("text-white");
    animation.classList.toggle("text-white");
    fondlineaire.classList.toggle("text-white");
    colortext.classList.toggle("text-white");
    createpage.classList.toggle("text-white");
    tailletext.classList.toggle("text-white");
    sousTitlePage.classList.toggle("text-white");
    titlePageTop.classList.toggle("text-white");
    sousTitleBox.classList.toggle("text-white");
    borderboite.classList.toggle("text-white");
    divBox.classList.toggle("text-white");
});

unrem.addEventListener("click", () => {
    titleInBox.classList.toggle("text-base");
    unrem.classList.toggle("text-base");
    animation.classList.toggle("text-base");
    fondlineaire.classList.toggle("text-base");
    colortext.classList.toggle("text-base");
    createpage.classList.toggle("text-base");
    tailletext.classList.toggle("text-base");
    sousTitlePage.classList.toggle("text-base");
    titlePageTop.classList.toggle("text-base");
    unrem.classList.toggle("text-red-500");
    sousTitleBox.classList.toggle("text-base");
    borderboite.classList.toggle("text-base");
    divBox.classList.toggle("text-base");
});

deuxrem.addEventListener("click", () => {
    titleInBox.classList.toggle("text-2xl");
    deuxrem.classList.toggle("text-2xl");
    animation.classList.toggle("text-2xl");
    fondlineaire.classList.toggle("text-2xl");
    colortext.classList.toggle("text-2xl");
    createpage.classList.toggle("text-2xl");
    tailletext.classList.toggle("text-2xl");
    deuxrem.classList.toggle("text-red-500");
    sousTitlePage.classList.toggle("text-2xl");
    titlePageTop.classList.toggle("text-2xl");
    sousTitleBox.classList.toggle("text-2xl");
    borderboite.classList.toggle("text-2xl");
    divBox.classList.toggle("text-2xl");
});

troisrem.addEventListener("click", () => {
    titleInBox.classList.toggle("text-5xl");
    troisrem.classList.toggle("text-5xl");
    animation.classList.toggle("text-5xl");
    fondlineaire.classList.toggle("text-5xl");
    troisrem.classList.toggle("text-red-500");
    colortext.classList.toggle("text-5xl");
    createpage.classList.toggle("text-5xl");
    tailletext.classList.toggle("text-5xl");
    sousTitlePage.classList.toggle("text-5xl");
    titlePageTop.classList.toggle("text-5xl");
    sousTitleBox.classList.toggle("text-5xl");
    borderboite.classList.toggle("text-5xl");
    divBox.classList.toggle("text-5xl");
});

animationcheck.addEventListener("change", (e) => {
    divBox.classList.toggle("moveplateform");
    titleInBox.classList.toggle("textzoom");
    titlePageTop.classList.toggle("textzoom");
    sousTitleBox.classList.toggle("textzoom");
    sousTitlePage.classList.toggle("textzoom");
    createpage.classList.toggle("textzoom");
    divBox.classList.toggle("textzoom");
})





// nav 

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

