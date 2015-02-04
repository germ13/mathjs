var PrimesInFibonacciChunks = new function(maxNum){
  for(var i = 1; i < maxNum; i++){
    var f = fib(i);
    console.log("i, f: " + i + ', ' + f + ':::::');
    for(var j = i; i j < i + f; j++){
      console.log("  " + j);
    }
  }

  //refactor into separate utitlities
  function fib = function(numMax){
    for(i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        console.log(x);
    }
  }


};