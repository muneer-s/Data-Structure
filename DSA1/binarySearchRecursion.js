// using recursion

function binarySearch(arr, target) {
  return recursion(arr, target, 0, arr.length - 1);
}

function recursion(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    return recursion(arr, target, mid + 1, right);
  } else {
    return recursion(arr, target, left, mid - 1);
  }
}
