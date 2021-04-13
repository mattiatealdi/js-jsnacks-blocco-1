// calcolo somma e media dei primi 10 numeri
var sum = 0;
var mean = 0;


for(i = 1; i <= 10; i++){
  sum += i;
  mean = sum / i;
}

console.log(mean);
console.log(sum);