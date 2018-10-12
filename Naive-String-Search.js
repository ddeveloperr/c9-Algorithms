function naiveSearch(first,second){
    var count = 0;
    for(var i=0; i<first.length; i++){
        for(var k=0; k<second.length; k++){
            console.log(first[i],second[k]);
            if(second[k] !==first[i]) break;
            if(k ===second.length - 1) count++;
        }
    }
    return count;   
}


naiveSearch("lorie loled","lol");


// This type of search could be seen when we type ctrl+F and this algorithm is used broadly as well!
// big O notation for this algorithm according the two loops in code is O(n^2). 