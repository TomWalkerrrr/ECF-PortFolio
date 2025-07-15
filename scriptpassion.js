const fragments = [
    { text: "<", class: "text-blue-400" },
    { text: "div", class: "text-red-400", domSelector: ".carte", applyClass: "carte mt-5 bg-[#1F2937] border border-stone-500 rounded-lg p-2 w-64 mx-auto rouded-xl h-auto" },
    { text: " class=", class: "text-yellow-400" },
    { text: '"carte mt-5 bg-[#1F2937] border border-stone-500 rounded-lg p-2 w-64 mx-auto rouded-xl h-auto"', class: "text-green-400" },
    { text: ">", class: "text-blue-400" },
    { text: "\n  ", class: "" },

    { text: "<", class: "text-blue-400" },
    { text: "div", class: "text-red-400", domSelector: ".insidecard", applyClass: "insidecard text-white" },
    { text: " class=", class: "text-yellow-400" },
    { text: '"insidecard text-white"', class: "text-green-400" },
    { text: ">", class: "text-blue-400" },
    { text: "\n    ", class: "" },

    { text: "<h2", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(1)", applyClass: "text-2xl uppercase text-center font-bakbakone" },
    { text: ">", class: "text-blue-400" },
    { text: "Réalisation", class: "text-white" },
    { text: "</h2>", class: "text-blue-400" },
    { text: "\n    <br><br>\n", class: "text-white" },

    { text: "<h2", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(2)", applyClass: "text-xl font-bakbakone text-bleuciel pl-2" },
    { text: ">", class: "text-blue-400" },
    { text: "FrameWork utilisé :", class: "text-white" },
    { text: "</h2>\n", class: "text-blue-400" },

    { text: "<p", class: "text-red-400", domSelector: ".insidecard p:nth-of-type(1)", applyClass: "pl-4 text-lg font-asapcondensed tracking-widest" },
    { text: ">", class: "text-blue-400" },
    { text: " - TailWind", class: "text-white" },
    { text: "</p>\n    <br><br>\n", class: "text-white" },

    { text: "<h2", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(3)", applyClass: "text-xl font-bakbakone text-bleuciel pl-2 w-40" },
    { text: ">", class: "text-blue-400" },
    { text: "Développeur :", class: "text-white" },
    { text: "</h2>\n", class: "text-blue-400" },

    { text: "<p", class: "text-red-400", domSelector: ".insidecard p:nth-of-type(2)", applyClass: "pl-4 text-lg font-asapcondensed tracking-widest w-36" },
    { text: ">", class: "text-blue-400" },
    { text: " - Tom REGNIER", class: "text-white" },
    { text: "</p>\n", class: "text-white" },

    { text: "<div", class: "text-red-400", domSelector: ".containerimg", applyClass: "containerimg flex float-right" },
    { text: ">", class: "text-blue-400" },
    { text: "\n      ", class: "" },

    { text: "<img", class: "text-red-400", domSelector: ".containerimg img", applyClass: "w-14 relative bottom-14 right-2" },
    { text: " src=", class: "text-yellow-400" },
    { text: '"./asset/logo/cropped_circle_image.webp"', class: "text-green-400" },
    { text: " alt=", class: "text-yellow-400" },
    { text: '"Image de profile de moi"', class: "text-green-400" },
    { text: ">", class: "text-blue-400" },
    { text: "\n    </div>\n", class: "text-white" },

    { text: "<hr", class: "text-red-400", domSelector: ".insidecard hr", applyClass: "mt-5 flex ml-12" },
    { text: ">", class: "text-blue-400" },
    { text: "\n    <br><br>\n", class: "text-white" },

    { text: "<h2", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(4)", applyClass: "text-center text-2xl font-asapcondensed" },
    { text: ">", class: "text-blue-400" },

    { text: "<span", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(4) span:nth-of-type(1)", applyClass: "material-symbols-outlined text-bleuciel relative right-7 top-2 text-4xl" },
    { text: ">", class: "text-blue-400" },
    { text: "lift_to_talk", class: "text-white" },
    { text: "</span>", class: "text-blue-400" },

    { text: "MobileFirst", class: "text-white" },

    { text: "<span", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(4) span:nth-of-type(2)", applyClass: "material-symbols-outlined text-bleuciel relative left-7 top-2 text-4xl" },
    { text: ">", class: "text-blue-400" },
    { text: "lift_to_talk", class: "text-white" },
    { text: "</span>", class: "text-blue-400" },

    { text: "</h2>\n", class: "text-blue-400" },

    { text: "<h2", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(5)", applyClass: "text-center text-2xl font-asapcondensed" },
    { text: ">", class: "text-blue-400" },
    { text: "Responsive", class: "text-white" },
    { text: "</h2>\n", class: "text-blue-400" },

    { text: "<h2", class: "text-red-400", domSelector: ".insidecard h2:nth-of-type(6)", applyClass: "text-center text-2xl font-asapcondensed" },
    { text: ">", class: "text-blue-400" },
    { text: "Accèssibilité", class: "text-white" },
    { text: "</h2>\n", class: "text-blue-400" },

    { text: "</div>\n", class: "text-blue-400" },
    { text: "</div>", class: "text-blue-400" },
];

const target = document.getElementById("paragrapheforcode");
let fragIndex = 0, charIndex = 0, currentSpan;

function typeNext() {
    if (fragIndex >= fragments.length) return clearInterval(timer);

    const frag = fragments[fragIndex];
    if (charIndex === 0) {
        currentSpan = document.createElement("span");
        if (frag.class) currentSpan.classList.add(...frag.class.split(" "));
        target.appendChild(currentSpan);
    }

    currentSpan.textContent += frag.text.charAt(charIndex++);
    if (charIndex >= frag.text.length) {
        if (frag.domSelector) {
            const el = document.querySelector(frag.domSelector);
            if (el) {
                frag.applyClass.split(" ").forEach(c => {
                    if (c.trim() !== "") el.classList.add(c.trim());
                });
            }
        }
        fragIndex++;
        charIndex = 0;
    }
    target.scrollTop = target.scrollHeight;
}

const timer = setInterval(typeNext, 25);


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
