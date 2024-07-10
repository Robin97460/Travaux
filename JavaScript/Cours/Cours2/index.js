const réponse = document.querySelector("p");
const txt = document.querySelector(".answer");
const faux = document.getElementById("False");
const vrai = document.querySelector("#True");
const BoxQuestion = document.querySelector(".Q");

vrai.addEventListener("click", () => {
    réponse.style.color = "green";
    réponse.style.visibility = "visible";
});

faux.addEventListener("click", () => {
    réponse.style.color = "red";
    réponse.style.visibility = "visible";
});

réponse.addEventListener("click", () => {
    txt.classList.toggle("answer-clicked");
});

const mouse = document.querySelector(".mouvementsouris");

window.addEventListener("mousemove", (e) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mouse.style.transition = "0.5s";
    mouse.style.transform = "scale(4) translate(-12.5%, -12.5%)";
});
window.addEventListener("mouseup", () => {
    mouse.style.transition = "0.5s";
    mouse.style.transform = "scale(1) translate(-50%, -50%)";
});

const backkey = document.querySelector(".whatkey");
const key = document.getElementById("key");
const son = () => {
    const mp3 = new Audio();
    mp3.src = "./Assets/Enter.mp3";
    mp3.play();
};

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "1") {
        backkey.style.background = "teal";
    } else {
        backkey.style.background = "black";
    }
    son();
});

faux.addEventListener("click", () => {
    confirm("c'est votre ultime bafouille ??");
    let nom = prompt("Entrez votre nom !");

    BoxQuestion.innerHTML += "<h3> dommage " + nom + "</h3>";
    BoxQuestion.querySelector("h3").style.textTransform = "Uppercase";
});
vrai.addEventListener("click", () => {
    confirm("c'est votre ultime bafouille ??");
    let nom = prompt("Entrez votre nom !");

    BoxQuestion.innerHTML += "<h3> BRAVO " + nom + "</h3>";
    BoxQuestion.querySelector("h3").style.textTransform = "Uppercase";
});
