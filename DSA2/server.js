let arr = [5,2,3,1]

function quicksort(arr) {
    if(arr.length<=1){
        return arr
    }

    let pivot = arr[Math.floor(arr.length/2)]
    let left = []
    let right = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i]>pivot){
            right.push(arr[i])
        }
    }

    return [...quicksort(left),pivot,...quicksort(right)]
}


console.log(quicksort(arr));