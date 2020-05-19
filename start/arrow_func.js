const plus = (x, y) => x + y;
// function plusFoo(x,y){

//     return x+y
// }
console.log(plus(5, 8));

const withOutAtgs = () => console.log("Hello world");
withOutAtgs();
const singleArg = (x) => x * 2;
console.log(singleArg(7));

const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};
console.log(moreActions(2, 2));

const returnObj = (str = "") => ({
  value: typeof str,
  length: str.length,
});

function plusFoo() {
  result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// console.log(plusFoo(1,2,3,4,5,6,7,8,9,0,1,12,33))

// const obj = {
//   firstName: "HHH",
//   getFirstName() {
//     console.log(this);
//   },
//   getAge: () => console.log(this),
// };
// obj.getFirstName();
// obj.getAge();

const obj = {
  firstName: "HHH",
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};
obj.getAge();
// obj.getAgeArrow();
console.clear();
// function sum() {
//   const params = Array.prototype.slice.call(arguments);

//   if (!params.length) return 0;

//   return params.reduce(function (prev, next) {
//     return prev + next;
//   });
// }

// // console.log(sum(1, 2, 3, 4)); // 10
// sum(); // 0

const sum = (...args) => {
  if (!args.length) return 0;

  return args.reduce((prev, next) => {
    return prev + next;
  });
};
console.log(sum(1, 2, 3, 4));
console.log(sum())

const sum2 = (...args) => {
    result = 0;
    for (let i = 0; i < args.length; i++) {
      result += args[i];
    }
    return result;
}
console.log(sum2(1,2,3,4))
console.log(sum2())

const convertToObject = (num) => {
  const obj = {
    value: num,

    isOdd: Boolean(num % 2),
  };

  return obj;
};
console.log(convertToObject(6));
