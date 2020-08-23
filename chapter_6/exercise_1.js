//Ttitle : A vector type

/*
Write a class Vec that represents a vector in two-dimensional space.
 It takes x and y parameters (numbers), which it should save to properties of the same name.
 */

class Vec {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  plus(x) {
    // return this.num1 + x.num1;
    this.x = x;
    x.num2 = this.num2 + x.num2;
    x.num1 = this.num1 + x.num1;
    return x;
  }
  minus(y) {
    this.y = y;
    y.num2 = this.num2 - y.num2;
    y.num1 = this.num1 - y.num1;
    return y;
  }
  get length() {
    return Math.sqrt(this.num1 * this.num1 + this.num2 * this.num2);
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
//.
