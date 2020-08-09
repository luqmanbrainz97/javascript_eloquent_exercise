//Title : Recursion

/*
Question : Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

/*
Tips : 
Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.
*/

function isEven(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else if (number < 0) {
    return null;
  }
  return isEven(number - 2);
}

console.log(isEven(-1));
