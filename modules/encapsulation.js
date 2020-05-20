// const User = {
//   name: "name",
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   },
// };

// function User(name) {
//   let userName = name;
//   return Object.freeze({
//     getName() {
//       return userName;
//     },
//     setName(userName) {
//       return (userName = userName);
//     },
//   });
// }

// const asfasf = new User("sdgsdg");

function User(name) {
  const symbol = Symbol();
  return {
      [symbol]:name,
    getName() {
      return this[symbol]
    },
    setName(userName) {
      this[symbol] = userName;
    },
  };
}

const asfasf = new User("sdgsdg");
