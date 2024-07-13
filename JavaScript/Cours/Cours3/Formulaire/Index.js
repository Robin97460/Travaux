const inputs = document.querySelectorAll(
    `input[type="text"], input[type="password"]`
);
const button = document.querySelector("button");

const pseudoChecker = (value) => {
    const pseudoContainer = document.querySelector(".pseudoC");
    const errorDisplay = document.querySelector(".pseudoC > span");
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        console.log("t");
        pseudoContainer.classList.add("error");
        errorDisplay.textContent =
            "Le pseudo doit faire entre 3 et 20 caractères";
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        pseudoContainer.classList.add("error");
        errorDisplay.textContent =
            "Le pseudo ne peut pas contenir de caractères spéciaux";
    } else {
        pseudoContainer.classList.remove("error");
        errorDisplay.textContent = "";
    }
};

const emailChecker = (value) => {
    const emailContainer = document.querySelector(".emailC");

    if (value.length === 0 || value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        emailContainer.classList.remove("error");
    } else {
        emailContainer.classList.add("error");
    }
};

const passwordChecker = (value) => {
    const mdpContainer = document.querySelector(".mdpC");
    const errorDisplay2 = document.querySelector(".mdpC > span");
    const barre = document.querySelector("p");

    if (value.length === 0 || (value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        mdpContainer.classList.remove("error");
        errorDisplay2.textContent = "";
    } else {
        mdpContainer.classList.add("error");
        errorDisplay2.textContent =
            "Le mot de passe doit contenir au moins une majuscule et un chiffre";
    }

    if (value.length < 4) {
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
    } else {
        confirmContainer.classList.remove("error");
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
    button.addEventListener("click", () => {
        let data = [];
        data.push(pseudo.value);
        data.push(EMAIL.value);
        data.push(mdpInput.value);
        if (
            pseudo.value.length >= 3 &&
            pseudo.value.match(/^[a-zA-Z0-9_.-]*$/) &&
            EMAIL.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i) &&
            mdpInput.value.match(/[A-Z]/) &&
            mdpInput.value.match(/[0-9]/) &&
            confirm.value != mdpInput.value
        ) {
            console.log(data);
            main.location.reload();
        } else {
            alert("veuillez remplir le formulaire selon les critères");
        }
    });
});

//
