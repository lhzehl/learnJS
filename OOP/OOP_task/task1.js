function Planet(name) {
  this.name = name;
  this.getName = function () {
    return `planet name is ${this.name}`;
  };
}

function PlanetWithSatellite(name, satelliteName) {
  Planet.apply(this, arguments);
  this.satelliteName = satelliteName;
  this.getName = function () {
    return `planet name is ${this.name}. The satelite is ${this.satelliteName}`;
  };
}
var earth = new PlanetWithSatellite("earth", "moon");
///////////

function Building(floorValue) {
  this.floorValue = floorValue;
  this.getFloorValue = function () {
    return this.floorValue;
  };
  this.setFloorValue = function (value) {
    return (this.floorValue = value);
  };
}

function ResidentialBuilding(floorValue, apartmentsOnFloor) {
  Building.apply(this, arguments);
  this.apartmentsOnFloor = apartmentsOnFloor;
  this.getFloorValue = function () {
    return `numbers of floors: ${this.floorValue} number of apartments:${
      this.apartmentsOnFloor * this.floorValue
    }`;
  };
}
function ShoppingCenter(floorValue, shopOnFloor) {
  Building.apply(this, arguments);
  this.shopOnFloor = shopOnFloor;
  this.getFloorValue = function () {
    return `numbers of floors: ${this.floorValue} number of shops:${
      this.shopOnFloor * this.floorValue
    }`;
  };
}
const houseOfPeople = new ResidentialBuilding(5, 7);
const centerOfSellers = new ShoppingCenter(7, 12);
/////////

function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getInfo = function () {
  return `name: ${this.name}, price:${this.price}`;
};

function OfficeFurniture(name, price, officeValue) {
  Furniture.apply(this, arguments);
  this.officePropery = officeValue;
  this.getInfo = function () {
    return `name: ${this.name}, price:${this.price} officePropery: ${this.officePropery}`;
  };
}
// OfficeFurniture.prototype = Object.create(Furniture.prototype);
// OfficeFurniture.prototype.constructor = OfficeFurniture;

function FurnitureForHouse(name, price, houseValue) {
  Furniture.apply(this, arguments);
  this.housePropery = officeValue;
  this.getInfo = function () {
    return `name: ${this.name}, price:${this.price} housePropery: ${this.housePropery}`;
  };
}
// FurnitureForHouse.prototype = Object.create(Furniture.prototype);
// FurnitureForHouse.prototype.constructor = FurnitureForHouse;

function User(name, dateOfRegistration) {
  this.name = name;
  this.dateOfRegistration = dateOfRegistration;
}
User.prototype.getInfo = function () {
  return `name: ${this.name} date of registration: ${this.dateOfRegistration}`;
};
function Guest(name, dateOfRegistration, validDate) {
  User.apply(this, arguments);
  this.validDate = validDate;
}
Guest.prototype.getInfo = function () {
  return `name: ${this.name} date of registration: ${this.dateOfRegistration}, validDate: ${this.validDate}`;
};
function Admin(name, dateOfRegistration, superAdmin) {
  User.apply(this, arguments);
  isSuperAdmin = superAdmin;
  
}
Admin.prototype.getInfo = function () {
  return `name: ${this.name} date of registration: ${this.dateOfRegistration}, isSuperAdmin: ${isSuperAdmin}`;
};
const admin =  new Admin('batman', '11', true)
const guest = new Guest('robin', '11', '12')