class DoublyNode {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element) {
    const node = new DoublyNode(element);

    if (this.head === null) {
    
      this.head = node;
      this.tail = node;
    } else {

      node.prev = this.tail;

     
      this.tail.next = node;


      this.tail = node;
    }

    this.length++;
  }

  removeAtEnd() {
   
    if (this.tail === null) {
      return undefined;
    }

    const current = this.tail;

    this.tail = current.prev;

    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }

    current.prev = null;
    current.next = null;

    this.length--;
    return current.element;
  }

  traverseForward() {
    const values = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.element);
      current = current.next;
    }

    return values;
  }

  traverseBackward() {
    const values = [];
    let current = this.tail;

    while (current !== null) {
      values.push(current.element);
      current = current.prev;
    }

    return values;
  }
}

// Example usage
const list = new DoublyLinkedList();

list.append(10);
list.append(15);
list.append(20);

console.log(list.traverseForward());  // [10, 15, 20]
console.log(list.traverseBackward()); // [20, 15, 10]
console.log(list.length);             // 3

console.log(list.removeAtEnd());      // 20
console.log(list.traverseForward());  // [10, 15]
console.log(list.tail.element);       // 15
console.log(list.length);             // 2

console.log(list.removeAtEnd());      // 15
console.log(list.removeAtEnd());      // 10
console.log(list.removeAtEnd());      // undefined
console.log(list.head);               // null
console.log(list.tail);               // null