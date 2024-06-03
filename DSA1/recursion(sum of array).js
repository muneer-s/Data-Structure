function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}
const numbers = [1, 2, 3, 4];
console.log(sumArray(numbers));
