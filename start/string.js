const fName = 'H';
const lName = 'H';
const age = 24;
const str = 'Hello, i`m H';

let value;


value = fName +lName;
value = fName + 'ze' + lName + 'n'
// value = value.length;


console.log(value[value.length-1])
console.log(str.concat(' ', value)) // same like str + ' ' + value
value = str.toUpperCase();
console.log(value)
console.log(str.indexOf('m'))
console.log(str.includes('h')) // Boolean
console.log(str.slice(3,8))
console.log(str.replace('i`m', 'batman'))