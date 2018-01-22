const Queue = function() {
  const someInstance = {
  };
  // Use an object with numeric keys to store values
  const storage = {
    rear:0,
    front:0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.rear] = value;
    storage.rear += 1;
  };

  someInstance.dequeue = function() {
    let val = storage[storage.front];
    delete storage[storage.front];
    storage.front += 1;
    return val;
  };

  someInstance.size = function() {
    let len = storage.rear - storage.front;
    return len < 0 ? 0 : len;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
