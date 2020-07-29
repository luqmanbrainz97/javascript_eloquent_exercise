//Title : FizzBuzz
//print all numbers from 1 to 100
for (i = 1; i <= 100; i++) {
  console.log(i);
}

//for numbers divisible by 3, print "Fizz" instead of the number.
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
//for numbers divisible by 5, print "Buzz" instead of the number.
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//for numbers divisible by 3 and 5, print "FizzBuzz" instead of the number.

for (i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

//First version, we use if/else if  / else

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

//Second version, we use || operator to combine those conditions

// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 || i % 5 == 0 || (i % 5 == 0 && i % 3 == 0)) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
