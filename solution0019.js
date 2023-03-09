// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



//     Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


//     Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""
    }
    let shortest = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i]
        }
    }
    let prefix = ''
    for (let i = 0; i < shortest.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (shortest[i] !== strs[j][i]) {
                return prefix
            }

        }
        prefix += shortest[i]
    }
    return prefix
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));