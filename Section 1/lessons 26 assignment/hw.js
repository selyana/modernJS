"use strict";

// Замыкание - это функция, которая ссылается на свободные переменные
// Свободные переменные - все переменные, которые не были переданы функции 
// как параметры и не были объявлены внутри этой функции как локальные переменные
// Функция, определенная в замыкании, запоминает то окружение, в котором была создана, а также имеет доступ
// к окружению выше

// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(number1 = 0) {
  return function (number2 = 0) {
    return number1 - number2;
  }
}
// console.log(minus(10)(6))
// console.log(minus(5)(6))
// console.log(minus(10)())
// console.log(minus()(6))
// console.log(minus()())

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker(number1) {
  return function (number2) {
    return number1 *= number2
  }
}
// const multiply = multiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

// Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

function stringHandler () {
  let str = ''

   return {
    strSet(arg = '') {
      if (typeof arg == "number") {
        str = String(arg);
      }
      str = arg
      return str
    },
    strGet() {
      return str
    },
    strLength() {
      return str.length;
    },
    strReverse() {
      return str.split('').reverse().join('');
    }
   }
};

const modifyStr = stringHandler();

// console.log(modifyStr.strSet("abcde"))
// console.log(modifyStr.strGet())
// console.log(modifyStr.strLength())
// console.log(modifyStr.strReverse())

// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. 
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:

// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

function operator (){
  let value = "";

  function set (num = 0) {
    value = num
    return this;
  }

  function plus(digit) {
    value += digit;
    return this;
  }

  function minus(digit) {
    value -= digit;
    return this;
  }

  function divide(digit) {
    value /= digit;
    return this;
  }

  function pow(digit) {
    value = Math.pow(value, digit);
    return this;
  }

  function get() {
    return  Number(value.toFixed(2));
  }

  return {
    set,
    plus,
    minus,
    divide,
    pow,
    get
  }
};

const calc = operator();
console.log(calc.set(4).plus(2).divide(2).get())

