/*
QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue

*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
*/

function Queue(capacity) {
    this.capacity = capacity || Infinity;
    this.storage = {};
    this.head = 0;
    this.tail = 0;
}
  
// add value to back of queue, return total count
  Queue.prototype.enqueue = function(value) {
    if (this.count() < this.capacity) {
      this.storage[this.tail++] = value;
      return this.count();
    }
    return 'Max capacity already reached.';
  };
  
// Remove oldest item so that it is no longer in collection and return oldest item
  Queue.prototype.dequeue = function() {
    var element = this.storage[this.head];
    delete this.storage[this.head];
    if (this.head < this.tail) {
      this.head++;
    }
    return element;
  };
  
  // reutrn oldest element added to the collection but do not remove from queue
  Queue.prototype.peek = function() {
    return this.storage[this.head];
  };
  
  Queue.prototype.count = function() {
    return this.tail - this.head;
  };

  Queue.prototype.contains = function (value) {
    for (let i = 0; i < this.tail; i++) {
        if (this.storage[i] === value) {
            return true;
        }
    }
    return false;
  }

  Queue.prototype.until = function (value) {
    let count = 1;
    for (let i = this.head; i < this.tail; i++) {
        if (this.storage[i] === value) {
            return count;
        } else {
            count++;
        }
    }
    return "Value not present in the queue";
  }

  const myQueue = new Queue(10);
  
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.enqueue('e');
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.until('e'));
console.log(myQueue)