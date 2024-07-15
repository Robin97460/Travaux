const button = document.querySelector("button");
const Start = document.getElementById("start_date");
const End = document.getElementById("end_date");

window.addEventListener("load", () => {
    newdate = new Date();
    newdate = Date.parse(newdate);
    newdate = dateParser(newdate);
    [d, m, y] = newdate.split("/");
    newdate = y + "-" + m + "-" + d;
    Start.min = newdate;
    d++;
    newdate = y + "-" + m + "-" + d;
    End.min = newdate;
});

button.addEventListener("click", () => {
    if (valeur.value && End.value && Start.value) {
        let startDay = Date.parse(start_date.value);
        let endDay = Date.parse(end_date.value);
        nights = (endDay - startDay) / (3600 * 24 * 1000);
        total.textContent = nights * valeur.value;
    } else {
        alert("ajoutez les informations de voyages");
    }
});

Start.addEventListener("change", () => {
    let startDay = Date.parse(start_date.value);
    let endDay = Date.parse(end_date.value);
    if (startDay >= endDay) {
        newdate = startDay + 3600 * 24 * 1000;
        newdate = dateParser(newdate);
        [d, m, y] = newdate.split("/");
        newdate = y + "-" + m + "-" + d;
        End.value = newdate;
    }
    minimumEnd();
});

function minimumEnd() {
    let startDay = Date.parse(start_date.value);
    DatedeFin = startDay + 3600 * 24 * 1000;
    DatedeFin = dateParser(DatedeFin);
    [d, m, y] = DatedeFin.split("/");
    DatedeFin = y + "-" + m + "-" + d;
    End.min = DatedeFin;
}

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    return newDate;
}
