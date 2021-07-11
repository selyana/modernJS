"use strict";

function every(arr, fn) {
  if (!Array.isArray(arr) || typeof fn !== 'function') {
    return new Error('error');
  }

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr) === false){
      return false
    }
  }
  return true
}

function checkNumbers(element, index, array){
  return element > 5 ? true : false  
}

console.log(every([67, 49, 7, 9], checkNumbers));


