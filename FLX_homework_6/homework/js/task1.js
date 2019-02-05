
let a = +prompt('Enter a','0');
let b = +prompt('Enter b','0');
let c = +prompt('Enter c','0');
let D;
if ((a || (a === 0)) && (b || (b === 0)) && (c || (c === 0))){
    if ((a === 0) && (b !== 0)){
        alert("x = " + -c/b);
    } else {
        D = b * b - 4 * a * c;
        if (((D === 0) && (b !== 0))){
            alert('x = ' + (-b + Math.sqrt(D)/(2 * a)));
        }
        if (D > 0){
            alert('x1 = ' + ((-b + Math.sqrt(D))/(2 * a)) + ' and ' + 'x2 = ' + ((-b - Math.sqrt(D))/(2 * a)));
        }
        if ((D < 0) || ((a === 0) && (b === 0) && (c !== 0))){
            alert('no solution');
        }
        if ((a === 0) && (b === 0) && (c === 0)){
            alert('x = R');
        }
    }
} else {
    alert('Invalid input data');
}