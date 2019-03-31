
  var rawArgs = process.argv.slice(2);
  var args = [];

  rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
      if(val !== '') args.push(+val);
    });
  });

   function avg(...arr){
        return arr.reduce((acc, elem) => acc + elem) / arr.length 
   }

  console.log(avg(...args));