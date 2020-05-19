// const user_profiles = {
//     name: 'userName',
//     age: 222,
//     gender: 'male',
//     email: 'hzehflaskblog@gmail.com'
// }
const list = [1, 2, 3, 5, 8, 9, 10];
// let newlist = [];
// list.forEach((el) => {
//   let dict = {
//     digit: el,
//     odd: Boolean(el % 2),
//   };
//   newlist.push(dict);
// });
// console.log(newlist);

const newlist = list.map((el) => {
  let dict = {
    digit: el,
    odd: Boolean(el % 2),
  };
  return dict;
});
console.log(newlist);
// digit odd

let secondList = [12, 4, 50, 1, 0, 18, 40];
console.log(secondList.some((el) => el === 0));

let thirdList = ["yes", "hello", "no", "easycode", "what"];
console.log(thirdList.every((el) => el.length > 3));

let fourthList = [
  {
    char: "H",
    index: 0,
  },
  {
    char: "i",
    index: 1,
  },
  {
    char: "!",
    index: 2,
  },
  {
    char: "4",
    index: 4,
  },
  {
    char: "3",
    index: 3,
  },
];
//sort
fourthList.sort((a, b) => a.index - b.index);
console.log(fourthList);
//
const newString = fourthList.reduce((acc, el) => {
  return (acc += el.char);
}, "");
console.log(newString);

let fifthList = [[14, 45], [1], ["a", "c", "d"]];
fifthList.sort((a, b) => a.length - b.length);
console.log(fifthList);

let sixthList = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },

  { cpu: "intel", info: { cores: 4, сache: 4 } },

  { cpu: "amd", info: { cores: 1, сache: 1 } },

  { cpu: "intel", info: { cores: 3, сache: 2 } },

  { cpu: "amd", info: { cores: 4, сache: 2 } },
];
sixthList.sort((a, b) => a.info.cores - b.info.cores);
console.log(sixthList);

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },

  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },

  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },

  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];
//(products, 15, 30)
function filterCollection(arr, min, max) {
  return arr.filter((n) => n.price > min && n.price < max).sort((a, b) => a.price - b.price);
}
console.log(filterCollection(products, 15, 30));
filterCollection(products, 15, 30);

let nwrenjk = [25, 19, 18.9];
nwrenjk.sort((a, b) => a - b);
console.log(nwrenjk);
