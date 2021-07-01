"use strict";

// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let a = 'i am in the easycode'
let b = ''

for (let i = 0; i < a.length; i++){
  console.log(a[i])
  if (i === 0 || a[i - 1] === ' '){
    b += a[i].toUpperCase()
  } else {
    b += a[i];
  }
}
console.log(b)

// Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let c = 'tseb eht ma i'
let d = ''

for (let i = c.length - 1; i !== -1; i--) {
  console.log(i)
  d += c[i]
}
console.log(d)


// Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let e = 1;

for (let i = 1; i <= 10; i++) {
  console.log(i)
  e *= i;
}
console.log(e)


// На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let f = 'JavaScript is a pretty good language'
let g = ''

for (let i = 0; i < f.length; i++) {
  if (i === 0 || f[i - 1] === ' ') {
    g += f[i].toUpperCase();
  } else if (f[i] !== ' '){
    g += f[i];
  }
}
console.log(g);


// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let number of h) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}

// Дан объект:

let list = {
name: 'denis',
work: 'easycode',
age: 29
}

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

for (let i in list) {
  if (typeof list[i] === 'string') {
    list[i] = list[i].toUpperCase();
  }
}
console.log(list)