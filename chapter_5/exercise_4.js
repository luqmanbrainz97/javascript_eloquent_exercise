//Title : Dominant writing direction

const SCRIPTS = require("./scripts");

/*
Write a function that computes the dominant writing direction 
in a string of text. Remember that each script object has a direction 
property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
*/

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let direction = groupName(item);
    let known = counts.findIndex((c) => c.direction == direction);
    if (known == -1) {
      counts.push({ direction, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  //   console.log(counts);
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";
  let tempdirection = "";
  let tempcount = 0;
  for (let wscripts of scripts) {
    if (tempcount < wscripts.count) {
      tempcount = wscripts.count;
      tempdirection = wscripts.direction;
    }
  }
  return tempdirection;
}

console.log(dominantDirection("Hello!"));

console.log(dominantDirection("Hey, مساء الخير"));

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

// function characterCount(script) {
//   return script.ranges.reduce((count, [from, to]) => {
//     return count + (to - from);
//   }, 0);
// }

// console.log(characterCount(SCRIPTS));
// // console.log(
// //   SCRIPTS.reduce((a, b) => {
// //     return characterCount(a) < characterCount(b) ? b : a;
// //   })
// // );
