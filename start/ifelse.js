let a, b;
a = 3;
b = 10;



if (a > b) {
a = a - b;
} else {
a += b
}
console.log(a)


if (a) {
    console.log('some action')
} else{
    console.log('else action')
}
console.clear()
//
let value = []

if (value.length){
    console.log(value);
} else {
    console.log('empty')
}
if (Array.isArray(value)) {
    console.log('Array')
} else {
    console.log('not array')
}

const user = {
    name: 'Name'
};

if (user.hasOwnProperty('name')){
    console.log(user.name);
} else {
    console.log('else')
}






let age;



if (age <10 || age > 55) {
    console.log('some action')
} else {
    console.log('else')
}

console.log()

let variable;
variable = 8;


if (variable===0) {
    variable = 1
} else if (variable<0) {
    variable = 'less then zero'
} else {
    variable *=10
}
console.log(variable)

let car = {
    name: 'Lexus',
    age:10,
    create:2008,
    needRepair:false
}

if (car.age >5){
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair=false
}


let item = {
    name: 'igdsgd',
    price: '100$',
    discount: '15%'
}

if (item.discount != NaN && item.price != NaN) {
    item.priceWithDiscount = parseInt(item.price) - parseInt(item.price)/100 *parseInt(item.discount);
    console.log(item.priceWithDiscount)
} else {
    console.log(item.price)
}

let product = {
    name:'Name',
    price:'10$'
};
let min = 10;
let max = 20;
if (parseInt(product.price) >= min || parseInt(product.price) <= max) {
    console.log(product.name)
} else {
    console.log('no products')
}

console.clear()

let x,v;

x = 1;
v = 0;
// условие ? true : false
x>v ? v=x: v+=1;
console.log(v);
// еще короче
v = x >0? x : v+=1;
console.log(v);
// разветвление, условие ? тру: условие?  тру : фолс, синтаксис наркоманов
v = x <0 ? 2 : x>0? 3 : 0;
console.log(`v : ${v}`)

console.clear()
let color = 'blue';

switch(color){
    case 'yellow':
        console.log(` Colow is ${color}`);
        break;
    case 'red':
        console.log(` Colow is ${color}`);
        break;
    // case 'blue':
    //     console.log(` Colow is ${color}`);
    //     break;
    case 'orange':
    case 'blue':
        console.log(` Colow is orange or blue (${color})`  );
        break;
    default:
        console.log('Default');

}
console.clear()
let c = 0
c = c=== 0? 1: c<0? 'less then zero' : c*=10
console.log(c)