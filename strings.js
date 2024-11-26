// Leetcode problems:

// 20. Valid Parentheses

// Given a string s containing just the
// characters '(', ')', '{', '}', '[' and ']', determine if the
// input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the
// same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
  const stack = [];

  const chars = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== chars[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 125. Valid Palindrome
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric 
// characters. Since an empty string reads the same forward and backward, it is 
// a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !isAlphanumeric(s[i])) {
      i++;
    }

    while (i < j && !isAlphanumeric(s[j])) {
      j--;
    }
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
};

var isAlphanumeric = function (char) {
  return /[a-z0-9]/.test(char);
};

// 242. Valid Anagram
// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (i = 0; i < t.length; i++) {
    const letter = t[i];
    if (letter in map) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  }

  for (i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!letter in map) return false;

    if (map[letter] > 0) {
      map[letter]--;
    } else {
      return false;
    }
  }

  return true;
};

// 409. Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the
// length of the longest
// palindrome
//  that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose 
// length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length 
// is 1.

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const map = {};
  let count = 0;

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  let palindromeLength = 0;
  let hasOdd = false;

  for (let count of Object.values(map)) {
    if (count % 2 === 0) {
      palindromeLength += count;
    } else {
      palindromeLength += count - 1;
      hasOdd = true;
    }
  }

  if (hasOdd) {
    palindromeLength++;
  }

  return palindromeLength;
};

// 5. Longest Palindromic Substring

// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let longestPalindrome = '';

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandAroundCenter(s, i, i);
    if (oddPalindrome.length > longestPalindrome.length)
      longestPalindrome = oddPalindrome;

    let evenPalindrome = expandAroundCenter(s, i, i + 1);
    if (evenPalindrome.length > longestPalindrome.length)
      longestPalindrome = evenPalindrome;
  }

  return longestPalindrome;
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
};

// 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be
// constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct = function (ransomNote, magazine) {
  const map = {};

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    if (map[letter] === undefined) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    if (letter in map === false) return false;
    if (map[letter] === 0) {
      return false;
    } else {
      map[letter] -= 1;
    }
  }

  return true;
};

// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D
// and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added
// together. 12 is written as XII, which is simply X + II. The number 27 is
// written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is
// written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There
// are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arabic = 0;

  for (let i = 0; i < s.length; i++) {
    const value = values[s[i]];

    if (i < s.length - 1 && value < values[s[i + 1]]) {
      arabic -= value;
    } else {
      arabic += value;
    }
  }

  return arabic;
};

// 49. Group Anagrams

// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form
// each other. The strings "ate", "eat", and "tea" are anagrams as they can be
// rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

var groupAnagrams = function(strs) {
    const result = [];
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        const sortedWord = wordSort(strs[i])
        if (!(sortedWord in map)) {
            map[sortedWord] = [strs[i]];
        } else {
            map[sortedWord].push(strs[i]);
        }
    }

    for (const key in map) result.push(map[key]);

    return result;
};

const wordSort = (str) => {
    const letters = str.split("");
    letters.sort();
    const sortedWord = letters.join("");
    return sortedWord;
}