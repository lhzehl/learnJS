const str = new String("hello world");

function Product(brand, price, discount) {
  //? Create new object
  //? on this object create "this" link
  //? function return this object
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  this.getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
  };
}

const apple = new Product("Apple", 100, 14);
const samsung = new Product("Samsung", 200, 45);

console.log(apple);
console.log(samsung)