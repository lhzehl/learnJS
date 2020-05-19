// const arr = ["name1", "name2", "name3"];
// let newarr = [];
// for (let i = 0; i < arr.length; i++) {
//   newarr.push(arr[i].length);
// }
// console.log(newarr);
// newarr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newarr2.push(arr[i].toUpperCase());
// }
// console.log(newarr2);
// console.clear();

// const names = ["Van", "Dii", "Yii", "Flask", "Django", "Vue"];

// function mapArray(arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i]));
//   }
//   return result;
// }
// function nameLength(el) {
//   //   console.log(el);
//   return el.length;
// }

// function nameToUpperCase(el) {
//   return el.toUpperCase();
// }

// const res = mapArray(names, nameLength);
// const res2 = mapArray(names, nameToUpperCase);
// // console.log(res)
// // console.log(res2);
// function greeting(fName) {
//   return function (lName) {
//     return `Hello, ${fName} from ${lName}`;
//   };
// }
// // const testGreeting = greeting("Batman");
// // console.log(testGreeting);
// // const full = testGreeting("Gotham City");
// const full = greeting("Batman")("Gotham City");
// console.log(full);

// function question(job) {
// //   if (job === "developer") {
// //     return function (name) {
// //       return `${name}, what is a jabascript?`;
// //     };
// //   } else if (job === "teacher") {
// //     return function (name) {
// //       return `${name}, lector?`;
// //     };
// //   }
//     const jobDict = {
//         developer: ' what is javascript',
//         teacher: 'lector'
//     };
//     return function(name){
//         return `${name}, ${jobDict[job]}`
//     }
// }

// const developerQuestion = question("developer")("Batman");
// console.log(developerQuestion);
// const teacherQuestion = question("teacher")("Alfred");
// console.log(teacherQuestion);

// 1
function firstFunc(arr, fn) {
  newValue = "New value: ";
  for (let i = 0; i < arr.length; i++) {
    newValue += fn(arr[i]);
  }
  return newValue;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

function handler2(el) {
  return el * 10 + ",";
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
  return `${el.name} is ${el.age},`;
}

console.log(
  firstFunc(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  )
);

function handler4(el) {
  return el.split("").reverse().join("") + ", ";
}
console.log(typeof handler1);
console.log(firstFunc(["abs", "123"], handler4));

function newevery(arr, fn) {
  if (!Array.isArray(arr)) {
    return console.error("this is not array in first argument!");
  }
  if (typeof fn !== "function") {
    return console.error("this is not function in second agrument!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      bool = fn(arr[i], i, arr);
    } else {
      bool = bool && fn(arr[i], i, arr);
    }
    return bool;
  }
}
function cheker(el, i, arr) {
  if (typeof el === "number") {
    return el > 5;
  } else {
    return console.error(` element ${el}  in ${arr} (№ ${i}) not a number!`);
  }
}
let dsd = newevery([6, 7, 8, 9], cheker);
console.log(dsd);
