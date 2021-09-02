"use strict";

// Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. 
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот 
// dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu 
// должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться 
// а на тот который кликнули открываться.


let dropDowns = document.querySelectorAll(".dropdown-item")
let currentOpenedMenu = null; // текущий открытый список

dropDowns.forEach(dd => dd.addEventListener('click', function(e) {

  let clickedItem = e.currentTarget.querySelector('.dropdown-menu'); // кликнутый открытый список
  let opened = clickedItem.classList.toggle('d-none'); // // метод toggle возвращает булевое значение 
  // (при удалении класса (то есть, когда меню ставновится видимым) возвращает false))

  if (currentOpenedMenu && currentOpenedMenu !== clickedItem) {
    currentOpenedMenu.classList.add('d-none');
  }
  // если есть открытый список и он не равен кликнутому айтему, то текущий открытый список закрывается

  if (!opened) {
    currentOpenedMenu = clickedItem;
  } 
  // если меню видимо (класс кликнутого списка был удален), то текущий открытый список = кликнутый открытый список
}))
