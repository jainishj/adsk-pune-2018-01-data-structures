const _ = require('underscore');

const Queue = function() {
  const storage = {
    rear:0,
    front:0
  };

  _.extend(storage, queueMethods);

  return storage;
};

const queueMethods = {
  enqueue: function(value) {
    this[this.rear]  = value;
    this.rear += 1;
  },

  dequeue: function() {
    if(this.size() > 0) {
      const val = this[this.front];
      delete this[this.front];
      this.front += 1;
      return val;
    }
    return undefined;
  },

  size: function() {
    return this.rear - this.front;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
