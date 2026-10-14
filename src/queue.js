const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const node = {
      value,
      next: null,
    };

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.size++;

    return node;
  }

  dequeue() {
    if (!this.front) {
      return undefined;
    }

    const data = this.front.value;

    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    this.size--;

    return data;
  }
}

module.exports = {
  Queue,
};