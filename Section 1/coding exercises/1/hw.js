"use strict";


function multiply(){
let res = 1;

 if (arguments.length === 0) {
   res = 0;
 }

 for (let i = 0; i < arguments.length; i++) {
  res *= arguments[i];
  }
  return res;
} 

console.log(multiply (11, 7))
console.log(multiply ())


