function checkP (x) {
  if(x.length>1){
    xi = "";
    for (i = x.length - 1; i >= 0; i--) {
        xi += x[i];
    }
    if(x==xi){
      return true;
    }
    else
      return false;
  }
  else {
    if(x.length=1){
      return true;
    }
    else
      return false;
  }
}
console.log(checkP("a"));
