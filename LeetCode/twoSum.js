/*
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/


var twoSum = function(nums, target) {
    let number;
    for(let  i = 0 ;i<nums.length;i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target ){
                 number  = new Array(i,j)
            }
        }
    }
    console.log(number)
};
twoSum([2,5,5,11], 10)