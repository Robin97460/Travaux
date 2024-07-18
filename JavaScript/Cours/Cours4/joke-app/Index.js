const box = document.querySelector(".app");
function blague() {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((info) => {
            let data = info.data.content;
            header.textContent = data.text_head;
            content.textContent = data.text ? data.text : data.text_hidden;
        });
}

blague();

box.addEventListener("click", blague);
