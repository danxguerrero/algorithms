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
  
  module.exports = {
    anagrams,
  };

// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.