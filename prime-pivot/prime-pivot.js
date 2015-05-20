(function(){
    var Point = require('../geometry/Point2D.js');
    var Primes = require('../primes/primes.js');
    var Colors = require('../geometry/colors.js');
    var c = new Colors();

    var PrimePivot = function(numberOfSides, sideLength){
        var t = this;

        var currentColor = c.randomColor();
        var currentPosition =  new Point(0,0,0, currentColor);
        var currentDirection = 0;

        var numberOfSides = numberOfSides || 3;
        var sideLength = sideLength || 1;

        this.rotate = function(){
            currentDirection = (currentDirection + 1) % numberOfSides;
        };

        this.directionVector = function(){
            var x =  sideLength * Math.cos( ( currentDirection / (numberOfSides ) ) * 2 * Math.PI );
            var y =  sideLength * Math.sin( ( currentDirection / (numberOfSides ) ) * 2 * Math.PI );
            return new Point(x, y); //Point used as vector here.
        };

        this.move = function(){
            currentPosition = currentPosition.add(this.directionVector());
            return currentPosition;
        };

        this.iterate = function(max){
            console.log('----------------------------------------------------');
            console.log("Number of sides: " + numberOfSides);
            var path = [];
            path.push(currentPosition);
            //this.rotate();
            var p;
            for(var i = 1; i <= max; i++){
                if ( Primes.isPrime(i) ){
                    this.rotate();
                    currentColor = c.randomColor();
                }
                p = this.move();
                //p.x = Math.floor(p.x * 10) / 10;
                //p.y = Math.floor(p.y * 10) / 10;
                p.value = i;
                p.color = currentColor;
                path.push(p);
            }
            return path;
        };
    };
    module.exports = PrimePivot;
})();
