const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    const rootNode = this.rootNode;
    return rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    let currentNode = this.rootNode,
      parentNode;

    if (currentNode === null) {
      this.rootNode = newNode;
      return;
    }

    while (currentNode) {
      parentNode = currentNode;

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else return;
    }

    if (data < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.rootNode,
      minimalNode;

    if (currentNode === null) return null;

    while (currentNode) {
      minimalNode = currentNode;
      currentNode = currentNode.left;
    }

    const minimalValue = minimalNode.data;

    return minimalValue;
  }

  max() {
    let currentNode = this.rootNode,
      maximalNode;

    if (currentNode === null) return null;

    while (currentNode) {
      maximalNode = currentNode;
      currentNode = currentNode.right;
    }

    const maximalValue = maximalNode.data;

    return maximalValue;
  }
}

module.exports = {
  BinarySearchTree,
};
