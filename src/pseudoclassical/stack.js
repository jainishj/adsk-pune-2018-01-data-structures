const Stack = function() {
  this.top = -1;
};

Stack.prototype.push = function(value) {
  this[this.top += 1] = value;
};

Stack.prototype.pop = function() {
  if(this.size() > 0) {
    let value = this[this.top];
    delete this[this.top];
    this.top -= 1;
    return value;
  }
  return undefined;
};

Stack.prototype.size = function() {
  return this.top + 1;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
