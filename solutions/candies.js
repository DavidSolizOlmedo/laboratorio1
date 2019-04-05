//  2. n niños tienen m piezas de dulces.
// Quieren comer tantos dulces como puedan, pero
// cada niño debe comer exactamente la misma cantidad de dulces
// que cualquier otro niño. Determine cuántos dulces comen todos
// los niños juntos. Las piezas individuales
// de dulces no se pueden dividir.

// Para n = 3 y m = 10, la salida debe ser
// candies (n, m) = 9

function candies(n,m){
    var aux = parseInt(m/n);
    var aux2 = aux*n;

    return aux2;
}
console.log(candies(3,10));
//console.log(candies(5, 16));
