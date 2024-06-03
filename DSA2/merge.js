function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }

    const mid = Math.floor(arr.length / 2); 
    const left = arr.slice(0, mid) 
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}
    
function merge(left, right) {
    let result = [];
    let Li = 0;
    let Ri = 0;

    while (Li < left.length && Ri < right.length) {
        if (left[Li] < right[Ri]) {
            result.push(left[Li]);
            Li++;
        } else {
            result.push(right[Ri]);
            Ri++;
        }
    }
    
    return result.concat(left.slice(Li), right.slice(Ri));
}

const array = [10, 4, 1, 3, 9, 2, 5];
console.log("Original array:", array);
console.log("Sorted array:", mergeSort(array));



