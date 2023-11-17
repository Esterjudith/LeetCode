// 128. Longest Consecutive Sequence
// Medium
// 18.7K
// 863
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0
    }
    const numSet = new Set(nums)

    let maxLength = 0

    for(let num of numSet){
        //check if the current element is the start of the sequence
        if(!numSet.has(num-1)){
            let currentNum = num
            let currentLength = 1

            //check for consecutive elements in increasing order
            while(numSet.has(currentNum + 1)){
                currentNum++
                currentLength++
            }
            //Update the maximum length if needed
            maxLength = Math.max(maxLength, currentLength)
        }
    }
    return maxLength
};
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));