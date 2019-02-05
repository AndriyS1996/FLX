
function cutback(number){
    let frac_part = number - Math.trunc(number);
    if (!frac_part) {
        return number;
    }
    frac_part = '0' + number.toString().substr(number.toString().indexOf('.'), 3);
    frac_part = Number(frac_part);
    if (!frac_part) {
        return Math.trunc(number);
    } else {
        return Math.trunc(number) + frac_part
    }
}

let price = +prompt('Enter price without discount', '0');
let discount = +prompt('Enter discount(%)', '0');
if (((price >= 0) && (discount >= 0)) && ((('' + Math.trunc(price)).length <= 7) 
    && (('' + Math.trunc(discount)).length <=2))) {
    alert('Price without discount: ' + cutback(price) + '\n' + 
    'Dicount: ' + cutback(discount) + '%\n' +
    'Price with discount: ' + cutback(price * ( 1 - discount/100)) + '\n' +
    'Saved: ' + cutback(price * discount/100));
} else {
    alert('Invalid data');
}