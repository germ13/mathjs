(function(_rank, _unitLength){
    var Point = require('../geometry/Point2d.js');
    var Primes = require('../primes/primes.js');

    var points = [];

    var currentDirection = 0;

    var currentAngle = 0;
    var currentPosition = [0,0];

    points.push(new Point(currentPosition[0], currentPosition[1], 0));

    this.rotate = function(){
       var result = currentDirection * 2 * Math.PI / 4;
       currentDirection = (currentDirection + 1)  % 4;
        currentAngle = currentAngle + currentDirection * 2 * Math.PI / 4;
       return result;
    };


    this.move = function(distance){
        var result = [currentPosition.x, currentPosition.y];
        //var rotation = this.rotate();
        result[0] += (distance * Math.cos(rotation));
        result[1] += (distance * Math.sin(rotation));

        currentPosition[0] = result[0];
        currentPosition[1] = result[1];

        points.push(currentPosition);
    };




    var max = 20;

    for(var i = 0; i < max; i++){


    }
})();