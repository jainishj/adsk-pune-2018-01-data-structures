const _ = require('underscore');

const Stack = function() {
  const storage = {
    top:-1
  }
  Object.assign(storage, stackMethods);
  return storage;
};

const stackMethods = {
  push: function(value) {
    this[this.top += 1] = value;
  },

  pop: function() {
    if(this.size() > 0) {
      let value = this[this.top];
      delete this[this.top];
      this.top -= 1;
      return value;
    }
    return undefined;
  },

  size: function() {
    return this.top + 1;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
