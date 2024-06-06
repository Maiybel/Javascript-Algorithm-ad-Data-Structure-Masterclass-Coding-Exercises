// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)
function isSubsequence(str1, str2) {
  // Initialize pointers for both strings
  let i = 0; // Pointer for str1
  let j = 0; // Pointer for str2

  // Loop through both strings
  while (j < str2.length) {
    // If characters match, move pointer for str1
    if (str1[i] === str2[j]) {
      i++;
    }
    // Move pointer for str2
    j++;
  }

  // If all characters in str1 are found in str2 in the same order, return true
  return i === str1.length;
}

// Test cases
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
