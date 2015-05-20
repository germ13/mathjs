(function(){
    var PrimePivot = require('./prime-pivot.js');
    var R2 = require('../r2/r2.js');

    var colors = ['aqua','lime','silver', 'black', 'blue','navy','white',
        'fuchsia','olive','yellow', 'gray', 'purple', 'green', 'red'];


    var canvas = document.getElementById('canvas');

    var r2 = new R2(canvas, -500,-500, 500, 500);
    var pp = new PrimePivot(31,1);
    var path = pp.iterate(50001);
    //console.dir(path);

    path.map(function(aPoint){
        var color = colors[Math.floor(Math.random() * colors.length)];
        r2.plot(aPoint.x, aPoint.y, aPoint.color);
    });
})();



