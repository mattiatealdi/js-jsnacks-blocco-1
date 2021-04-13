var fourDigitNumber = parseInt(prompt("Inserisci un numero di 4 cifre: "));
var sum = 0;

function getlength(number) {
  return number.toString().length;
}

if(getlength(fourDigitNumber) != 4){
  alert("Il numero che hai inserito non è di 4 cifre");
}else{
  console.log(fourDigitNumber);
}

while(fourDigitNumber){
  sum += fourDigitNumber % 10;
  fourDigitNumber = Math.floor(fourDigitNumber / 10);
}
console.log(sum);