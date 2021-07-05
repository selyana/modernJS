"use strict";


function changeCollection(){
  let arr = []
  for (let i = 0; i < arguments.length; i++) {
    if(Array.isArray(arguments[i])) {
      arguments[i].shift()
      arr[i] = arguments[i]
    }}
   return arr 
}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']))

