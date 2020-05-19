// function sayHello(name) {
//   return alert(`Hello ${name}`);
// }
// // let res = sayHello("batman")+"!";
// // console.log(res);

// console.clear();

// function newFunction(arg = "Default") {
//   if (arg === "Default") return alert("function need arg!");
//   console.log(arg);
//   return `some action with ${arg}`;
// }
// let a = newFunction("batman");
// console.log(a);
// console.clear();

// let x = 10;

// function def(x) {
//   x = 20;
//   console.log(x);
// }
// def();
// console.log(x);

// const user = {
//   name: "name",
//   age: 121,
// };
// function getObj(obj) {
//   console.log(obj);
//   obj.name = "batman";
// }
// getObj(user);
// console.log(user.name);

// const square = function (x) {
//   return x * x;
// };

// console.log(square(9));

// (function (msg) {
//   console.log(msg);
// })("hello batman");

// console.clear();
// function multiply(x='default') {
//   if (x!=='default') {
//     let result = 1;
//     for (i = 0; i < arguments.length; i++) {
//       result *= arguments[i];
//     }
//     return result;
//   } else {
//       return 0
//   }
// }
// console.log(multiply(2, 4, 5, 6));
// console.log(multiply());



// function reverseString(str) {
//   result = "";
//   if (typeof str === "string") {
//     for (let i = 1; i <= str.length; i++) {
//       result += str[str.length - i];
//     }
//   } else {
//     newstr = `${str}`;
//     for (let i = 1; i <= newstr.length; i++) {
//         result += newstr[newstr.length - i];
//       }
//   }
//   return console.log(result);
// }

// reverseString("test");
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();

function getCodeStringFromText(str) {
      result = "";
      if (typeof str === "string") {
        for (let i = 0; i < str.length; i++) {
          result += str.charCodeAt(i) +" "
        }
      } else {
        newstr = `${str}`;
        for (let i = 0; i < newstr.length; i++) {
            result += newstr.charCodeAt(i) + " "
          }
      }
      return console.log(result.trim());
    }

getCodeStringFromText('hello');
console.clear()

function guessTheNumber(num) {
    num = parseInt(num)
    if(isNaN(num)) return console.error('Please provide a valid number')
    if(num<0 || num >10) return console.error('Please provide number in rane 0-10')
    random = parseInt(Math.random()*10+1)
    if(num==random){
        return console.log('You win!')
    }else {
        return console.log(`You are lose, your number is ${num}, the random number is ${random}`)
    }
}

guessTheNumber();

let a = 'dfhdfh';

console.log(parseInt(a))