//Title : Looping a Triangle
//looping from 1 to 7 using for loop

for (i = 1; i <= 7; i++) {
  console.log(i);
}

//for loop has three parts
//Part 1 : Replace number with hashtag,
//Part 2 : Determine the length of the string using .length function.
//Part 3 : Lastly add the character "#" to increase the count of hashtag.
for (i = "#"; i.length <= 7; i += "#") {
  console.log(i);
}

// while loop
// var count = "#";
// while (count.length <= 7) {
//   console.log(count);
//   count = count + "#"; // <-- jadi dia akan print yg pertama dulu, kemudian # + #.
// }
