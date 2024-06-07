function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  // Calculate the sum of the first window of size num
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // Slide the window to the right
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Test cases
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
