// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  if (s1.length != s2.length) {
    return false;
  }

  const seenLetters = {};

  for (i = 0; i < s1.length; i++) {
    if (!seenLetters[s1[i]]) {
      seenLetters[s1[i]] = 1;
    } else {
      seenLetters[s1[i]]++;
    }
  }

  for (i = 0; i < s2.length; i++) {
    if (seenLetters[s2[i]] > 0) {
      seenLetters[s2[i]]--;
    } else {
      return false;
    }
  }

  return true;
};

// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  const letters = {};

  for (i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 1;
    } else {
      letters[s[i]]++;
    }
  }

  const keys = Object.keys(letters);
  let max = keys[0];
  for (i = 0; i < keys.length; i++) {
    if (letters[keys[i]] > letters[max]) {
      max = keys[i];
    }
  }

  return max;
};

// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  seenNumbers = {};

  for (i = 0; i < numbers.length; i++) {
    const compliment = targetSum - numbers[i];

    if (seenNumbers[compliment] != undefined) {
      return [seenNumbers[compliment], i];
    }

    seenNumbers[numbers[i]] = i;
  }
  return;
};

// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
  const seen = {};

  for (i = 0; i < numbers.length; i++) {
    compliment = targetProduct / numbers[i];

    if (seen[compliment] != undefined) {
      return [seen[compliment], i];
    } else {
      seen[numbers[i]] = i;
    }
  }
  return;
};

// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
  let result = "";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (s[j].charCodeAt(0) >= 48 && s[j].charCodeAt(0) <= 57) {
      j++;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result += s[j];
      }
      j++;
      i = j;
    }
  }
};

// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 1;
  let count = 1;

  while (j < s.length + 1) {
    if (s[j] == s[i]) {
      count++;
      j++;
    } else {
      if (count > 1) {
        result.push(count);
      }
      result.push(s[i]);
      i = j;
      j++;
      count = 1;
    }
  }

  return result.join("");
};

// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  return a.filter((x) => b.includes(x));
};

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

var intersection2 = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const intersect = new Set();

  for (num of set1) {
    if (set2.has(num)) {
      intersect.add(num);
    }
  }

  return Array.from(intersect);
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
  let minPrice = Infinity;
  let maxProfit = 0;

  for (i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;

      if (profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit;
};

// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

var generate = function (numRows) {
  const triangle = [];

  for (i = 0; i < numRows; i++) {
    const row = Array(i + 1).fill(1);

    for (j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
};

// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const target = nums.length / 2;
  const map = {};

  for (num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
      if (map[num] > target) return num;
    }
  }
};

var majorityElement2 = function (nums) {
  if (nums.length === 1) return nums[0];
  const target = nums.length / 2;
  let count = 1;
  nums.sort();

  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      count++;
      if (count >= target) return nums[i];
    } else {
      count = 1;
    }
  }
};

// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;
  const map = {};

  for (num of nums) {
    if (map[num] !== undefined) {
      map[num]++;
    } else {
      map[num] = 1;
    }
    if (map[num] >= 2) return true;
  }

  return false;
};

// 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

// 1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function (nums) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = nums.length - 1; j > i; j--) {
      if (nums[i] === nums[j]) count++;
    }
  }

  return count;
};

// This solution is Quadratic O(n^2) Time but Constant O(1) space. This can be solved with a hash map in Linear O(n) Time but also Linear O(n) Space.

// 1929. Concatenation of Array
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000

var getConcatenation = function (nums) {
  let ans = [...nums];

  for (i = 0; i < nums.length; i++) {
    ans = [...ans, nums[i]];
  }

  return ans;
};

// 2469. Convert the Temperature
// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

// Example 1:

// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
// Example 2:

// Input: celsius = 122.11
// Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

// Constraints:

// 0 <= celsius <= 1000

var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32.0];
};

// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

var threeSum = function(nums) {
  const result = [];
  nums.sort((a,b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right]

          if (sum === 0) {
              result.push([nums[i],nums[left],nums[right]]);

              while (left < right && nums[left] === nums[left + 1]) {
                  left++;
              }
              while (left < right && nums[right] === nums[right - 1]) {
                  right--;
              }

              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }
  return result
};


// 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
 

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

var combinationSum = function(candidates, target) {
  const result = [];

  const backtrack = (start, currentCombination, currentSum) => {
      if (currentSum === target) {
          result.push([...currentCombination]);
          return;
      }

      if (currentSum > target) return;

      for (let i = start; i < candidates.length; i++) {
          currentCombination.push(candidates[i]);
          backtrack(i, currentCombination, currentSum + candidates[i]);
          currentCombination.pop();
      }
  };
  
  backtrack(0,[],0);

  return result;
};

// Encode and Decode Strings

// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */

  encode(strs) {
      if (strs == []) return strs
      let str = ""
      let key = ""

      for (let i = 0; i < strs.length; i++) {
          const string = strs[i]
          key = key + string.length + "#"
          str = str + string
      }

      return key + "|" + str
  } 

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
      let [key, encodedStr] = str.split("|")
      const result = []
      // console.log(key, encodedStr)
      let numStr = ""
      
      for (let i = 0; i < key.length; i++) {
          
          if (key[i] !== "#") {
              numStr = numStr + key[i]
          } else {
              const num = parseInt(numStr)
              numStr = ""

              result.push(encodedStr.substring(0, num))
              encodedStr = encodedStr.substring(num, encodedStr.length + 1)
          }
      }

      return result
  }
}