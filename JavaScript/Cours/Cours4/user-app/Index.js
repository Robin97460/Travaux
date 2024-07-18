const fetchuser = async () => {
    await fetch("https://randomuser.me/api/?results=24")
        .then((res) => res.json())
        .then((data) => (results = data.results));

    console.log(results[0]);
};

const affichage = async () => {
    await fetchuser();
    let years = 0;
    let mounth = 0;
    let jours = 0;

    function dateParser(chaine) {
        let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return newDate;
    }

    function daycalc(date) {
        let today = new Date();
        today = Math.floor(Date.parse(today) / 1000);
        date = Math.floor(Date.parse(date) / 1000);
        let durée = today - date;
        if (durée >= 3600 * 24 * 365) {
            years = Math.floor(durée / (365 * 24 * 3600));
            durée = durée % (365 * 3600 * 24);
        }
        if (durée >= 3600 * 24 * 30) {
            mounth = Math.floor(durée / (30 * 24 * 3600));
            durée = durée % (30 * 3600 * 24);
        }
        if (durée >= 3600 * 24) {
            jours = Math.ceil(durée / (24 * 3600));
        }
        return years + "ans " + mounth + "mois " + jours + "jours";
    }
    document.body.innerHTML = results.map(
        (user) =>
            `
        <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.first}">
            <h3>${user.name.first}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em> Membre depuis : ${daycalc(user.registered.date)} </em>
        </div>
        
        `
    );
};
affichage();
