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
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;

      return;
    }

    let currentNode = this.rootNode;

    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;

          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;

          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    let currentNode = this.rootNode;
    let parentNode = null;

    while (currentNode && currentNode.data !== data) {
      parentNode = currentNode;

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!currentNode) {
      return;
    }

    if (!currentNode.left || !currentNode.right) {
      let newCurrent;

      if (currentNode.left) {
        newCurrent = currentNode.left;
      } else {
        newCurrent = currentNode.right;
      }

      if (!parentNode) {
        this.rootNode = newCurrent;
      } else if (currentNode === parentNode.left) {
        parentNode.left = newCurrent;
      } else {
        parentNode.right = newCurrent;
      }
    } else {
      let minNode = currentNode.right;
      let minParent = currentNode;

      while (minNode.left) {
        minParent = minNode;
        minNode = minNode.left;
      }

      currentNode.data = minNode.data;

      if (minParent.left === minNode) {
        minParent.left = minNode.right;
      } else {
        minParent.right = minNode.right;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};