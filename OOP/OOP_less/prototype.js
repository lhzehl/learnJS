function Product(brand, price, discount) {
    //? Create new object
    //? on this object create "this" link
    //? function return this object
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    // this.getPriceWithDiscount = function () {
    //   return (this.price * (100 - this.discount)) / 100;
    // };
  }
Product.prototype.getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
  };

Product.prototype.setPrice = function(newPrice){
    this.price = newPrice
}

  const apple = new Product("Apple", 100, 14);
