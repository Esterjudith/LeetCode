// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


var isAnagram = function(s, t) {
s.length !== t.length ? false : true
 
 const sortedS = s.split('').sort().join('')
 const sortedT = t.split('').sort().join('')

 return sortedS === sortedT
 
};
console.log(isAnagram("anagram", "nagaram"));

//option 2, better

// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
   
//        const charCount = new Array(26).fill(0);
   
//        for (let i = 0; i < s.length; i++) {
//            charCount[s.charCodeAt(i) - 97]++;
//            charCount[t.charCodeAt(i) - 97]--;
//        }
   
//        return charCount.every(count => count === 0);
//    };

