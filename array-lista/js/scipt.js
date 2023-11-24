let array = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
// let cerca = prompt('cerca nel frigo')



let flag = false
for(i=0 ; i<array.length;i++){
     if(array[i] == "cocomero"){
          flag=true
     }
}

if(flag){
     console.log("Trovato! Devo solo preparare il cocktail.")
}
else{
     console.log("Oh no, devo uscire a comprare il cocomero!")
}




