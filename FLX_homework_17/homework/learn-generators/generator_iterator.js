
function *factorial(n){
    let result = 1;
    if ((n === 1) || (n === 0)) {
        return result;
    }
    for (let i = 1; i <= n; i++) {
        result *= i;
        yield result;
    }
  }

  for (var n of factorial(5)) {
    console.log(n)
  }