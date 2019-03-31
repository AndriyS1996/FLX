
var inputs = process.argv.slice(2);
var result = inputs.map((elem) => elem = elem[0].toUpperCase())
                    .reduce((accumulator, currentElem) => accumulator + currentElem);
console.log(result);