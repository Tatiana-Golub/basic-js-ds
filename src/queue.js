const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (!this.front) {
      this.front = node;
    } else {
      let n = this.front;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }

    this.size += 1;
    return node;
  }

  dequeue() {
    if (!this.front)
      return null;

    const data = this.front.value;
    this.front = this.front.next;

    if (!this.front)
      this.rear = null;

    this.size--;
    return data;
  }
}

module.exports = {
  Queue
};
