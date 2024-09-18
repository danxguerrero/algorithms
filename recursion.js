// sum numbers recursive

// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

const sumNumbersRecursive = (numbers) => {
    if (numbers.length == 0) {
      return 0
    }
  
    return numbers[0] + sumNumbersRecursive(numbers.slice(1))
    
  };