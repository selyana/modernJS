"use strict";

// Переделать функцию с использованием функции-стрелки 
// (в методе reduce тоже использовать arrow function):


function sum() {
  const params = Array.prototype.slice.call(arguments);
  if (!params.length) return 0;
  return params.reduce(function (prev, next) { return prev + next; });
}

const sum = (...params) => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

// Переделать функцию с использованием функции-стрелки

function convertToObject(num) {
  const obj = {
    value: num,
    isOdd: Boolean(num % 2)
  }
  return obj;
}

const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2)
});