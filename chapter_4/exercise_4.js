//Deep Comparison

/*
Write a function deepEqual that takes two values and returns
true only if they are the same value or are objects with the
same properties, where the values of the properties are equal
when compared with a recursive call to deepEqual.
*/
let obj = { here: { is: "an" }, object: 2 };
// console.log(obj.here);
// console.log(Object.keys(obj).length);

function deepEqual(x, x1) {
  let result;
  if (
    typeof x != "object" &&
    x === null &&
    typeof x1 != "object" &&
    x1 === null
  ) {
    result = false;
  } else {
    result = true;
    if (Object.keys(x).length != Object.keys(x1).length) {
      result = false;
    } else {
      result = true;
      if (JSON.stringify(x) != JSON.stringify(x1)) {
        result = false;
      } else {
        result = true;
      }
    }
  }
  return result;
}
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
