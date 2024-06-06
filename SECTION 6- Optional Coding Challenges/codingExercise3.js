// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)
function sameFrequency(num1, num2) {
  // convert the numbers to strings
  const str1 = num1.toString();
  const str2 = num2.toString();
  // check if both strings have different lengths
  if (str1.length !== str2.length) {
    return false;
  }
  // Create frequency counters for both numbers
  const count1 = {};
  const count2 = {};
  // Populate the frequency counter for the first number
  for (let digit of str1) {
    count1[digit] = (count1[digit] || 0) + 1;
  }

  // Populate the frequency counter for the second number
  for (let digit of str2) {
    count2[digit] = (count2[digit] || 0) + 1;
  }

  // Compare the two frequency counters
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}
// Sample Input:

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
