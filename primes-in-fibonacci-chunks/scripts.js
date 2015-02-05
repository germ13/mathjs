(function(){
  var fibonacciPrimes = function(num){
    var util = require('./../utilitites/script.js');

    var count = 1,
        result = [];

    var k = util.fibonacciList(num);

    for(var i = 0; i < k.length; i++){
      var r = [];
      for(var j = 0; j < k[i]; j++){
        r.push(count);
        count++;
      }
      result.push(r);
    }

    return result;
  };

  module.exports = fibonacciPrimes;

  var f = console.log(fibonacciPrimes(7));
})();



