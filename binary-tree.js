class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// recursive solution
// Time: O(n), linear time
// Space: Worst case, unbalanced tree -O(n), linear time, Best Case, balanced tree - O(log n), logarithmic time
const depthFirstValues = (root) => {
    if (root === null) return []
    const leftValues = depthFirstValues(root.left)
    const rightValues = depthFirstValues(root.right)
    return [ root.val, ...leftValues, ...rightValues]; 
};

//iterative solution
// Time: O(n), linear time
// Space: O(n), linear time
const depthFirstValues2 = (root) => {
    const stack = [ root ];
    const result = []
    if (root === null) return result
    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.val);
  
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left); 
    }
  
    return result;
};