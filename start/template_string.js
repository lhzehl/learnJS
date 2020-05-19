const firstName = 'Herman';
const lastName = 'Andrushko';

const age = 24;
let str;

str = 'Hello my name is '



// console.log(str)

str = `
<ul>
    <li> first name : ${firstName}</li>
    <li> last name : ${lastName}</li>
    <li> age : ${age}</li>
    <li>random: ${Math.random()}</li>
</ul>


`;


document.body.innerHTML =str;

