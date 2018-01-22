const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const node = Node(value);
    if(list.head === null) {
      list.head = node;
    } else {
      let iterator = list.head;
      while(iterator.next !== null) {
        iterator = iterator.next;
      }
      iterator.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    if(list.head !== null) {
      const nodeToRemove = list.head;
      list.head = list.head.next;
      if(list.head === null) {
        list.tail = null;
      }
      return nodeToRemove.value;
    }
    return undefined;
  };

  list.contains = function(target) {
    let iterator = list.head;
    while(iterator !== null) {
      if(iterator.value === target) {
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
