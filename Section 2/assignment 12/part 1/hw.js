"use strict";

// Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
// Для навигации по DOM использовать методы, которые возвращают только элементы

console.log(document.querySelector("head"))
// console.log(document.head)
console.log(document.querySelector("body"))
// console.log(document.body)
console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.children)

let firstDiv = document.body.firstElementChild; //получаем первый див
// Далее делаем из него массив и фильтруем его так, чтобы отсеять то, что не равно последнему и первому ребенку
let copiedFilteredArr = [...firstDiv.children].filter(child => child !== firstDiv.firstElementChild && child !== firstDiv.lastElementChild);
console.log(copiedFilteredArr);





