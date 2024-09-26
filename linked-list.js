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
// Write a function, linkedListFind, that takes in the head of a 
// linked list and a target value. The function should return 
// a boolean indicating whether or not the linked list contains
// the target.

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

// get node value
// Write a function, getNodeValue, that takes in the head of a 
// linked list and an index. The function should return the value
// of the linked list at the specified index.

// If there is no node at the given index, then return null.

// recursive solution
// Time: O(n), linear time
// Space: O(n), linear time
const getNodeValue = (head, index) => {
  if (head === null) return null
  if (index === 0) return head.val
  return getNodeValue(head.next, index - 1)
};

// iterative solution
// Time: O(n), linear time
// Space: O(1), constant time
const getNodeValue2 = (head, index) => {
  let current = head
  let i = 0
  while (i !== index) {
    current = current.next
    if (!current) {
      return null
    }
    i++
  }

  return current.val
};

// reverse list
// Write a function, reverseList, that takes in the head of a 
// linked list as an argument. The function should reverse the 
// order of the nodes in the linked list in-place and return the 
// new head of the reversed linked list.

// recursive solution
// Time: O(n), linear time
// Space: O(n), linear time
const reverseList = (head, prev=null) => {
  if (head == null) return prev
  const next = head.next
  head.next = prev
  return reverseList(next, head)
};

// iterative solution
// Time: O(n), linear time
// Space: O(1), constant time
const reverseList2 = (head) => {
  let prev = null
  let current = head
  
  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  
  return prev
};