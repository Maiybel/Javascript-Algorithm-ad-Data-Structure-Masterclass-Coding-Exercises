// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)
function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];

    // If the character is already in the map and within the current window
    if (char in charIndexMap && charIndexMap[char] >= start) {
      // Move the start pointer to the right of the character's last known position
      start = charIndexMap[char] + 1;
    }

    // Update the last known position of the character
    charIndexMap[char] = end;

    // Calculate the current window length and update maxLength if needed
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test cases
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
