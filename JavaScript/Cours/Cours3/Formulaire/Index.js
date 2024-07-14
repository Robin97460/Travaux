const inputs = document.querySelectorAll(
    `input[type="text"], input[type="password"]`
);
const button = document.querySelector("input[type='submit']");
const form = document.querySelector("form");

let Pseudo, Email, PassWord, Confirmation;

const pseudoChecker = (value) => {
    const pseudoContainer = document.querySelector(".pseudoC");
    const errorDisplay = document.querySelector(".pseudoC > span");
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        pseudoContainer.classList.add("error");
        errorDisplay.textContent =
            "Le pseudo doit faire entre 3 et 20 caractères";
        Pseudo = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        pseudoContainer.classList.add("error");
        errorDisplay.textContent =
            "Le pseudo ne peut pas contenir de caractères spéciaux";
        Pseudo = null;
    } else {
        pseudoContainer.classList.remove("error");
        errorDisplay.textContent = "";
        Pseudo = value;
    }
};

const emailChecker = (value) => {
    const emailContainer = document.querySelector(".emailC");

    if (value.length === 0 || value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        emailContainer.classList.remove("error");
        Email = value;
    } else {
        emailContainer.classList.add("error");
        Email = null;
    }
};

const passwordChecker = (value) => {
    const mdpContainer = document.querySelector(".mdpC");
    const errorDisplay2 = document.querySelector(".mdpC > span");
    const barre = document.querySelector("p");

    if (value.length === 0 || (value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        mdpContainer.classList.remove("error");
        errorDisplay2.textContent = "";
        PassWord = value;
    } else {
        mdpContainer.classList.add("error");
        errorDisplay2.textContent =
            "Le mot de passe doit contenir au moins une majuscule et un chiffre";
        PassWord = null;
    }

    if (value.length === 0) {
        barre.classList.remove("progressRed");
    } else if (value.length < 4) {
        barre.classList.remove("progressGreen");
        barre.classList.remove("progressBlue");
        barre.classList.add("progressRed");
    } else if (value.length < 9) {
        barre.classList.remove("progressGreen");
        barre.classList.remove("progressRed");
        barre.classList.add("progressBlue");
    } else {
        barre.classList.remove("progressRed");
        barre.classList.remove("progressBlue");
        barre.classList.add("progressGreen");
    }
};

const confirmChecker = (value) => {
    const confirmContainer = document.querySelector(".confirmC");
    const mdp = document.querySelector(".mdpC > input");
    if (value != mdp.value) {
        confirmContainer.classList.add("error");
        Confirmation = null;
    } else {
        confirmContainer.classList.remove("error");
        Confirmation = value;
    }
};

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "EMAIL":
                emailChecker(e.target.value);
                break;
            case "mdpInput":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
            default:
                nul;
        }
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitContainer = document.querySelector(".submit");
        if (Pseudo && Email && PassWord && Confirmation) {
            const data = {
                pseudo: pseudo.value,
                email: EMAIL.value,
                mdp: mdpInput.value,
            };
            console.log(data);
            pseudo.value = null;
            EMAIL.value = null;
            mdpInput.value = null;
            confirm.value = null;
            submitContainer.classList.remove("error");
        } else {
            submitContainer.classList.add("error");
        }
    });
});
