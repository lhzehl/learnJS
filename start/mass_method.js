const numArr = [1, 2, 3, 8, 9, 22, 55, 46, 47];
let value;

value = numArr.length;
// numArr.length =0;
// numArr.length =100;
value = Array.isArray(numArr);
value = numArr[2];
value = numArr.indexOf(22);

value1 = numArr.push(100);
value2 = numArr.pop();
value3 = numArr.unshift(222);
value4 = numArr.shift();
value5 = numArr.slice(1, 5); // не изменяет масив, возвращает срез
value = numArr.splice(1, 2); // изменяет масив, вырезает с масива срез и возвращает его
value = numArr.reverse(); // изменяет масив, return reversed
value = numArr.concat(value1);
value = numArr.join(" ");
value = "batman".split("a");

console.log(value, numArr);

// function getArray(num) {
//   result = [];
//   newresult = [];
//   for (let i=1; i<=num;i++){
//     result.push(i)
//   } console.log(result)

// }

// getArray(10);

// function doubleArray(arr) {
//   result = arr.slice();
//   result = result.concat(result)
//   console.log(result);
// }

// doubleArray([1, 2, 3]); // [1,2,3,1,2,3]


// function changeCollection() {
//     newarr = [];
//     for(let arr of arguments){
//         if(Array.isArray(arr)){
//             arr.shift()
//             newarr.push(arr)
//         }else{
//             return
//         }
//     }return newarr
// }

// console.log(changeCollection([1,2,3],['a','b','c'])) // [[2,3],['b','c']]

const users = [
    {
      "_id": "5e36b779dc76fe3db02adc32",
      "balance": "$1,955.65",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Berg Zimmerman",
      "gender": "male"
    },
    {
      "_id": "5e36b779d117774176f90e0b",
      "balance": "$3,776.14",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Deann Winters",
      "gender": "female"
    },
    {
      "_id": "5e36b779daf6e455ec54cf45",
      "balance": "$3,424.84",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Kari Waters",
      "gender": "female"
    }
  ]
  
  
  function filterUsers(arr, key, value) {
    for(let dict of arr){
        if(dict[key]==value){
            return dict
        }
    }
  }
  
  console.log(filterUsers(users, "age", 36))
