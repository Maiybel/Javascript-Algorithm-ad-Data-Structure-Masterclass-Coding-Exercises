// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === value) {
      return middle; // value found
    } else if (arr[middle] < value) {
      left = middle + 1; // search in the right half
    } else {
      right = middle - 1; // search in the left half
    }
  }

  return -1; // value not found
}
