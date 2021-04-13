var array = [];
var numUtente;

/* for(var i = 0; i < 6 ; i++){
    var numUtente = parseInt(prompt("Inserisci un numero: "));
    if(numUtente%2){
        array.push(numUtente);
    }
}

console.log(array); */

var i = 0;

while(i < 6){
    var numUtente = parseInt(prompt("Inserisci un numero: "));
    if(numUtente%2){
        array.push(numUtente);
        i++;
    }
}

console.log(array);