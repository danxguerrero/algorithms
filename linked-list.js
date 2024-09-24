class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// linked list values
// Write a function, linkedListValues, that takes in the head of a 
// linked list as an argument. The function should return an array 
// containing all values of the nodes in the linked list.
  
  const linkedListValues = (head) => {
    const result = []
    let current = head
    while (current != null) {
      result.push(current.val)
      current = current.next
    }
  
    return result
  };

// sum list
// Write a function, sumList, that takes in the head of a linked 
// list containing numbers as an argument. The function should 
// return the total sum of all values in the linked list.

const sumList = (head) => {
  let current = head
  let sum = 0

  function add(node) {
    if (node == null) {
      return 
    } else {
      sum += node.val
      node = node.next
      add(node)
    }
  }

  add(current)

  return sum
};

// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

//recursive solution:
// Time: O(n)
// Space: O(n)
const linkedListFind = (head, target) => {
  if (head === null) return false
  if (head.val === target) return true
  return linkedListFind(head.next, target)
};

//iterative solution:
// Time: O(n)
// Space: O(1) 
const linkedListFind2 = (head, target) => {
  let current = head
  
  while (current !== null) {
    if (current.val === target) {
      return true
    }
    current = current.next
  }

  return false
};