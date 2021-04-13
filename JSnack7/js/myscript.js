var potenza;
var esponente = 2;
var limite = 1000;

/* var isBigger = false;

while(!isBigger){
  for(base = 1; base<=1000; base++){
    var numeroAlQuadrato = Math.pow(base, esponente);
    console.log(numeroAlQuadrato);
    if(numeroAlQuadrato >= 1000){
      isBigger = true;
      break;
    }
  }
}
 */
for(base = 1; quadrato < limite; base++){
  var quadrato = Math.pow(base, esponente);
  if(quadrato >= 1000){
    break;
  }
  console.log(quadrato);
}

while(potenza < limite){
  console.log(potenza);
  potenza = Math.pow(2, esponente);
  esponente++;
}