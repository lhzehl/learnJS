// let str = 'i am in the easycode';
// let stt = '';
// let i = 0;

// while(i<str.length){
//     if (i===0){
//         stt+=str[i].toUpperCase();
//         i++
//         continue;
//     }
    
//     if (str[i-1]===' '){
//         stt+=str[i].toUpperCase();
//         i++
//         continue;
//     }
//     stt+=str[i]
//     console.log(`i = ${i}, new string = ${stt}`)
//     i++
// }
// let str = 'tseb eht ma i'
// let newstring = '';
// for(let i=1; i <= str.length; i++) {
//     newstring += str[str.length-i];
    
// }
// console.log(` str: ${str}, newstring: ${newstring}`)
// let n =10;
// let x =1;
// for (let i=1; i<=n; i++) {
//     x *=i
//     console.log(`x = ${x}, i = ${i}`)
// }
// console.log(x)

// let str = 'JavaScript is a pretty good language';
// let newstring ='';
// for (let i =0; i<str.length; i++) {
//     if(str[i]===' '){
//         continue;
//     }
//     if(str[i-1]===' '){
//         newstring+=str[i].toUpperCase();
//         continue;
//     }
//     newstring+=str[i];

// }
// console.log(newstring)


// let a = [
//     1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
// ]
// for( let i in a){
//     if(a[i]%2!==0){
//         console.log(a[i])
//     }
// }

let dict = {
    name:'denis',
    work:'easycode',
    age:29
}

for(let key in dict) {
    console.log(`${key} : ${typeof(dict[key])}`)
    if(typeof(dict[key])==='string'){
        dict[key] = dict[key].toUpperCase();
    }
}
console.log(dict)
console.clear()
var x = 1; 
if (x) {
  var x = 2; 
  console.log(x);
} 
console.log(x); 
let y; 
if (y) {
  let y = 2; 
  console.log(y);
} else {
  let y = 10;
  console.log(y);
}
console.log(y); 