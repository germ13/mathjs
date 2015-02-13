/*

 * Get number n
 * Calculate sequence s_i = [ 0, i, 2i, 3i, ..., (n-3)i, (n-2)i, (n-1)i ] for i = 1, ..., n-1
 * The set of above sequences we refer to as S
 * Plot each sequence in S, in its own circle in the following manner:
 ** Each point gets plotted to coordinates:  i \left< \frac{cos 2 \pi }{n}, \frac{sin 2\pi}{n} \right>
 ** Each point is connected by a line to its adjacent points.
 ** In the case of the first and last point these two are treated as adjacent, connecting the first to the last.

 */


var CyclicModPermutation = function(number){
    'use strict';

    this.getLittleS = function(i){
        var result = [];
        for(var j = 0; j < number; j++){
            result.push( ( j * i ) % number );
        }
        return result;
    };

    this.getS = function(){
        var result = [];
        for(var i = 1; i < number; i++){
            result.push( this.getLittleS(i) );
        }
        return result;
    };

    this.getCircleCoordinates = function(i){
        var result = [];
        var s = this.getLittleS(i);
        for(var k = 0; k < s.length; k++){
            var coords = [];
            coords.push( Math.cos(2 * Math.PI *  s[k]  / number ) );
            coords.push( Math.sin(2 * Math.PI *  s[k]  / number ) );
            result.push(coords);
        }

        return result;
    };
};

var program = new CyclicModPermutation(5);
console.log(program.getLittleS(1));
console.log(program.getLittleS(2));
console.log(program.getLittleS(3));
console.log(program.getLittleS(4));
console.log('------------');
console.log(program.getS());
console.log('------------');
//console.log(program.getCircleCoordinates(0));
console.log(program.getCircleCoordinates(1));
console.log(program.getCircleCoordinates(2));
console.log(program.getCircleCoordinates(3));
console.log(program.getCircleCoordinates(4));
//console.log(program.getCircleCoordinates(5));

function times10(n){
    return [n[0] * 100, n[1] * 100];
}
console.log('******************');
console.log( program.getCircleCoordinates(1).map(times10) );
   
