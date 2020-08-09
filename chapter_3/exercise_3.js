//Title : Bean Counting

/*Question : Write a function countBs that takes a string as its only argument and returns a
 number that indicates how many uppercase “B” characters there are in the string.
 */

function countBs(word) {
  let counter = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "B") {
      counter += 1;
    }
  }
  return counter;
}

console.log(countBs("BBC"));

// var i = [{ events: 0 }, { events: 1 }, { events: 2 }];

// console.log(i[1]);
