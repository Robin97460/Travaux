const icone = document.querySelector(".icone");
const back = document.querySelector(".back");
const bar = document.querySelector(".bar");

icone.addEventListener("click", () => {
    bar.classList.toggle("bartoggle");
    icone.classList.toggle("iconeclick");
});
back.addEventListener("click", () => {
    bar.classList.remove("bartoggle");
    icone.classList.remove("iconeclick");
});
