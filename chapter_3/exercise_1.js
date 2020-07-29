//Title : Minimum
//write a function that takes two arguments.

function min(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

console.log(min(10, 21));
console.log(min(10, -40));
