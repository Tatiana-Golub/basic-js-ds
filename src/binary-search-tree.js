const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;
  count = 0;

  root() {
    return this.rootNode;
  }

  add(data) {
    this.count++
    let newNode = new Node(data)
    const searchTree = node => {
      if (!this.rootNode) {
        this.rootNode = newNode;
        return;
      }

      if (data < node.data) {
        if (!node.left) {
          node.left = newNode
        }
        else {
          searchTree(node.left)
        }
      }
      else if (data > node.data) {
        if (!node.right) {
          node.right = newNode
        }
        else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.rootNode);
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

    return findNode(this.rootNode, data);

    function findNode(rootNode, data) {
      if (rootNode === null)
          return null;

      if (rootNode.data === data)
          return rootNode;

      let res1 = findNode(rootNode.left, data);
      if (res1) return res1;
      let res2 = findNode(rootNode.right, data);
      return res2;
   }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let temp = node.right;

        while (temp.left) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;

      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};