const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null
    this.count = 0
  }
  root() {
    return this._root
  }

  add(data) {
    const newNode = new Node(data)
    if (!this._root) {
      this._root = newNode
      this.count++
      return
    }

    const traverseTree = (node) => {
      if (data === node.data) {
        return
      }
      if (data < node.data) {
        if (!node.left) node.left = newNode
        else traverseTree(node.left)
      } else {
        if (!node.right) node.right = newNode
        else traverseTree(node.right)
      }
    }

    traverseTree(this._root)
    this.count++
  }

  find(data) {
    const findNode = (node) => {
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node
      }
      return data < node.data
        ? findNode(node.left)
        : findNode(node.right)
    }

    return findNode(this._root)
  }

  has(data) {
    const searchNode = (node) => {
      if (!node) {
        return false
      }
      if (data === node.data) {
        return true
      }

      return data < node.data
        ? searchNode(node.left)
        : searchNode(node.right)
      }

    return searchNode(this._root)
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }

      this.count -= 1

      if (!node.left && !node.right) {
        return null
      }

      if (!node.left) {
        return node.right
      }
      if (!node.right) {
        return node.left
      }

      let minRight = node.right
      while (minRight.left) {
        minRight = minRight.left
      }

      node.data = minRight.data
      node.right = removeNode(node.right, minRight.data)
      return node
    }

    this._root= removeNode(this._root, data)
  }

  min() {
    if (!this._root) {
      return null
    }

    let currentNode = this._root

    while(currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.data
  }

  max() {
    if (!this._root) {
      return null
    }

    let currentNode = this._root

    while(currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};