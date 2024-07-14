let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

const back = document.querySelector(".back");
const span = document.querySelector("span");

const loop = () => {
    back.style.background = "rgb(" + red + "," + green + "," + blue + ")";
    span.innerHTML = red + ", " + green + ", " + blue;
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    setTimeout(() => {
        loop();
    }, 5000);
};
loop();
