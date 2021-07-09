"use strict";

function firstFunc(arr, fn){
  let newValue = ""

  for (let i = 0; i < arr.length; i++) {
    newValue += (fn(arr[i]))
  }
  return 'New value: ' + newValue
}

function handler1(word){
  return(word[0].toUpperCase() + word.slice(1))
}

function handler2(number){
  return(number.toString() + "0" + ", ")
  // или
  // return((number * 10 )+ ", ")
}

function handler3(person){
  return (`${person.name} is ${person.age}` + ", ")
}

function handler4(string){
  return string.split('').reverse().join('') + ", "
}



console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
console.log(firstFunc([10, 20, 30], handler2) )
console.log(firstFunc([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], handler3));
console.log(firstFunc(['abs', '123'], handler4));

