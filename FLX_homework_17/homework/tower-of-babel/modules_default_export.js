let arg1 = process.argv[2];
let arg2 = process.argv[3];

import Mathematic from './modules_default_export_math'
 
 console.log(Mathematic.PI);
 console.log(Mathematic.sqrt(+arg1));
 console.log(Mathematic.square(+arg2));