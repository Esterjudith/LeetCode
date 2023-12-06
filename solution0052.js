// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    const stack = []
    const bracketPairs = {
        '(': ')', 
        '{': '}',
        '[': ']'
    }

    for(let char of s) {
       if(bracketPairs[char]){
        //If it's an opening bracket, push it onto the stack
        stack.push(char)
       }else{
        //If it's a closing bracket
         if(stack.length === 0){
            return false
         }
         //Check if the correspoding opening bracket matches
         const lastOpeningBracket = stack.pop()
         if(bracketPairs[lastOpeningBracket] !== char){
            return false
         }
       }
    }
    //if the stack is empty, all brackets are matched
    return stack.length === 0
};
console.log(isValid("()[]{}"));