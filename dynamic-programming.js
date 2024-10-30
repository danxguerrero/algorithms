// fib
// Write a function fib that takes in a number argument, n, and returns the n-th
// number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous 
// two numbers.

// Solve this recursively.

// Time: O(n), linear time
// Space: O(n), linear time

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

//tribonacci
// Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

// The 0-th and 1-st numbers of the sequence are both 0.

// The 2-nd number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous three numbers.

// Solve this recursively.

// Time: O(3^n)
// Space: O(n)

const tribonacci = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n - 3, memo);
  return memo[n]
};

// sum possible
// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

// Time: O(a*n) where a is amount and n is amount of numbers.length
// Space: O(a)

const sumPossible = (amount, numbers, memo={}) => {
  // If amount is in memo, return that value (either true or false)
  if (amount in memo) return memo[amount];

  // If amount is negative, return false
  if (amount < 0) return false;

  // If amount is zero, return true (base case)
  if (amount === 0) return true;

  // Iterate through numbers
  for (let num of numbers) {
    // Check if sumPossible is true for amount - num
    if (sumPossible(amount - num, numbers, memo) === true) {
      // store result for amount in memo
      memo[amount] = true;
      return true;
    }
  }

  // store result for amount in memo
  memo[amount] = false;
  return false;
};

