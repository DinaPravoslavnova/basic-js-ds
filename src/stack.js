/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = new Array();
  }

  push(element) {
    const indexOfTopElement = this.stack.length;
    this.stack[indexOfTopElement] = element;
  }

  pop() {
    const indexOfTopElement = this.stack.length - 1;
    const topElement = this.stack[indexOfTopElement];
    this.stack.length -= 1;
    return topElement;
  }

  peek() {
    const indexOfTopElement = this.stack.length - 1;
    const topElement = this.stack[indexOfTopElement];
    return topElement;
  }
}

module.exports = {
  Stack,
};
