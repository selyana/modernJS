"use strict";

let string = "some test string";

// Получить первую и последнюю буквы строки
let first = string[0]
let second = string[string.length - 1]
console.log(first, second)

// Сделать первую и последнюю буквы в верхнем регистре
let firstCh = string[0].toUpperCase()
let secondCh = string[string.length - 1].toUpperCase()
let string2 = firstCh + string.slice(1, -1) + secondCh
console.log(string2)

// Найти положение слова ‘string’ в строке
let word = string.indexOf('string')
console.log(word)

// Найти положение второго пробела (“вручную” ничего не считать)
let spaceOne = string.indexOf(' ');
let spaceTwo = string.indexOf(' ', spaceOne + 1)
console.log(spaceTwo)

// Получить строку с 5-го символа длиной 4 буквы
let newString = string.slice(5, 9)
console.log(newString)

// Получить строку с 5-го по 9-й символы
let oneMoreNewString = string.slice(5, 10)
console.log(oneMoreNewString)

// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
let newStringAgain = string.slice(0, -6)
console.log(newStringAgain)

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a=20
let b=16
let string2016 = String(a).concat(String(b))
console.log(string2016)
