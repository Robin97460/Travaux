// Créer un événement à la validation du form pour lancer le compte à rebours
const conteur = document.querySelector("#countdownDisplay");
const button = document.querySelector("input[type='submit']");
let totalSecondes;

button.addEventListener("click", (e) => {
    totalSecondes = choice.value * 60;
    e.preventDefault();
    if (choice.value <= 0) {
        alert("La valeur rentrées n'est pas valide");
    } else {
        clearInterval();
        conteur.innerHTML = "<h1>" + choice.value + ":" + "00" + "</h1>";
        boucle();
    }
});

const boucle = () => {
    totalSecondes--;
    let seconds = totalSecondes % 60;
    let minutes = Math.floor(totalSecondes / 60);
    setInterval(() => {
        minutes = Math.floor(totalSecondes / 60);
        seconds = totalSecondes % 60;
        if (seconds >= 10) {
            conteur.innerHTML = "<h1>" + minutes + ":" + seconds + "</h1>";
            totalSecondes--;
        } else if (totalSecondes == 0) {
            conteur.innerHTML = "<h1>FIN !!</h1>";
            stop();
        } else {
            conteur.innerHTML = "<h1>" + minutes + ":0" + seconds + "</h1>";
            totalSecondes--;
        }
    }, 1000);
};
