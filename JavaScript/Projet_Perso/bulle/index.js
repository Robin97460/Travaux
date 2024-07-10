const counterDisplay = document.querySelector("h1");
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    const size = Math.random() * 100 + 100 + "px";

    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 70 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    bubble.style.setProperty("--left", Math.random() * 100 + "%");

    bubble.addEventListener("click", () => {
        bubble.remove();
        counter += 1;
        counterDisplay.textContent = counter;
    });

    setTimeout(() => {
        bubble.remove();
    }, 8100);
};

setInterval(bubbleMaker, 300);
