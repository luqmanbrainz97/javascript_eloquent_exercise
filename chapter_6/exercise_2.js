//Title : Groups

/*
Write a class called Group (since Set is already taken). 
Like Set, it has add, delete, and has methods. Its constructor 
creates an empty group, add adds a value to the group (but only 
if it isn’t already a member), delete removes its argument 
from the group (if it was a member), and has returns a Boolean 
value indicating whether its argument is a member of the group.
*/

class Group {
  constructor() {}

  static from(num) {
    this.numarray = num;
    return this.numarray;
  }
}

let group = Group.from([10, 20]);

group = {
  has: function (num1) {
    this.temparray = [];
    this.temparray = Group.numarray;
    // console.log(typeof Group.numarray);
    this.bool = this.temparray.indexOf(num1);
    // console.log(this.bool);
    if (this.bool === -1) {
      return false;
    }
    return true;
  },
  add: function (num2) {
    this.tempadd = Group.numarray;
    if (group.has(num2) === false) {
      this.tempadd.push(num2);
      return this.tempadd;
    }
    return "";
  },
  delete: function (num3) {
    let tempdelete = Group.numarray;
    let choosenum = num3;
    // console.log(this.tempdelete);
    function checkvalue(array) {
      return array != choosenum;
    }
    this.deletedvalue = tempdelete.filter(checkvalue);
    Group.numarray = this.deletedvalue;
    return Group.numarray;
  },
};

console.log(group.has(10));
// // → true
console.log(group.has(30));
// → false
console.log(group.add(10));

console.log(group.delete(10));
console.log(group.has(10));
