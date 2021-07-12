"use strict";

// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {
  width: 50, height: 10, getSquare: function () {
    return this.width * this.height;
  }
};
console.log(rectangle.getSquare())

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    return this.price
  },
  getPriceWithDiscount: function () {
    const discount = parseFloat(this.discount);
    return this.price - (this.price * (discount / 100));
  }
};
console.log(price.getPrice())
console.log(price.getPriceWithDiscount())

// Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:

const object = {
  height: 10,
  heightMod: function () {
    return this.height += 1
  },
};
console.log(object.heightMod());
console.log(object.height)
console.log(object.heightMod());

// Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
  value: 1,
  double: function () { this.value *= 2; return this },
  plusOne: function () { this.value += 1; return this },
  minusOne: function () { this.value -= 1; return this },
}
console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value)

// Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const good = {
price: 900, 
amount: 2,
getTotalPrice: function () {
  return this.price * this.amount;
}
}
console.log(good.getTotalPrice())

// Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. 
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// Для этого “позаимствуйте” метод из предыдущего объекта.

const good1 = {
  price: 900, 
  amount: 2,
  getTotalPrice: function () {
    return this.price * this.amount;
  }
  }

const detail = {
   price: 500,
   amount: 5
}

detail.getTotalPrice = good1.getTotalPrice
console.log(detail.getTotalPrice())
console.log(good1.getTotalPrice.call(detail))

// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes))

// let element = {
//   height: 25,
//   getHeight: function () {return this.height;}
//   };
//   let getElementHeight = element.getHeight;
//   getElementHeight(); // undefined
//   Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

  let element = {
    height: 25,
    getHeight: function () {return this.height;}
    };

    let getElementHeight = element.getHeight.bind(element);
    console.log(getElementHeight());
