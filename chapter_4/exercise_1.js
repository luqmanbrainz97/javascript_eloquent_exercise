//TITLE : The sum of a range.

/* 
Part 1:                             
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
*/

function range(start, end) {
  let num = [];
  for (i = start; i <= end; i++) {
    num.push(i);
  }
  return num;
}

console.log(range(1, 10));

/*
Part 2:
Next, write a sum function that takes an array of numbers and returns the sum
 of these numbers.Run the example program and see whether it does indeed 
 return 55.
*/

function sum(numbs) {
  let total = 0;
  for (i = 0; i < numbs.length; i++) {
    total += numbs[i];
  }
  return total;
}

console.log(sum(range(1, 10)));
