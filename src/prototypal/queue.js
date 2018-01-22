const Queue = function() {
  const storage = Object.create(queueMethods);
  storage.rear = 0;
  storage.front = 0;
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

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'queueMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: queueMethods
  });
}
