function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 5;

console.log(linearSearch(arr, target));
