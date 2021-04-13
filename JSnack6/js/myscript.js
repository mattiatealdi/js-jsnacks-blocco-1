/* var quantiNumeri = parseInt(prompt("Inserisci di quanti numeri vuoi fare il cubo e sommarli: "));
var esponente = 3;
var somma = 0;

for(i = 0; i < quantiNumeri; i++){
  var base = parseInt(prompt("Inserisci il numero: " + i));
  var potenza = Math.pow(base, esponente);
  console.log(potenza);
  somma = somma + potenza;
}

console.log(somma); */

var N = parseInt(prompt("Inserisci un numero intero: "));
var esponente = 3;
var somma = 0;

for(i = 1; i <= N; i++){
  var potenza = Math.pow(i, esponente);
  somma= somma + potenza;
}

console.log(somma);