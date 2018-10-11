function linearSearch(arr,val){
    for(var i=0; i<arr.length;i++){
    if(arr[i] === val) return i;
    }
    return -1;
}
linearSearch([2,3,4,5,6,78,7,6,5,4,34,34,45,434,53,34],6)


//big O notation for Linear Search is O(n);