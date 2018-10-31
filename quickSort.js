//  Qucik Sort Algorithm 
function pivot(arr, start = 0, end = arr.length + 1){
    function swap(array,i,j){
        var temp = array[i];
        array[i]= array[j];
        array[j] = temp;
    }
    var pivot = arr[start];
    var swapIdx = start;
    for(var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr,left = 0, right = arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right)
        //left
        quickSort(arr,left,pivotIndex - 1)
        //right
        quickSort(arr,pivotIndex + 1, right)
    }
    return arr;
}

quickSort([2,4,45,5,8,9,34,1,5,])

// Best case for Time Complexity is      O(n log n)
// Average case for Time Complexity is   O(n log n)
// Worst case for Time Comlexity is      O(n^2)
// Space Complexity is                   O(logn) 