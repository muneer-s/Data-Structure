function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length  ; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j ] = temp;
      }
    }
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11,100,1];
console.log("Original array:", arr);
console.log("Sorted array:", bubbleSort(arr));
