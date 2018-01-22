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
    if(storage.front < storage.rear) {
      const val = storage[storage.front];
      delete storage[storage.front];
      storage.front += 1;
      return val;
    }
    return undefined;
  };

  someInstance.size = function() {
    return storage.rear - storage.front;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
