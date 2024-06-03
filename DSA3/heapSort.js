function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}


function heapify(arr, n, i) {
    let maxI = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[maxI]) {
        maxI = left;
    }

    if (right < n && arr[right] > arr[maxI]) {
        maxI = right;
    }

    if (maxI !== i) {
        [arr[i], arr[maxI]] = [arr[maxI], arr[i]];
        heapify(arr, n, maxI);
    }
}





let array = [4, 10, 3, 5, 1];
// let array = [12,11,13,5,6,7]
heapSort(array);
console.log(array); 
