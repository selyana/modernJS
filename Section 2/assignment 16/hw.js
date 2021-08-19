"use strict";

// По нажатию на кнопку "btn-msg" должен появиться алерт 
// с тем текстом который находится в атрибуте data-text у кнопки.

let btn = document.getElementById("btn-msg")
let attr = btn.getAttribute("data-text")
btn.addEventListener("click", function(e) {
  alert(attr)
  // alert(e.target.dataset.text)
})

// При наведении указателя мыши на "btn-msg", кнопка становится красной; 
// когда указатель мыши покидает кнопку, она становится прежнего цвета. 
// Цвет менять можно через добавление класса.

btn.addEventListener("mouseover", function(e) {
  btn.classList.add("red")
  // alert("kkk")
})
btn.addEventListener('mouseout', function(e) {
  btn.classList.remove("red")
});

// При нажатии на любой узел документа показать в элементе с 
// id=tag имя тега нажатого элемента.

let tag = document.getElementById("tag")
document.body.addEventListener('click', function(e) {
  tag.textContent = tag.tagName
});

// При нажатии на кнопку btn-generate добавлять в список ul элемент списка 
// Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д


let btnGen = document.getElementById("btn-generate")
let ul = document.querySelector('ul');

function addLi(e) {
  let li = document.createElement('li');
  let number = ul.children.length + 1;
  li.textContent = `Item ${number}`;
  ul.appendChild(li);
}

btnGen.addEventListener('click', addLi);









