// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {

    if (s1.length != s2.length) {
      return false
    }
    
    const seenLetters = {}
  
    for (i=0; i < s1.length; i++) {
      if(!seenLetters[s1[i]]) {
        seenLetters[s1[i]] = 1
      } else {
        seenLetters[s1[i]]++
      }
    }
  
    for (i=0; i < s2.length; i++) {
      if (seenLetters[s2[i]] > 0) {
        seenLetters[s2[i]]--
      } else {
        return false
      }
    }
  
    return true
};

// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
    const letters = {}
  
    for (i=0; i < s.length; i++) {
      if (!letters[s[i]]) {
        letters[s[i]] = 1
      } else {
        letters[s[i]]++
      }
    }
  
    const keys = Object.keys(letters)
    let max = keys[0]
    for (i=0; i < keys.length; i++) {
      if (letters[keys[i]] > letters[max]) {
        max = keys[i]
      }
    }
  
    return max
};

// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
    seenNumbers = {}
  
    for (i=0;i<numbers.length;i++) {
      const compliment = targetSum - numbers[i]
  
      if (seenNumbers[compliment] != undefined) {
        return [seenNumbers[compliment], i]
      }
      
      seenNumbers[numbers[i]] = i
    }
    return
};

// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
    const seen = {}
  
    for (i=0; i < numbers.length; i++) {
      compliment = targetProduct / numbers[i]
  
      if (seen[compliment] != undefined) {
        return ([seen[compliment], i]) 
      } else {
        seen[numbers[i]] = i
      }
    }
    return
};

// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
    let result = ''
    let i = 0
    let j = 0
  
    while(j < s.length) {
      if (s[j].charCodeAt(0) >= 48 && s[j].charCodeAt(0) <= 57) {
        j++
      } else {
        const num = Number(s.slice(i,j))
        for (let count = 0; count < num; count++) {
          result += s[j]
        }
        j++
        i=j
      }
    }
}

// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
    let result = []
    let i = 0
    let j = 1
    let count = 1
  
    while ( j < s.length + 1) {
      if (s[j] == s[i]) {
        count++
        j++
      } else {
        if (count > 1) {
          result.push(count)
        }
        result.push(s[i])
        i=j
        j++
        count = 1   
      }
  }
  
    return result.join('')
};

// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
    return a.filter(x => b.includes(x))
}

// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

function fiveSort(nums) {
    let left = 0; // Pointer for elements that are not 5
    let right = nums.length - 1; // Pointer for elements that are 5
  
    while (left < right) {
      // Move left pointer to the first 5
      while (left < right && nums[left] !== 5) {
        left++;
      }
  
      // Move right pointer to the first non-5
      while (left < right && nums[right] === 5) {
        right--;
      }
  
      // Swap elements if left pointer is pointing to a 5 and right pointer is pointing to a non-5
      if (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
  
    return nums;
  }

  // Q: What is the Big-O time complexity of searching for an item in a set?
  // A: O(1), Constant Time

  // Q: What is the Big-O time complexity of searching for an element in an array?
  // A: O(n), Linear Time

  // Q: What is the Big-O time complexity of searching for a key in an object?
  // A: O(1), Constant Time

  // Q: Given an array of n elements, how many different pairs of elements can be formed in
  // terms of Big-O?
  // A: There are O(n^2) possible pairs

  // Q: Given an array of n elements, how many different triplets of elements can be formed in 
  // terms of Big-O?
  // A: There are O(n^3) possible triplets
  


  /*
    LeetCode problems start here:
  */

  // 349. Intersection of Two Arrays
  // Given two integer arrays nums1 and nums2, return an array of their 
  // intersection.
  // Each element in the result must be unique and you may return the result in any order.

  

  // Example 1:

  // Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2]
  // Example 2:

  // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  // Output: [9,4]
  // Explanation: [4,9] is also accepted.
  

  // Constraints:

  // 1 <= nums1.length, nums2.length <= 1000
  // 0 <= nums1[i], nums2[i] <= 1000

  var intersection2 = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const intersect = new Set()

    for (num of set1) {
        if (set2.has(num)) {
            intersect.add(num)
        }
    }
    
    return Array.from(intersect)
};

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

const maxProfit = (prices) => {
  let minPrice = Infinity
  let maxProfit = 0

  for (i=0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      const profit = prices[i] - minPrice

      if (profit > maxProfit) maxProfit = profit
    }
  }

  return maxProfit
}