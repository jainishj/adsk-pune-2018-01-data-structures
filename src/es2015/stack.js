class Stack {
  constructor() {
    this.top = -1;
  }

  push(value) {
    this[this.top += 1] = value;
  };

  pop() {
    if(this.top !== -1) {
      const val = this[this.top];
      delete this[this.top];
      this.top -= 1;
      return val;
    }
    return undefined;
  };

  size() {
    return this.top + 1;
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
