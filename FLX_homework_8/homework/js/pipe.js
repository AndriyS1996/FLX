
function pipe(num){
    let result = num;
    for (let i = 1; i < arguments.length; i++) {
        result = arguments[i](result);
    }
    return result
}

function add2(x) {
    return x + 2
}

pipe(3, add2, add2);