const car = {
  brand: "Audi",
  year: 2020,
  get age() {
    return `Car created at ${this.year}`;
  },
  set age(value) {
    this.year = value;
  },
};

// Object.defineProperty(car, "age", {
//   //   enumerable: false, //запрещает итерацию( в фор ин не будет видно), не видно ключа и значения
//   //   configurable: false, // запрещает удаление, запрещает конфигурировать(изменять свойства), можно перезаписывать
//   //   writable: false, // запрещает запись свойства
//   get: function () {
//     return `Car created at ${this.year}`;
//   }, // позволяет сокрыть логику, используется как свойство, при этом для get нельзя передавать свойство этого обьекта not 'year' but 'age'
// });

Object.defineProperty(window, "globalVar", {
  set: function (value) {
    console.log(value);
    debugger;
  },
});

function func() {
  globalVar = 12;
}

func();
