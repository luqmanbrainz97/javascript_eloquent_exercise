//Title : Iterable groups

/*
Make the Group class from the previous exercise iterable. Refer 
to the section about the iterator interface earlier in the chapter
if you aren’t clear on the exact form of the interface anymore.
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

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
//
