"use strict";


function reverseString(toString){
let a = String(toString)
let res = "";
 for (let i = a.length - 1; i !== -1; i--) {
   res += a[i];
  }
  return res;
} 

console.log(reverseString ("test"))
console.log(reverseString (""))
console.log(reverseString (null))
console.log(reverseString (undefined))
console.log(reverseString ())



