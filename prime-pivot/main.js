/**
 * Created by germ13 on 2/14/2015.
 */
(function(){
    var Point = require('./point.js');
    //    var p = new point();

    var Mover = function(numberOfSides, sideLength){
        var t = this;
        this.p = new Point();
        this.numberOfSides = numberOfSides || 3;
        this.sideLength = sideLength || 1;
        this.paths = {};
        // this.path = {
        //     0: function(){
        // 	t.p.x--;
        //     },
        //     1: function(){
        // 	t.p.x++;
        //     }
        // };

        this.populatePaths = function(){
            console.log(';;;;;' + t.numberOfSides + ' ' + t.sideLength);
            for(var i = 0; i < t.numberOfSides; i++){
                t.paths[i] = function(){
                    t.p.x = t.p.x + t.sideLength * Math.cos( ( i / t.numberOfSides ) * Math.PI );
                    t.p.y = t.p.y + t.sideLength * Math.sin( ( i / t.numberOfSides ) * Math.PI );
                };
            }

        };


    };




    module.exports = Mover;
})();
