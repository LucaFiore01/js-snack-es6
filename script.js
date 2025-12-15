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

// Passo 4: Stampare a schermo la bici con il peso minore
// Utilizziamo console.log per mostrare il nome e il peso della bici più leggera
console.log(`La bici con il peso minore è: ${biciLeggera.nome}, con un peso di ${biciLeggera.peso} kg.`);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// Passo 1: Creare un array di oggetti rappresentanti le squadre di calcio
// Ogni oggetto avrà le proprietà 'nome', 'puntiFatti' (inizialmente 0), 'falliSubiti' (inizialmente 0)
const squadre = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 }
];



