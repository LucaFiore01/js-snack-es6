// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    { nome: 'Bici1', peso: 8.5 },
    { nome: 'Bici2', peso: 7.2 },
    { nome: 'Bici3', peso: 9.1 },
    { nome: 'Bici4', peso: 6.8 },
    { nome: 'Bici5', peso: 8.0 }
];

// Passo 2: Inizializzare una variabile per tenere traccia della bici con il peso minore
// Partiamo assumendo che la prima bici sia quella con peso minore
let biciLeggera = bici[0];

// Passo 3: Ciclo attraverso l'array per confrontare i pesi
// Per ogni bici nell'array, controlliamo se il suo peso è minore di quello della bici attualmente considerata leggera
for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}


