// function getThis() {
//   console.log(this);
// }
// function getPrise(currency = "") {
//   console.log(currency + this.price);
//   return this;
// }
// function getName() {
//   console.log(this.name);
//   return this;
// }
// // getThis();
// // window.getThis();
// // console.log(window.getThis);
// const prod1 = {
//   name: "Batman",
//   price: "Gotham",
//   getPrise,
//   getName,
//   info: {
//     information: "In the darkness",
//     getInfo: function () {
//       console.log(this.information);
//     },
//   },
// };

// const prod2 = {
//   name: "IronMan",
//   price: "New York",
//   getPrise,
// };
// prod1.getPrise();
// prod1.getName();
// prod1.info.getInfo();

// prod2.getName = prod1.getName;
// prod2.getPrise();
// prod2.getName();

// let str = "Hello Hero!";

// const reversStr = str
//   .split("") // [H,e,l...]
//   .reverse() // [o,r,e...]
//   .join(""); // ore...
// // console.log(reversStr);
// const prod3 = {
//   name: "AuqaMan",
//   price: "sucks",
//   getPrise,
//   getName,
// };
// // prod3.getName()
// //     .getPrise();
// // getPrise.call(prod3, '$')
// getPrise.apply(prod3, ["*"]);

// console.clear();

// const getPriseBind = prod3.getPrise.bind(prod3, "*");
// console.log(getPriseBind);
// setTimeout(getPriseBind, 2020);

// function getSquare() {
//   return this.width * this.height;
// }
// const rectangle = {
//   width: 12,
//   height: 22,
//   getSquare,
// };
// console.log(rectangle.getSquare());

// function getPrise() {
//   return this.price;
// }
// function getPriseWithDicsount() {
//   return this.price - (this.price * parseInt(this.dicsount)) / 100;
// }
// const price = {
//   price: 10,
//   dicsount: "15%",
//   getPrise,
//   getPriseWithDicsount,
// };
// console.log(price.getPrise());
// console.log(price.getPriseWithDicsount());

// const object = {
//   height: 10,
//   addeder() {
//     this.height += 1;
//   },
// };
// console.log(object.height);
// object.addeder();
// console.log(object.height);

// const numerator = {
//   value: 1,
//   plusOne() {
//     this.value += 1;
//     return this;
//   },
//   double() {
//     this.value *= 2;
//     return this;
//   },
//   minusOne() {
//     this.value -= 1;
//     return this;
//   },
// };
// numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value);

const object = {
  value: 10,
  amount: 50,
  ovarallValue() {
    return this.amount * this.value;
  },
};
const object2 = {
  value: 7,
  amount: 5,
};
object2.ovarallValue = object.ovarallValue;
console.log(object2.ovarallValue());

let sizes = {
  width: 5,
  height: 10,
};
getSquare = function () {
  return this.width + this.height;
};
sizes.getSquare = getSquare;
console.log(sizes.getSquare());

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};
let getElementHeigth = element.getHeight.bind(element);
console.log(getElementHeigth())
