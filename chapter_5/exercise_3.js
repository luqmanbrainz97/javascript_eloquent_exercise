//Title : Everything

/*
Implement every as a function that takes an array and a predicate
 function as parameters. Write two versions, one using a loop and 
 one using the some method.
*/

// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     console.log(name);
//     let known = counts.findIndex((c) => c.name == name);
//     console.log(known);
//     if (known == -1) {
//       counts.push({ name, count: 1 });
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
// // → [{name: false, count: 2}, {name: true, count: 3}]

function every(array, test) {
  // Your code here.
  for (let num of array) {
    let value = test(num);
    if (value === false) {
      return value;
      break;
    }
  }
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
