const nav = document.querySelector("nav");
const plot = document.querySelector("#plot");
const pop = document.querySelector(".pop-up");
const X = document.querySelector("i");
let TF = true;
let Y = 0;

window.addEventListener("scroll", () => {
    let hauteur =
        document.body.offsetHeight - (window.scrollY + window.innerHeight);
    pop.style.transition = "0s";
    pop.style.bottom = hauteur + "px";

    if (Y > window.scrollY) {
        nav.style.height = "10vh";
    } else {
        nav.style.height = "4vh";
    }
    Y = window.scrollY;

    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.5) {
        plot.style.opacity = "1";
        plot.style.transform = "translateX(0px)";
    }

    if (scrollValue > 0.9 && TF) {
        pop.style.transition = "1s";
        pop.style.opacity = "1";
        pop.style.transform = "translateX(0px)";
    }
});

X.addEventListener("click", () => {
    pop.style.transition = "1s";
    pop.style.opacity = "0";
    pop.style.transform = "translateX(500px)";
    TF = false;
});
submit.addEventListener("click", () => {
    pop.style.display = "none";
});
