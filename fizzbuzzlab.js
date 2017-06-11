function fizzBuzz(value) {
  var fizz = "Fizz";
  var buzz = "Buzz";
  //   var fizzBuzz = "FizzBuzz";
  //   You can concatenate the fizz and buzz variables to get "FizzBuzz".
  var fizzBuzz = fizz + buzz;
  //     if (value % 3 === 0 && value % 5 === 0 || value % 3 === 0 && value % 5 === 0){
  //     The extra statements after the || wont be necessary. It's repititon
  if (value % 3 === 0 && value % 5 === 0) {
    return fizzBuzz;
  } else if (value % 5 === 0) {
    return buzz;

  } else if (value % 3 === 0) {
    return fizz;
  } else {
    return value;

  }
}
fizzBuzz(90);

//My version
function fizzBuzz2(value){
  if(value % 3 === 0){
    if(value % 5 === 0){
      return 'FizzBuzz';
    }
    else{
      return 'Fizz';
    }
  }
  else if(value % 5 === 0){
    return 'Buzz';
  }
  else return value;
}
fizzBuzz(90);
