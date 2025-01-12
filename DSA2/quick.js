function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)]; 
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); 
        } else if (arr[i] > pivot) {
            right.push(arr[i]); 
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
console.log("Sorted array:", quickSort(arr));
