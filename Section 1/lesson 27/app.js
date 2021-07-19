let obj1 = {
  name: 'Denis',
  info: {
    skills: ['html', 'css'],
  },
};

let obj2 = {
  name: 'Ivan',
  age: 20,
};

let newObj = Object.assign({}, obj2, obj1);
//копирование объектов + совпмещение (склейка - нейм перезапишется) в {}
// перезаписывается в зависимости от того, какой порядок 
// делает поверхностное копирование (вложенные объекты копируются по ссылке - см ниже) 
// можно сделать глубокое копирование 
newObj = Object.assign({}, obj1);
newObj = JSON.parse(JSON.stringify(obj1));
// console.log(newObj.info === obj1.info); // true при поверхностном и false при глубоком

let keys = Object.keys(obj2);
console.log(keys);
// возвращает ключи в виде массива 
let values = Object.values(obj2);
console.log(values);
// возвращает значения ключей 
let entries = Object.entries(obj2);
console.log(entries);
// возвращает массив массивов - ключ + значение
let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']]);
console.log(fromEntries);
// наоборот - из массива делает объект
