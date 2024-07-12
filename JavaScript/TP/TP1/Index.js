const mouse = document.querySelector(".remplacementsouris");
const first = document.querySelector(".premiercercle");
const second = document.querySelector(".secondcercle");

const moove = (x, y) => {
    mouse.style.top = y + "px";
    mouse.style.left = x + "px";
    first.style.top = y + "px";
    first.style.left = x + "px";
    second.style.top = y + "px";
    second.style.left = x + "px";
};

window.addEventListener("mousemove", (e) => {
    moove(e.pageX, e.pageY);
});

// on peut utiliser un ForEach pour englober tous les cercles ebnsembles, mais dans ce cas il faut que tous les cercles est une classe commune , cela permet également de rapetissir le code CSS en mettant tous les styles en commun a cette meme classe.
