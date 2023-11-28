// 11. Container With Most Water
// Medium

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// We use a two-pointer approach, starting with the left pointer at the leftmost edge of the array (left = 0) and the right pointer at the rightmost edge of the array (right = height.size() - 1).

// We initialize a variable maxWater to store the maximum water capacity, initially set to 0.

// We enter a while loop, which continues as long as the left pointer is less than the right pointer. This loop allows us to explore all possible combinations of two lines.

// Inside the loop, we calculate the width of the container by subtracting the positions of the two pointers: width = right - left.

// We calculate the height of the container by finding the minimum height between the two lines at positions height[left] and height[right]: h = min(height[left], height[right]).

// We calculate the water capacity of the current container by multiplying the width and height: water = width * h.

// We update the maxWater variable if the current container holds more water than the previous maximum: maxWater = max(maxWater, water).

// Finally, we adjust the pointers: if the height at the left pointer is smaller than the height at the right pointer (height[left] < height[right]), we move the left pointer to the right (left++); otherwise, we move the right pointer to the left (right--).

// We repeat steps 4-8 until the left pointer is less than the right pointer. Once the pointers meet, we have explored all possible combinations, and the maxWater variable contains the maximum water capacity.

// We return the maxWater value as the final result.



// var maxArea = function(height) {
//    let left = 0 
//    let right = height.length - 1
//    let maxWater = 0 
   

//    while(left < right){
//     //calculate the width of the container
//     let width = right - left 

//     //calculate the height of the container(the minimum height between the two lines)
//     let h = Math.min(height[left], height[right]) 

//     //calculate the water capacity of the current container
//     let water = width * h 

//     //update the maximum water capacity if the current container holds more water 
//     maxWater = Math.max(maxWater, water) 

//     //move the pointers towards each other
//     if(height[left] < height[right]){
//         left++
//     } else {
//         right--
//     }
//    }
   
//    return maxWater

// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); //[8,8,7,6,5,4,3,2,1]



var maxArea = function(height) {
  let left = 0
  let right = height.length -1
  let maxWater = 0

  while(left < right){
    
    let width = right - left 

    let h = Math.min(height[left], height[right])

    let water = width * h

    maxWater = Math.max(maxWater, water)

    if(height[left] < height[right]){
        left++
    } else {
        right--
    }
  }

  return maxWater
 
 };
 console.log(maxArea([1,8,6,2,5,4,8,3,7])); 