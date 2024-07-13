const min = "azertyuiopqsdfghjklmwxcvbn";
const maj = min.toUpperCase();
const num = "0123456789";
const symb = '?,.;/:§!%*¨^£$+=-_#~&éèàçùµ"';
const range = document.getElementById("length");
const mdp = document.getElementById("motdepasse");
const icone = document.querySelector("i");

function Génération() {
    let data = [];
    let password = "";

    if (az.checked) data.push(...min);
    if (AZ.checked) data.push(...maj);
    if (numb.checked) data.push(...num);
    if (signe.checked) data.push(...symb);

    for (i = 0; i < range.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    mdp.value = password;
}

button.addEventListener("click", Génération);

icone.addEventListener("click", () => {
    mdp.select();
    navigator.clipboard.writeText(mdp.value);

    icone.style.transform = "scale(1.2)";
    icone.style.color = "greenyellow";

    setTimeout(() => {
        icone.style.transform = "none";
        icone.style.color = "white";
    }, 1000);
});
