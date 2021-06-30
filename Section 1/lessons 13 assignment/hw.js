"use strict";

// Чему равно а, почему?

let a = 0 || 'string'
console.log(a)
// распечатывает string - первое тру, которое встретил

a = 1 && 'string'
console.log(a)
// пытается вернуть первый попавшийся фолс, но оба тру (?), распечатывает string - последнее тру

a = null || 25
console.log(a)
// распечатывает 25 - первое тру, которое встретил

a = null && 25
console.log(a)
// распечатывает null - первый фолс, которое встретил

a = null || 0 || 35
console.log(a)
// распечатывает 35 - первое тру, которое встретил

a = null && 0 && 35
console.log(a)
// распечатывает null - первый фолс, которое встретил



// Что отобразится в консоли. Почему?

console.log(12 + 14 + '12')
// 2612 - так как сначала сложение, а потом + строка

console.log(3 + 2 - '1')
// 4 - так как 1 преобразуется в число (при любых операциях кроме сложения строка становится числом)

console.log('3' + 2 - 1)
// 31 - сначала строка + число, потом вычитание

console.log(true + 2)
// 3 - тру становится единицей

console.log(+'10' + 1)
// 11 - плюс превратил строку в число 

console.log(undefined + 2)
// Нан - операция с андефайнд превращает в нан 

console.log(null + 5)
// 5 - налл становится нулем

console.log(true + undefined)
// Нан - операция с андефайнд превращает в нан 



// Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let b = 'hidden'

if (b === 'hidden') {
  b = 'visible'
} else {
  b = 'hidden'
}
console.log(b)

// Создать переменную и присвойте ей число.
// Используя if, записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let c = 11

if (c === 0) {
  c = 1
} else if (c < 0) {
  c = 'less then zero'
} else {
  c *= 10;
}
console.log(c)

// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
    console.log('Need Repair')
    car.needRepair = true
  } else {
    car.needRepair = false
  }
console.log(car)

// Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

if (parseFloat(item.discount) !== NaN && parseFloat(item.price) !== NaN) {
  let priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * (parseFloat(item.discount) / 100))
  console.log(priceWithDiscount)
} else {
  console.log(parseFloat(item.price))
}


// Дан следующий код:
// let product = {
// name: “Яблоко”,
// price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
name: 'Яблоко',
price: '10$'
}

let min = 10
let max = 20

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
    console.log(product.name)
  } else {
    console.log('товаров не найдено')
  }
