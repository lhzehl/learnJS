const user = {
    name: 'Herman',
    sName: 'Andrushko',
    age: 24,
    email: 'nomail@test.me',
    'additional-object': {
        key: 'value'

    },
    skills: ['2', '3', '5']

};

let value;
let key;


key = 'name'
value = user.name;
console.log(value);
value = user['age'];
console.log(value);
value  = user['additional-object']

console.log(value);
value  = user['additional-object'].key
console.log(value);
value  = user['additional-object']['key'] +1

console.log(value);
value = user[key];
console.log(value);
user.info = 'batman is real'
console.log(user);
console.clear()


const obj = {
    product:'iphone'
}

obj.price = 1000

obj.currency = 'dollar'

const details = {
    model:null,
    color:null
}
obj.details = details



console.log(obj)