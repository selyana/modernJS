"use strict";


function guess(number){
  if (number > 10 || number < 0){
    alert('Please provide number in range 0 - 10')
    return new Error('Please provide number in range 0 - 10')
  }

  if (isNaN(number)){
    alert('Please provide a valid number')
    return new Error('Please provide a valid number')
  }

  let random = Math.ceil(Math.random()*10)

  if (number === random) { 
    alert('You won!')
  }
  else {
    alert(`You lost, your number is ${number} the random number is ${random}`)
  }
} 

let number = parseInt(prompt("Введите число от 1 до 10"))
console.log(guess(number))

