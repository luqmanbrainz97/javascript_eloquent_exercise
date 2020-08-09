//Title : A list

/*
Write a function arrayToList that builds up a list structure like the one shown when given
[1, 2, 3] as argument. 
*/

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20]));

/*
Also write a listToArray function that produces an array from a list.
*/

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

/*
Then add a helper function prepend, which takes an element and a list and creates a new list
that adds the element to the front of the input list
*/

function prepend(element, list) {
  list = { value: element, rest: list };
  return list;
}

console.log(prepend(10, prepend(20, null)));

/*
create function nth, which takes a list and a number
and returns the element at the given position in the list (with zero referring 
to the first element) or undefined when there is no such element.
*/

function nth(list, num) {
  let element = "";
  let indexnum = [];
  let i = 0;
  for (let node = list; node; node = node.rest) {
    element = node.value;
    indexnum.push(i);
    if (indexnum[i] === num) {
      element = node.value;
      break;
    }
    ++i;
  }
  return element;
}
console.log(nth(arrayToList([10, 20, 30]), 1));
