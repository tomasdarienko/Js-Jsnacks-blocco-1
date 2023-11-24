// dichiaro le variabili
let ncasuale, N, array, lung


// faccio inserire un numero
N = prompt('inserisci un numero (valore min "5")')


// creo un array vuoto
array = []


// creo un ciclo for contenente una variabile che genera un numero da 1 a 100 che si ripete il numero di volte inserito dall utente
for (let i = 0; i < N; i++) {
     ncasuale = Math.round(Math.random() * (100 - 1) + 1);

     // infilo ogni numero casuale nel array
     array.push(ncasuale)
}



// seleziono gli ultimi 5 elementi del array

// console.log(array);
lung = array.slice(-5);
console.log(lung)
