//Insertion Sort
  function insertionSort(arr){
     for(var i = 1; i<arr.length; i++){
         var currentVal = arr[i];
         for(var j= i - 1; j >= 0 && arr[j] > currentVal; j--){
             arr[j+1]= arr[j];
         }
         arr[j+1] = currentVal;
         console.log(arr);
     }
     return arr;
  }
  insertionSort([2,1,9,76,4])
  
  // Best case for time complexity is O(n)
  //Average Time Complexity is O(n^2)
  //Worst Time Complexity is O(n^2)
  //Space complexity is O(1)