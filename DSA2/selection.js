function selectionSort(arr) {
    for (let i = 0; i < arr.length-1 ; i++) {
        let minI = i;

        for (let j = i + 1; j < arr.length; j++) {
            if ( arr[minI] > arr[j]) {
                minI = j;
            }
        }

         [arr[minI],arr[i]] =  [arr[i],arr[minI] ]
        
      
    }
    
    return arr;
}

const array = [64, 25, 12, 22, 11 , 1];
console.log("Original array:", array);
console.log("Sorted array:", selectionSort(array));
