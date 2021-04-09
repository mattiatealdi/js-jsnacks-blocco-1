/* esercizio 1 */
var num1;
var num2;

num1= parseInt(prompt("Inserisci un numero: "));
num2= parseInt(prompt("Inserisci un altro numero: "));

if(num1 > num2){
    console.log("Il numero più alto è "+num1)
}else if(num2 > num1){
    console.log("Il numero più alto è: "+num2)
}else{
    console.log("I numeri sono uguali");
}


/* esercizio 2 */
var parola1;
var parola2;

parola1 = prompt("Inserisci la prima parola: ");
parola2 = prompt("Inserisci la seconda parola: ");

if(parola1.length > parola2.length){
    console.log("La prima parola è più lunga");
    console.log(parola1);
    console.log(parola2);
}else if(parola1.length < parola2.length){
    console.log("La seconda parola è più lunga");
    console.log(parola2);
    console.log(parola1);
}else{
    console.log("Le due parole sono lunghe uguali");
}



/* esercizio 3 */
var num = 0;
var num1 = 0;
for(i = 0; i < 10; i++){
    num1 = parseInt(prompt("Inserisci un numero: "));
    num = num + num1;
}

console.log(num);

/* esercizio 4 */

var arrayInvitati = [
    "Mattia",
    "Alberto",
    "Sabrina",
    "Alice",
    "Alessandro",
    "Tommaso",
    "Luca",
    "Giovanni",
    "Paolo",
    "Diego"
];


var nomeUtente = prompt("Qual è il tuo nome?: ");

var isPresent = false;

for(var i = 0; i < arrayInvitati.length; i++){
    if(nomeUtente == arrayInvitati[i]){
        isPresent = true;
    }

}

if(isPresent){
    console.log("Puoi partecipare alla festa!");
}else{
    console.log("Non puoi partecipare alla festa :(");
}


/* esercizio 5 */
var array = [];
var numUtente;

for(var i = 0; i < 6 ; i++){
    var numUtente = parseInt(prompt("Inserisci un numero: "));
    if(numUtente%2){
        array.push(numUtente);
    }
}

console.log(array);

/* esercizio 6 */