// --------------------------- STACKS ----------------------------
let value;

var Stack = function(capacity) {
    this.capacity = capacity || Infinity;
    this.count = 0;
    this.storage = {};
};

// Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
Stack.prototype.push = function(value) {
    if (this.count < this.capacity) {
      this.storage[this.count++] = value;
      return this.count;
    }
    return 'Max capacity already reached.'
};

Stack.prototype.pop = function() {
  // remove last item from stack; LIFO
  value = this.storage[--this.count];
  
  delete this.storage[this.count];

  if (this.count < 0) {
    this.count = 0;
  }
  return value;
};

Stack.prototype.peek = function() {
  return this.storage[this.count - 1]
};

Stack.prototype.countStack = function() {
  return this.count;
};

// Create a contains method to check if a value is in the stack 
Stack.prototype.contains = function(value) {
  for (let i = 0; i < this.count; i++) {
     if (this.storage[i] === value) {
      return true;
     }
  }
  return false;
}

//Create an until method to get the number of pops until you get to a certain value:
// stack values - (first)2-5-7-3-6-9(last)
Stack.prototype.until = function(value) {
  for (i = this.count; i > 0; i--) {
    if (this.storage[i] === value) {
      return i;
    } 
  }
  return "No value in my storage found";
}

var myStack = new Stack(7);
myStack.push('2');
myStack.push('5');
myStack.push('9');
myStack.push('9');
myStack.push('7');
myStack.push('9');
myStack.contains('7');
// console.log(myStack)
console.log(myStack.until('7'));


/*
*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
 */

