
function reverseNumber(int) {
    let str_num = int.toString();
    let num_array;
    int >= 0 ? num_array = str_num.split('') : num_array = str_num.substring(1).split('');
    num_array.reverse();
    str_num = num_array.join('');
    if (int >= 0) {
        return Number(str_num)
    } else {
        return Number('-' + str_num);
    }
}

reverseNumber(456);