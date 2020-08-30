//Title : The locked box

/*
Write a function called withBoxUnlocked that takes a function 
value as argument, unlocks the box, runs the function, and then
ensures that the box is locked again before returning, regardless
of whether the argument function returned normally or threw an exception.
*/

const box = {
  locked: false,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  try {
    // console.log(box.locked);
    if (box.locked === true) {
      box.unlock();
      body(box.content);
      this.unlocked = 1;
    } else {
      body(box.content);
      box.lock();
    }
  } finally {
    if (box.locked === true) {
      box.unlock();
    }
    if (box.locked === false && this.unlocked === 1) {
      box.lock();
    }
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
//
