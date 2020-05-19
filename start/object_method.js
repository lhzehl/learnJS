let obj1 = {
  name: "HzeH",
  info: {
    skills: ["python", "django", "flask", "telethon"],
  },
};

let obj2 = {
  name: "batman",
  age: 20,
};

let newObj = Object.assign({}, obj1, obj2); // 1 arg - main object, other args - object to copy in main /!! change main/!! if has same field - overwrite

newObj = Object.assign({}, obj1);

console.log(newObj.info === obj1.info); // the attachment objects copy by link

// let objJson = JSON.stringify(obj1);
newObj = JSON.parse(JSON.stringify(obj1));
console.log(newObj.info === obj1.info);

let keys = Object.keys(obj2); // return new list(array) with object keys
console.log(keys);

let entries = Object.entries(obj2); // return new list with arrays (key, value)
console.log(entries);

let fromEntries = Object.fromEntries([['a', 'value_a'],['b', 'value_b']]); //return new object (reverse entries method)
console.log(fromEntries); 
