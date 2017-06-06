function getPrimes(n){
  var primeList = [];
  var prime;
  if (n === 0 || n === 1 || n < 1 || isNaN(n) === true){
    return false;
  }
  else{
    for (var c = 2; c <= n; c++) {
      prime = true;
      for (var i = 2; i < c; i++) {
        if (c % i === 0) {
          prime = false;
        
    }
    }
      if (prime === true) {
        primeList.push(c);
        
      }
      
    }
      return primeList;
  }
}

getPrimes(100);
