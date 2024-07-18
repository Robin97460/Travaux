const link = "https:www.themealdb.com/api/json/v1/1/search.php?s";
const form = document.querySelector("form");
const result = document.getElementById("result");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await fetch(link + "=" + search.value)
        .then((data) => data.json())
        .then((data) => {
            meals = data.meals;
        });
    mealdisplay();
    search.value = null;
});

function mealdisplay() {
    if (meals === null) {
        result.innerHTML =
            "<h2>Aucun plat n'est attribuer à cette ingrédient</h2>";
    } else {
        meals.length = 12;
        result.innerHTML = meals
            .map((meal) => {
                let ingredients = [];
                for (i = 1; i < 21; i++) {
                    if (meal[`strIngredient${i}`]) {
                        let ingredient = meal[`strIngredient${i}`];
                        let measure = meal[`strMeasure${i}`];

                        ingredients.push(`<li>${ingredient} - ${measure}</li>`);
                    }
                }
                return `
                    <li>
                        <h2>${meal.strMeal}</h2>
                        <p>${meal.strArea}</p>
                        <img src="${meal.strMealThumb}" alt="picture of ${
                    meal.strMeal
                } ">
                        <ul>${ingredients.join("")}</ul>
                    </li>
                    `;
            })
            .join("");
    }
}
