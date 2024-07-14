const tacheContainer = document.querySelector(".tache");
const form = document.querySelector("form");

// Storage
function storage() {
    window.localStorage.TodoList = tacheContainer.innerHTML;
}
function getTodos() {
    if (window.localStorage.TodoList) {
        tacheContainer.innerHTML = window.localStorage.TodoList;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tacheContainer.innerHTML += "<li>" + input.value + "</li>";
    input.value = "";
    storage();
});

tacheContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("action")) {
        e.target.remove();
    } else {
        e.target.classList.add("action");
    }
    storage();
});

getTodos();
