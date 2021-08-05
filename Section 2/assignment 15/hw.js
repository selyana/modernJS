"use strict";

// Не используя innerHTML, добавить в список несколько 
// li с классом ‘new-item’ и текстом ‘item’ + номер li:

/* <ul>

<li><a href="#">Link1</a></li>

...

<li class=”new-item”>item 5</li>

<li class=”new-item”>item 6</li>

</ul> */

// Вручную номер li не ставить оно должно подставляться в 
// зависимости от кол-ва лишек в списке.

let list = document.querySelector('ul')
let lis = list.children.length

for (let i = 0; i < 2; i++) {
  let Newli = document.createElement('li');
  Newli.classList.add('new-item');
  Newli.textContent = `Link${lis + i + 1}`;
  list.appendChild(Newli);
}

// В каждую ссылку, которая находятся внутри списка ul добавить по тегу 
// strong (в каждую ссылку один - strong).

let [...aS] = document.querySelectorAll('ul a');
aS.forEach(a => a.insertAdjacentHTML('beforeend', '<strong></strong>'));

// В начало документа (в начало body) добавить картинку img с атрибутами src 
// и alt (текст придумайте сами). В src добавьте реальный url к картинке. 
// Для создания элемента используйте метод createElement.

let newImg = document.createElement('img');
let img = document.body.insertAdjacentElement('afterbegin', newImg)
newImg.setAttribute('src', 'https://i.ytimg.com/vi/G7ilzpoRY9E/mqdefault.jpg');
newImg.setAttribute('alt', 'cool doggo');

// Найти на странице элемент mark, добавить в конец содержимого текст “green” 
// и на элемент установить класс green

let mark = document.querySelector('mark')
mark.insertAdjacentText('beforeend', 'green')
mark.classList.add("green")

// Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let [...children] = document.querySelector('ul').children;
const newList = children.sort((prev, next) => {
  console.log(prev.textContent)
  return next.textContent - prev.textContent
});
console.log(newList);

//??











