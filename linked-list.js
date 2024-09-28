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

// zipper lists
// Write a function, zipperLists, that takes in the head of two 
// linked lists as arguments. The function should zipper the two 
// lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, 
// the resulting list should terminate with the remaining nodes. 
// The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// recursive solution
// Time: O(min(n,m)), linear
// Space: O(min(n,m)), linear
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null
  if (head1 === null) return head2
  if (head2 === null) return head1

  const next1 = head1.next
  const next2 = head2.next
  head1.next = head2
  head2.next = zipperLists(next1, next2)

  return head1
};

// iterative solution
// Time: O(min(n,m)) => linear time
// Space: O(1), constant time

const zipperLists2 = (head1, head2) => {
  let tail = head1
  let current1 = head1.next
  let current2 = head2
  let count = 0
  
  while (current1 !== null && current2 !== null) {
    if ( count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    
    tail = tail.next
    count++
  }

  if (current1) tail.next = current1
  if (current2) tail.next = current2
  return head1
};