"use strict";

// Найти параграф и получить его текстовое содержимое (только текст!)

let paragraph = document.querySelector("p")
let text = paragraph.textContent
console.log(text)

// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает 
// информацию (в виде объекта) о типе узла, об имени узла и о количестве д
// очерних узлов (если детей нет - 0).

function getInfo(node) {
    
    return {
      type: node.nodeType,
      name: node.nodeName,
      children: node.childNodes.length
    }
  }

  const nodeInfo = getInfo(document.querySelector("p"));
  console.log(nodeInfo);

//   Получить массив, который состоит из текстового содержимого 
//   ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]


function getArr(ul) {
    let [...linksList] = ul.querySelectorAll('a')
    console.log(linksList)
    return linksList.map(link => link.textContent);
}

const arr = getArr(document.querySelector('ul'));
console.log(arr);

// В параграфе заменить все дочерние текстовые узлы на “-text-” 
// (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let [...children] = paragraph.childNodes;
console.log(children)
children.forEach(child => {
  if (child.nodeType === 3) {
    child.textContent = '-text-'
  }
});
