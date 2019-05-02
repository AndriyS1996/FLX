
let history = '';
let currentNumber = '';
let currentResult = '';
let saveResult = '';
let previousOperation = '';

function doOperation(oper, num1, num2){
    switch (oper) {
        case '+':
            return +num1 + +num2;
        case '-':
            return +num1 - +num2;
        case '*':
            return +num1 * +num2;
        case '/':
            return +num1 / +num2;
        default:
            return +num2;
    }
}

function fillHistory(text){
    history += text;
    $('.history').text(history);
}
$('.historical').click(function() {
    history += $(this).text();
    $('.history').text(history);
});

$('.digital-keys .historical').not('.equal').click(function(){
    currentNumber += $(this).text();
})

$('.operation-keys .key').click(function(e){
    if (!currentNumber){
        currentResult = doOperation(previousOperation, currentResult, currentResult);
    } else {
        currentResult = doOperation(previousOperation, currentResult, currentNumber);
    }
    currentNumber = '';
    $('.result').text(currentResult);
    switch ($(e.target).attr('class')) {
        case "key addition historical":
            previousOperation = '+';
            break;
        case "key subtraction historical":
            previousOperation = '-';
            break;
        case "key multiplication historical":
            previousOperation = '*';
            break;
        case "key division historical":
            previousOperation = '/';
            break;
    }
})

$('.clear').click(function(){
    currentNumber = '';
    history = '';
    $('.history').text(history);
    currentResult = '';
    $('.result').text(currentResult);
});

$('.delete').click(function(){
    currentNumber = saveResult;
    fillHistory(saveResult);
    saveResult = '';
});

$('.equal').click(function(){
    fillHistory('=');
    if (!currentNumber){
        currentResult = doOperation(previousOperation, currentResult, currentResult);
    } else {
        currentResult = doOperation(previousOperation, currentResult, currentNumber);
    }
    currentNumber = '';
    fillHistory(currentResult);
    $('.result').text(currentResult);
    previousOperation = '';
})

$('.save').click(function() {
    if (currentNumber) {
        saveResult = currentNumber;
    } else {
        saveResult = currentResult;
    }
});

$(document).ready(function() {
    $("body").keypress(function(e) {
         if (((e.which >= 48) && (e.which <= 57)) || (e.which === 46)){
             currentNumber += String.fromCharCode(e.which);
             fillHistory(String.fromCharCode(e.which));
         };
         if (e.which === 99) {
            currentNumber = '';
            history = '';
            $('.history').text(history);
            currentResult = '';
            $('.result').text(currentResult);
         };
         if (e.which === 13){
            fillHistory('=');
            if (!currentNumber){
                currentResult = doOperation(previousOperation, currentResult, currentResult);
            } else {
                currentResult = doOperation(previousOperation, currentResult, currentNumber);
            }
            currentNumber = '';
            previousOperation = '';
            fillHistory(currentResult);
            $('.result').text(currentResult);
         }
         if (e.which === 109){
            if (currentNumber) {
                saveResult = currentNumber;
            } else {
                saveResult = currentResult;
            }
         };
         if (e.which === 10){
            currentNumber = saveResult;
            fillHistory(saveResult);
            saveResult = '';
         }
    });
});