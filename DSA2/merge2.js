function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid); 
    const rightHalf = arr.slice(mid);
    
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    
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
    
    while (Li < left.length) {
        result.push(left[Li]);
        Li++;
    }
    
    while (Ri < right.length) {
        result.push(right[Ri]);
        Ri++;
    }
    
    return result;
}

const unsortedArray = [5, 3, 8, 1, 2, 7, 4, 6];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
