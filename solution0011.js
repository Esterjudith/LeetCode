// 1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.

// A pair(i, j) is called good if nums[i] == nums[j] and i < j.



//     Example 1:

// Input: nums = 
// Output: 4
// Explanation: There are 4 good pairs(0, 3), (0, 4), (3, 4), (2, 5) 0 - indexed.
//     Example 2:
[1, 2, 3, 1, 1, 3]
// Input: nums = [1, 1, 1, 1]
// Output: 6
// Explanation: Each pair in the array are good.
//     Example 3:

// Input: nums = [1, 2, 3]
// Output: 0


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100


var numIdenticalPairs = function (nums) {
    let d = {}
    nums.forEach((e, index) => {
        if (d[e] === undefined) {
            d[e] = [index]
        } else {
            d[e].push(index)
        }
    })
    let pairs = 0
    Object.keys(d).forEach(key => {
        let n = d[key].length
        pairs += (n * (n - 1) / 2)
    })
    return pairs

};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));