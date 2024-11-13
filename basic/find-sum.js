// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// function findSum(num, target){
//     let left = 0;
//     let right = 0;
//     let sum = 0; let obj = [];
//     if(num.length === 1) {
//         return 'Array has single element.'
//     } else {
//         right = 1;
//     }

//     while(right <= num.length) {
//         const currentSum = num[right] + num[left];
//         if(currentSum == target){
//             obj.push(left);
//             obj.push(right);
//             return obj;
//         }
//         if(right == (num.length - 1)){
//             left++;
//             right = left + 1;
//         } else {
//             right++;
//         }
//     }
// }

// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         const currentIndex = i;
//         const nextIndex = i + 1;
//         if(nums[currentIndex] + nums[nextIndex] == target){
//             return [i, nextIndex];
//         }
//     }
// };

findSum([2,7,11,15], 9)
