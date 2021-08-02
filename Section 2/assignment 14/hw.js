"use strict";

// Найти в коде список ul и добавить класс “list”

let ul = document.querySelector('ul');
ul.classList.add('list');
console.log(ul)

// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// Два решения. Первое через селектор ~. Второе через цикл while. ??
// 2.1
const link = document.querySelector('ul ~ a');
link.id = 'link';
console.log(link);

// 2.2
const list = document.querySelector('ul');
// Будущая ссылка
let link1;
// Следующий элемент после списка, стартовая точка.
let nextElement = list.nextElementSibling;
// Проверяем пока не найдена ссылка или больше не осталось следующих элементов мы выполняем данный цикл.
while(!link1 || !nextElement) {
  // Если больше нет следующего элемента мы останавливаем цикл
  if (!nextElement) break;
  // Если у следующего элемента тег ссылка то мы записываем ее в переменную
  if (nextElement.tagName === 'A') {
    link1 = nextElement;
  }
  // записываем следующий элемент // не понимаю эту строчку
  nextElement = nextElement.nextElementSibling;
}

link1.id = 'link';
console.log(link1);

// На li через один (начиная с самого первого) установить класс “item”

  // Также два варианта решения.
  // 3.1
  const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
  liN2.forEach(li => li.classList.add('item'));
  // 3.2
  const [...allLi] = document.querySelectorAll('li');
  allLi.forEach((li, index) => {
      if (!(index % 2)) {
        li.classList.add('item')
      }
    });

// На все ссылки в примере установить класс “custom-link”

const [...links] = document.links;
links.forEach(link => link.classList.add('custom-link'));


