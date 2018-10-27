// Couple of examples of a recursion funcion
function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return; 
    }
    console.log(num);
    num--;
    countDown(num);
}

// the second one 
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

//factorial example
function  factorial(num){
  if(num === 1) return 1;
  return num * factorial(num - 1);
}
