// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 //[2,7,11,15]=  

// Example 1:
// -19 + 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 
 * nums = [1, 5, 9]
 * target = 10
 * map {1: 0, 5: 1,  }
 * i = 1
 * value = 5
 * complement_pair = 10 - 9 = 1
 * [0, 2]
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
       let value = nums[i]
       let complementPair= target - value
       if(map[complementPair] !== undefined){
        return [map[complementPair], i]
       }else {
         map[value] = i
       }
    
    }
      
 }
 

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));