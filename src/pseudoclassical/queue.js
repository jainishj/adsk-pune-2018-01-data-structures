const Queue = function() {
  this.rear = 0;
  this.front = 0;
};

Queue.prototype = {
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
}

Queue.prototype.constructor = Queue;


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
