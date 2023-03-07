// 1480. Running Sum of 1d Array
// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



//     Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].
//     Example 2:

// Input: nums = [1, 1, 1, 1, 1]
// Output: [1, 2, 3, 4, 5]
// Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].
//     Example 3:

// Input: nums = [3, 1, 2, 10, 1]
// Output: [3, 4, 6, 16, 17]


// Constraints:

// 1 <= nums.length <= 1000
//     - 10 ^ 6 <= nums[i] <= 10 ^ 6

//pseudocode:  first leave the first element as is, then we add the second to the first and we had the third element to the sum of the prev one thru iteration.
var runningSum = function (nums) {
    let runningSum = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        runningSum.push(runningSum[i - 1] + nums[i])
    }
    return runningSum
};
console.log(runningSum([3, 1, 2, 10, 1]));





