"use strict";

// 1. При наведении на любой из блоков с классом .box все его дочерние элементы 
// должны поменять свой фон на один из списка. 
// ВАЖНО, только дочерние относительно блока на который навели мышь.
// Вот массив (список) рандомных цветов
// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 
// 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс 
// позже предыдущего. Например если первый блок поменял через 200мс 
// то следующий должен поменять через 400 и т.д.

document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', hover));
//добавляем событие на наведение мыши
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', mouseout));
//событие когда пользователь уводит мышку с блока

function hover(e) {
      let currentEl = e.currentTarget.children;
      let children = [...currentEl];
      children.forEach(el => el.style.background = "red");
}

function mouseout(e) {
  e.currentTarget.style.background = "";
}
//у таргета, на который применяется событие, стираем бэкграунд

// function setRandomColor(el) {
//   const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
//   // Выбираем произвольный цвет из массива
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   el.style.background = randomColor;
// }

// function hover(e) {
//   // Создаем массив элементов которые будут менять фон.
//   let elements = [e.currentTarget];
//   let currentEl = e.currentTarget;
//   // Проходимся циклом по всем дочерним элементам до самого последнего
//   while (currentEl) {
//     elements = [...elements, ...currentEl.children];
//     currentEl = currentEl.children[currentEl.children.length - 1];
//   }
//   // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
//   elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
// }