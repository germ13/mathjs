var R2 = require('../r2/r2.js');
var Ulam = require('./ulam.js');
var Primes = require('../primes/primes.js');

var canvas = document.getElementById('canvas');
//var k = new R2(canvas, -3,-5, 15,5);
draw(1000);


function draw(maxNum) {
    var k = new Ulam(maxNum);
    var r = new R2(canvas, -100, -100, 100, 100);
    k.start();
    var points = k.getSequence();
    console.dir(points);

    points.forEach(function (point) {

        if (Primes.isPrime(point.value))
            r.map(point.x, point.y, 'white');
        else {
            if (point.value) {
                r.map(point.x, point.y, 'black');
            }
        }
    });
}


var maxValue = document.getElementById('id_input_maxNum');
var submitButton = document.getElementById('id_button_submit');

submitButton.addEventListener('click', function (){
    draw(maxValue.value);
}, false);

