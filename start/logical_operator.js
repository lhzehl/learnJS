let value;

value = 1 > 2;
value = 1 <= 2;
value = 1 == 2;
value = 2 == 2;
value = 1 == '1';
value = 1 == true;
value = 1 === '1';
value = 1 === true;
value = 1 != 2;
value = 1 != '1';
value = 1 !== '1';
value = 'a' > 'AB'


console.log(value)
console.clear()
// || (or - return first true or last false if not true) && (and - return first false or last true if all true) ! (not)

value = null;

console.log(!value)

let afs;
afs = true;
console.log(afs || value)

console.log(afs && !!value)
