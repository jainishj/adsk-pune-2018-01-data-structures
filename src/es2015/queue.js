class Queue {
  constructor() {
    this.rear = 0;
    this.front = 0;
  }

  enqueue(value) {
    this[this.rear] = value;
    this.rear += 1;
  }

  dequeue() {
    if(this.size() > 0) {
      const val = this[this.front];
      delete this[this.front];
      this.front += 1;
      return val;
    }
    return undefined;
  }

  size() {
    return this.rear - this.front;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
