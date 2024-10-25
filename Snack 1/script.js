/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore*/

// creao una Array con dei oggetti bici e loro peso

const bicidacorsa = [
    { name: "biciOne", peso: 18 },
    { name: "biciTwo", peso: 15 },
    { name: "biciThree", peso: 12 },
];


let bicileggera = bicidacorsa[0];

for (let i = 0; i < bicidacorsa.length; i++) {
    if (bicidacorsa[i].peso < bicileggera.peso){
        bicileggera = bicidacorsa[i];
    }
}
console.log(`la bici piu leggere è ${bicileggera.name} con pese ${bicileggera.peso}`);