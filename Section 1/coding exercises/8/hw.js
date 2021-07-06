"use strict";

let users = [
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

function filterUsers(array, key, value){

  if(!array || !key || !value) {
    return new Error('Error message');
}
  let newArr = []
  let user = array.find(item => item[key] === value);
  newArr.push(user)

  return newArr 

  // альтернатива
  // for(let user of arr){
  //   if(user[key] === value){
  //       return [user];
  //   }

  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i][key] === value) {
  //     res.push(arr[i])
  //   }
  // }
}

console.log(filterUsers(users, "gender", "male"))
