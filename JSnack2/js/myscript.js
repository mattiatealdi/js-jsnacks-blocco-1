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