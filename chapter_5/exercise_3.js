//Title : Everything

/*
Implement every as a function that takes an array and a predicate
 function as parameters. Write two versions, one using a loop and 
 one using the some method.
*/

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
