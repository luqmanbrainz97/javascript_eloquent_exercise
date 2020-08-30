//Title : Borrowing a method

/*
Can you think of a way to call hasOwnProperty on an 
object that has its own property by that name?
*/

let map = { one: true, two: true, hasOwnProperty: true };

map.prototype = {
  hasOwnProperty: function () {
    return true;
  },
};
// Fixed the call
console.log(map.prototype.hasOwnProperty("one"));
//
