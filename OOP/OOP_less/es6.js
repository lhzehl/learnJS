//? es5
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

//! ES6
const methodName = "setPrice";

class ProductES {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }
  get brand() {
    return this._brand;
  }
  set brand(name) {
    this._brand = name;
  }

  [methodName](newPrice) {
    this.price = newPrice;
  }

  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new ProductES("Samsung", 2000, 45);

class UserES {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return ` ${this.firstName} ${this.lastName}`;
  }
}
class CustomerES extends UserES {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
  }
  getFullName() {
    const parentRes =super.getFullName();
    return `${parentRes}, membership: ${this.membership}`
  }
}
const customerEs = new CustomerES("Batman", "from Gotham", "real nigga");
