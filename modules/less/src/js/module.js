let data = {
  name: "D",
};
// export function getData() {
//   return data;
// }

const symbol = Symbol();

export default class User {
  constructor(firstName) {
      this[symbol]=firstName
  }
  getFirstName(){
      return this[symbol]
  }
}
