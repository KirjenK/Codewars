// https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript

//My solution

const twoSum = function(nums, target) { 
    for (let i = 0; i < nums.length - 1 ; i++) {
      for (let k = i + 1; k < nums.length; k++) {
        if (nums[i] + nums[k] === target ) {
          return [i, k]
        } 
      }
    }
  }