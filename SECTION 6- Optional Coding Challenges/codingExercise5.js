// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)
function averagePair(arr, target) {
  // If the array has less than two elements, return false
  if (arr.length < 2) {
    return false;
  }

  // Initialize two pointers, one at the beginning and one at the end of the array
  let left = 0;
  let right = arr.length - 1;

  // Loop until the pointers meet
  while (left < right) {
    // Calculate the average of the current pair
    const average = (arr[left] + arr[right]) / 2;

    // If the average equals the target, return true
    if (average === target) {
      return true;
    } else if (average < target) {
      // If the average is less than the target, move the left pointer to the right
      left++;
    } else {
      // If the average is greater than the target, move the right pointer to the left
      right--;
    }
  }

  // If no pair with the target average is found, return false
  return false;
}

// Sample Input:
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
