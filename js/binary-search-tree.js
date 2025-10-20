
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let current = this.root
      while (current.left !== null || current.right !== null) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = value
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = value
          } else {
            current = current.right
          }
        }
      }
    }
  }
}