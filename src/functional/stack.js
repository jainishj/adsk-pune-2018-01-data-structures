const Stack = function() {
  const someInstance = {
  };

  // Use an object with numeric keys to store values
  const storage = {
    top:-1
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.top += 1] = value;
  };

  someInstance.pop = function() {
    if(storage.top !== -1) {
      const val = storage[storage.top];
      delete storage[storage.top];
      storage.top -= 1;
      return val;
    }
    return undefined;
  };

  someInstance.size = function() {
    return storage.top + 1;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
