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
// Space: Worst case, unbalanced tree - O(n), linear time, 
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

// tree includes
// Write a function, treeIncludes, that takes in the root of a 
// binary tree and a target value. The function should return a 
// boolean indicating whether or not the value is contained in 
// the tree.

// recursive solution
// Time: O(n), linear time
// Space: O(n), linear time

const treeIncludes = (root, target) => {
  if (root === null) return false
  if (root.val === target) return true
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}

// iterative solution
// Time: O(n), linear time
// Space: O(n), linear time

const treeIncludes2 = (root, target) => {
  if (root === null) return false
  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val === target) return true

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return false
}

// tree min value
// Write a function, treeMinValue, that takes in the root of a 
// binary tree that contains number values. The function should 
// return the minimum value within the tree.

// You may assume that the input tree is non-empty.

// recursive solution
// Time: O(n), linear time
// Space: O(n), linear time
const treeMinValue = (root) => {
  if (root === null) return Infinity
  const leftMin = treeMinValue(root.left)
  const rightMin = treeMinValue(root.right)
  return Math.min(root.val, leftMin, rightMin)
};

// iterative solutions

// depth first
// Time: O(n), linear time
// Space: O(n), linear time
const treeMinValue2 = (root) => {
  const stack = [root]
  let min = Infinity

  while (stack.length > 0) {
    const current = stack.pop()
    if (current.val < min) min = current.val

    if (current.left !== null) stack.push(current.left)
    if (current.right !== null) stack.push(current.right)
  }

  return min
};

// breadth first
// Time: O(n^2), linear time (because of the Array.shift method)
// Spave: O(n), linear time

const treeMinValue3 = (root) => {
  const queue = [root]
  let min = Infinity

  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val < min) min = current.val

    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }

  return min
};