// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
//[1,1,1,2,2,3]  {3,2,1} {1: 3, 2:2, 3:1} at the end us spread operator to insert keys in array. 


var topKFrequent = function(nums, k) {
    let countObj = {}
  
    nums.forEach( num => {
        if(countObj[num]){
            countObj[num]++
        }else{
            countObj[num] = 1
        }
       
    })
    const sortedKeys = Object.entries(countObj).sort((a, b) => b[1] - a[1]).map(entry => entry[0]); 
    return sortedKeys.slice(0,k)

};
console.log(topKFrequent([1,1,1,2,2,3], 2));