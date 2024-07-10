// let f = "hello";
// let g = "clique sur ok";
// alert(g);
// console.log(f);

// Variables :
var txt = "texte";

// Constante :
const prenom = "Ju";

console.log(txt);
console.log(prenom);

let nombre = 2;

console.log(nombre);
nombre = 5;
console.log(nombre);

let newtxt = txt + " " + prenom;
console.log(newtxt);

let othertxt = `ok c'est stylé ${prenom} , t'es vraiment la meilleur`;

// Types de données

let string = "string";
let number = "24";
let boolean = false; //or true
let array = [1, 2, 3, true, "ouais"];
let object = {
    prenom: "audrey",
    age: 33,
    ville: "bordeau",
};
let not_assigned;

not_assigned = 86;

// Controle
let x = 2;
let y = 2;

// if (x > y) {
//     alert(true);
// } else if (x < y) {
//     alert(false);
// } else {
//     alert("égal");
// }

// if (x) alert("x existe");

// === test l'égalité du type et de la valeur
// == test l'égalité de valeur

let z = "3";
let w = 3;

if (z === w) {
    console.log(true);
} else console.log(false);

if (z == w) {
    console.log(true);
} else console.log(false);

// || = or
// && = and

// fonctions :

function addition(a, b) {
    console.log(a + b);
}

const soustration = (a, b) => {
    console.log(a - b);
};

// return marche comme dans python
