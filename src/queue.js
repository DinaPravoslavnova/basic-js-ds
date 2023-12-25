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
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    const underlyingList = this.head;
    return underlyingList;
  }

  enqueue(value) {
    const tailNode = new ListNode(value);

    if (this.length > 0) {
      this.tail.next = tailNode;
    } else {
      this.head = tailNode;
    }

    this.tail = tailNode;
    this.length++;
  }

  dequeue() {
    const topElement = this.head.value;

    this.head = this.head.next;
    this.length--;

    return topElement;
  }
}

module.exports = {
  Queue,
};
