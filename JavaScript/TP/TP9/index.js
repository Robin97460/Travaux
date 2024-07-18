const link = "https://restcountries.com/v3.1/all";
const range = document.getElementById("inputRange");
const boites = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
let method = "maxToMin";
async function fetcher() {
    await fetch(link)
        .then((data) => data.json())
        .then((res) => (countrys = res));
    display();
}

function display() {
    boites.innerHTML = countrys
        .filter((country) =>
            country.translations.fra.common
                .toLowerCase()
                .includes(inputSearch.value.toLowerCase())
        )
        .sort((a, b) => {
            if (method == "maxToMin") {
                return b.population - a.population;
            } else if (method == "minToMax") {
                return a.population - b.population;
            } else if (method == "alpha") {
                return a.translations.fra.common.localeCompare(
                    b.translations.fra.common
                );
            }
        })
        .slice(0, range.value)
        .map(
            (country) =>
                `
        <div class="card">
            <img src="${country.flags.svg}">
            <h1>${country.translations.fra.common}</h1>
            <h2>${country.capital}</h2>
            <p>Population : ${country.population}</p>
        </div>
        
        
        
        
        `
        )
        .join("");
}
range.addEventListener("input", () => {
    rangeValue.textContent = range.value;
    fetcher();
});
inputSearch.addEventListener("input", fetcher);
btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        method = e.target.id;
        fetcher();
    });
});
fetcher();
