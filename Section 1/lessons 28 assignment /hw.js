"use strict";

// Используя rest оператор и деструктуризацию, создать функцию, которая принимает 
// любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

function foo(a, ...other) {
    return {first: a, other: other}
}
console.log(foo('adfkdfj', 'b', 'c', 'd'))

// Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две 
// компании из массива partners:

function getInfo(
  {
    name = 'Unknown',
    info: { partners: [first, second] = [] } = {}
  } = {}
) {
  return `Name: ${name}, Partners: ${first}, ${second}`
}

const organisation = {
name: 'Google',
info: { 
  employees: ['Vlad', 'Olga'], 
  partners: ['Microsoft', 'Facebook', 'Xing'] 
}
};

console.log(getInfo(organisation))

// Дан объект:

let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
      "aliquip",
      "anim",
      "exercitation",
      "non",
    ],
    "friends": [
      {
        "id": 0,
        "name": "Barber Hicks"
      },
      {
        "id": 1,
        "name": "Santana Cruz"
      },
      {
        "id": 2,
        "name": "Leola Cabrera"
      }
    ],
  };


// Используя деструктуризацию получить значения из следующих полей
// 1. name,  balance, email
// 2. из массива tags получить первый и последний элемент
// 3. из массива friends получить значение поле name из первого элемента массива
// Если какое то из полей не имеет значения то подставить значение по умолчанию.

function getUserInfo(
  {
    name = 'Default',
    email = 'Default',
    balance = 'Default',
    tags: [firstEl = '', , , lastEL = ''] = [],
    friends: [{ name: firstFriendName = '' } = {}] = []
  } = {}
) {
  return `${name}, ${email}, ${balance}, ${firstEl}, ${lastEL}, ${firstFriendName}`
}

console.log(getUserInfo(user))

// const {
//   name = '',
//   email = '',
//   balance = '',
//   tags: [firstTag = '', , , lastTag = ''] = [],
//   friends: [{ name: friendName = '' }] = []
// } = user;

// console.log(name, email, balance, firstTag, lastTag, friendName)

// С помощью оператора rest, из объекта user (из предыдущей задачи) 
// скопировать в новый массив значение следующих полей tags и friends.

const newArr = [...user.tags, ...user.friends];
console.log(newArr)

