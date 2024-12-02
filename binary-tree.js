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

// max root to leaf path sum
// Write a function, maxPathSum, that takes in the root of a 
// binary tree that contains number values. The function should 
// return the maximum sum of any root to leaf path within the 
// tree.

// You may assume that the input tree is non-empty.

// recursive solution
// Time: O(n), linear time
// Space: O(n), linear time

const maxPathSum = (root) => {
  if (root === null) return -Infinity
  if (root.left === null && root.right === null) return root.val
  const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right))
  return root.val + maxChildPathSum
};

/**
 * LeetCode Problems Start Here
 */

// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

var invertTree = function(root) {
  if (root === null) return root
  const queue = [root]

  while (queue.length > 0) {
      const current = queue.shift()
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
      let left = current.left
      let right = current.right
      current.left = right
      current.right = left
  }

  return root
};

// 110. Balanced Binary Tree

// Given a binary tree, determine if it is 
// height-balanced

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true
 
// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

var isBalanced = function(root) {
  if (!root) return true;

  const stack = [];
  heights = new Map();
  stack.push([root, false]);

  while (stack.length > 0) {
      const [node, processed] = stack.pop();

      if (processed) {
          const leftHeight = heights.get(node.left) || 0;
          const rightHeight = heights.get(node.right) || 0;

          if (Math.abs(leftHeight - rightHeight) > 1) return false;

          heights.set(node, Math.max(leftHeight, rightHeight) + 1);
      } else {

          stack.push([node,true]);        

          if (node.right) stack.push([node.right, false]);
          if (node.left) stack.push([node.left, false]);
      }
  }

  return true;
};