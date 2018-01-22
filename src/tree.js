const _ = require('underscore');

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  return _.reduce(this.children, function(result, node) {
    return result || (node.value === target) || node.contains(target);
  }, false);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
