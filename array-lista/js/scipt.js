// creo l array con i vari elementi
let array = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']


// let cerca = prompt('cerca nel frigo')


// assegno un valore di default a flag
let flag = false

// creo un ciclo for che si ripete il numero di volte quanti sono gli elementi nel array
for(i=0 ; i<array.length;i++){
     // se nel array ce "cocomero" flag diventa true
     if(array[i] == "cocomero"){
          flag=true
     }
}

// se flag e diventato true abbiamo il cocomero altrimenti no
if(flag){
     console.log("Trovato! Devo solo preparare il cocktail.")
}
else{
     console.log("Oh no, devo uscire a comprare il cocomero!")
}




