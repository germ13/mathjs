(function(){

  var utilitites = function(){
    //refactor into separate utitlities
    //not zero-based, but 1-based indexing
    this.fibonacci = function(index){
      var x = 1;

      for(var i=1, j=0, k=0, x=1; k < index ; i=j, j=x, k++ ){
          x = i + j;
      }
      return x;
    }

    this.fibonacciList = function(end){
      var result = [];
      for(var i = 1; i <= end; i++){
        result.push(this.fibonacci(i));
      }
      return result;
    };
  };

  module.exports = new utilitites();
})();

