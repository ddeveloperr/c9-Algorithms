// Binary Search algorithm 
function binarySearch(arr,val)
{
       var left = 0;
       var right = arr.length - 1;
       var middle = Math.floor((left + right)/2);
      while(arr[middle] !== val && left <=right)
      {
       if(arr[middle] > val){
       right = middle - 1;
         }else
       {
       left = middle + 1; 
       }
          middle = Math.floor((left + right)/2);
      }
      return middle;
}

//Big O notation for binary Search algorithm is O(log n) 
//which is acctualy a good thing since only O(n) is a better option.   



















// function binarySearch(arr, val)
// {
//     arr = [2,5,7,8,12,34,67,89,223,445,667];
//     var smallestPoint;
//     var biggestPoint;
//     var middlePoint;
//   for(var i=0; i<arr.length; i++)
//       {
//         smallestPoint = arr[0];
//         biggestPoint = arr[i].length-1;
//         middlePoint = (biggestPoint - smallestPoint)/2

//         console.log(smallestPoint);
//         console.log(biggestPoint);
//         console.log(middlePoint);
//       }   

// }



