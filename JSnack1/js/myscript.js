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