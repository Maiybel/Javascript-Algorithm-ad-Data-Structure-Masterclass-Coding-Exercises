// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// Time Complexity - O(n)

// Space Complexity - O(1)
function minSubArrayLen(nums, s) {
  let minLen = Infinity;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= s) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Test cases
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
