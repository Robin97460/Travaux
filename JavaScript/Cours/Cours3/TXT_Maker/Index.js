const target = document.getElementById("target");

let words = ["développeur", "photographe", "créatif"];
let Indexmot = 0;
let Indexlettre = 0;

const creat = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = words[Indexmot][Indexlettre];

    setTimeout(() => {
        letter.remove();
    }, 2000);
};

const loop = () => {
    setTimeout(() => {
        if (Indexmot >= words.length) {
            Indexlettre = 0;
            Indexmot = 0;
            loop();
        } else if (Indexlettre < words[Indexmot].length) {
            creat();
            Indexlettre++;
            loop();
        } else {
            Indexmot++;
            Indexlettre = 0;
            setTimeout(() => {
                loop();
            }, 2800);
        }
    }, 100);
};

loop();
