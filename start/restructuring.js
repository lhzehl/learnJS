const dict = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: 55,
  additional: {
    newkey: "new value",
    newkey2: "new value 2",
  },
};

// const key1 = dict.key1;
// const key2 = dict.key2;
// const key3 = dict.key3;
// const { key1: value1, key2, key4: number = 77 } = dict;

const {
  additional: { newkey, newkey2 },
} = dict;
// console.log(newkey);

// console.log(value1, key2, number);

const colors = ["white", "black", "red", "blue", "#349857d"];

const [w, b, r, blue, green = "green"] = colors;
// console.log(w, b, r, blue, green);

const names = ["Denis", "Ivan", "Maksim"];
const [name1, ...otherNames] = names;
// console.log(name1, otherNames);

// const [, name2, name3] = names;
// console.log(name2, name3)
const nestedArr = ["hello word", ["key", "value"]];
const [, [, val]] = nestedArr;

// console.log(val)

// const [...newNames] = names;
const newNames = [...names];
// console.log(newNames)

const newDict = { ...dict, key4: 20 };
// console.log(newDict)
let user = {
  name: "HzeH",
  info: {
    skills: ["python", "django", "flask", "telethon"],
  },
};

const {
  info: {
    skills: [python, django],
  },
} = user;
// console.log(python, django)
function myPerson({ name = "Bruse", lName = "batman" } = {}) {
  console.log(name, lName);
}
myPerson(user);

const func = function (first, ...other) {

  return Object.fromEntries([
    ["first", first],
    ["other", other],
  ]);
};
console.log(func("a", "b", "c", "d"));

function getInfo({
  name = "Unknown",
  info: { employeers = [], partners = [] },
} = {}) {
  console.log(name);
  [first, second] = partners;
  console.log(first, second);
}
const organisation = {
  name: "Google",

  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

getInfo(organisation);
