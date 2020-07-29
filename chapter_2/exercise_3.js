//Title : Chessboard
//for loop for first line
// for (i = 1; i <= 4; i++) {
//   console.log(" " + "#" + " " + "#" + " " + "#" + " " + "#");
//   console.log("#" + " " + "#" + " " + "#" + " " + "#" + " ");
// }

/*create loop inside of a loop
outer loop handles the lines
inner loop handles characters on a line
*/
let width = Prompt("Pick a width");
let height = Prompt("Pick a height");
let word = "";
let line = "";
for (var i = 1; i <= 8; i++) {
  perkataan = "";
  for (var j = 1; j <= 8; j += 1) {
    if ((j + i) % 2 == 0) {
      perkataan += " ";
    } else {
      perkataan += "#";
    }
  }
  console.log(perkataan);
}
