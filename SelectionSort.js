// Selection Sort
// Similar to bubble sort, but instead of first placing large values into sorted position, 
// it places small values into sorted position.
function selectionSort(arr){
    for(var i = 0; i< arr.length; i++){
        var lowest = i;
        for(var j = i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest=j;
            }
        }
        if(i !== lowest){
        console.log(i,lowest);
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    }
    return arr;
}
  
  selectionSort([34,10,23,45,67,5])