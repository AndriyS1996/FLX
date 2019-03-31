
 const max = process.argv[2];
 let FizzBuzz = {
   [Symbol.iterator]() {
       let cur = 1;
     return {
         next(){
            if (cur % 15 === 0){
                cur++;
                return { done: false, value: 'FizzBuzz'}
            }
            if (cur % 3 === 0){
                cur++;
                return { done: false, value: 'Fizz'}
            }
            if (cur % 5 === 0){
                cur++
                return { done: false, value: 'Buzz'}
            }
            if (cur <= max){
                return { done: false, value: cur++}
            }
            return {done: true};
         }
     }
   }
 }

 for (var n of FizzBuzz) {
    console.log(n);
 }