function getPrimes(n){
  var primeList = [];
  for (var c = 0; c <= 10; c++) {
    var prime = false;
    for (var i = 2; i <= c; i++) {
        if (c % i === 0 && i !== c) {
          prime = true;
        }
    }
    if (prime === false) {
      console.log(c);
      
    }
    if (prime === 0 && prime === ''){
      console.log("invalid input");
    }
}
return prime.append(primeList);
}
getPrimes(10);
