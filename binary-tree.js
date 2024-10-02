class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// depth first values
// Write a function, depthFirstValues, that takes in the root of a
// binary tree. The function should return an array containing all
// values of the tree in depth-first order.

// recursive solution
// Time: O(n), linear time
// Space: Worst case, unbalanced tree -O(n), linear time, 
//        Best Case, balanced tree - O(log n), logarithmic time
const depthFirstValues = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.val, ...leftValues, ...rightValues]; 
};

//iterative solution
// Time: O(n), linear time
// Space: O(n), linear time
const depthFirstValues2 = (root) => {
    const stack = [ root ];
    const result = [];
    if (root === null) return result
    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.val);
  
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left); 
    }
  
    return result;
};

// breadth first values
// Write a function, breadthFirstValues, that takes in the root of
// a binary tree. The function should return an array containing 
// all values of the tree in breadth-first order.

// Hard to implement a recursive solution for breadth first 
// traversal because recursion uses a stack under the hood and 
// breadth first traversal requires a queue.

// iterative solution
// Time: O(n), linear time
// Space: O(n), linear time

const breadthFirstValues = (root) => {
  if (root === null) return null;
  const queue = [ root ];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.length !== null) queue.push(current.left);
    if (current.right !== null) queue.right(current.right);
  }

  return result;
};

// tree sum
// Write a function, treeSum, that takes in the root of a binary tree 
// that contains number values. The function should return the total 
// sum of all values in the tree.

// recursive solution (depth first)
// Time: O(n), linear time
// Space: O(n), linear time

const treeSum = (root) => {
  if (root === null) return 0
  return root.val + treeSum(root.left) + treeSum(root.right)
};

// iterative (breadth first)
// Time: O(n), linear time
// Space: O(n), linear time

const treeSum2 = (root) => {
  if (root === null) return 0
  const queue = [ root ]
  let sum = 0

  while (queue.length > 0) {
    const current = queue.shift()
    sum += current.val

    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }

  return sum
};