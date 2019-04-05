//1. Dado un número de dos dígitos devolver la suma de esos dos dígitos.
//Ejemplo. para n = 29, ​addTwoDigits(n) = 11


function addTwoDigits(n){

    var aux1 = n%10;
    var aux2 = parseInt(n/10);
    var suma = aux1+aux2;

  return suma;
}

console.log(addTwoDigits(29));
//console.log(digitos(32));
//console.log(digitos(55));
