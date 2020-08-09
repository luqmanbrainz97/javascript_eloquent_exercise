//Title : Reversing an array

/*
Part 1: 
Write reverseArray function, takes an array as argument and produces a new array
 that has the same elements in the inverse order. 
*/

// function reverseArray(array) {
//   let revword = [];
//   for (let i = 0; i < array.length; i++) {
//     revword.unshift(array[i]);
//   }
//   return revword;
// }

// console.log(reverseArray(["A", "B", "C"]));

/*
Part 2: 
reverseArrayInPlace, does what the reverse method does: it modifies the array given
 as argument by reversing its elements.
*/

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(array) {
  let temp;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
