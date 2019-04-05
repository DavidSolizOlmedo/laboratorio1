
//3. Dado un conjunto de enteros, encuentre el par de elementos adyacentes que tiene
//el producto más grande y devuélvalo.


function adjacentElementsProduct(inputarray){
  var limproduc=-99999999999;
    for(var i=1; i<inputarray.length; i++){
      if((inputarray[i]*inputarray[i-1]) > limproduc){
        limproduc=inputarray[i]*inputarray[i-1];
      }
    }


    return limproduc;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([4, 9, -3, 1, 0, 2]));
