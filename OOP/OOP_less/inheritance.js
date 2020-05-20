//! Object Create
const protoForObj = {
  sayHello() {
    return "hello batman";
  },
};
const bj = Object.create(protoForObj, {
  name: {
    value: "Name",
  },
});

function User(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
User.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};
User.prototype.sayHello = function () {
  return `Hello ${this.firstname} ${this.lastname}`;
};


//* Customer
function Customer(firstname, lastname, membership) {
  // * inheritance from User
   User.call(this, firstname, lastname); //? User.apply(this, arguments);
  //* after self methods and property
  this.membership = membership;
}
//! inheritance
const user = new User("Batman", "from Gotham");
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;
//! After self method
Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer("Alfred", "Batman`s teacher", "support");
