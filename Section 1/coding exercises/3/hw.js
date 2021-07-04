"use strict";


function getCodeStringFromText(toString){
let a = String(toString)
let res = "";
 for (let i = 0; i < a.length; i++) {
   res += a[i].charCodeAt() + ' ';
  }
  return res.trim();
} 

console.log(getCodeStringFromText ("hello")),
console.log(getCodeStringFromText (103)),
console.log(getCodeStringFromText (null)),
console.log(getCodeStringFromText (undefined))
