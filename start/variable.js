// var let const
var namevariable = 'Name';
console.log(namevariable);
namevariable = 'NewName';
console.log(namevariable)


var aaa;
console.log(aaa);
console.clear()

let value;
//number to string
value = 10;

console.log(value);

console.log(typeof value);
//
value = String(value)
console.log(value);
console.log(typeof value);
// bool to string
value = true;
console.log(value);
console.log(typeof value);
//
value = String(value)
console.log(value);
console.log(typeof value);
// Arr to string
value = [1,2,3];

console.log(value);
console.log(typeof value);
//
value = String(value)
console.log(value);
console.log(typeof value);
//

value = String({ key: 'value'});
console.log(value);
console.log(typeof value);

console.clear();
// String to  number

value = '10'
console.log(value);
console.log(typeof value);
value = Number(value);
console.log(value);
console.log(typeof value);

value = 2020.2;
console.log(value);
value = parseInt(value); // =>2020
console.log(value);
console.log(typeof value);

value = '20202.142afs' // => 20202.142
value = parseFloat(value);
console.log(value);
console.log(typeof value);

console.clear()
// to bool

value = Boolean(value);
console.log(value)
value = value -1;
console.log(value);
value = Boolean(value);
console.log(value)