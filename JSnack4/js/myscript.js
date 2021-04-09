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