(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*

 * Get number n
 * Calculate sequence s_i = [ 0, i, 2i, 3i, ..., (n-3)i, (n-2)i, (n-1)i ] for i = 1, ..., n-1
 * The set of above sequences we refer to as S
 * Plot each sequence in S, in its own circle in the following manner:
 ** Each point gets plotted to coordinates:  i \left< \frac{cos 2 \pi }{n}, \frac{sin 2\pi}{n} \right>
 ** Each point is connected by a line to its adjacent points.
 ** In the case of the first and last point these two are treated as adjacent, connecting the first to the last.

 */
var R2 = require('./../r2/r2.js');

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
   

},{"./../r2/r2.js":2}],2:[function(require,module,exports){
var R2 = function(canvas, _wlx, _wly, _wrx, _wuy){
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = 'darkgray';
  ctx.fillRect(0, 0, canvas.width - 1, canvas.height - 1);


  this.width = canvas.width;
  this.height = canvas.height;
  
  this.wlx = _wlx;
  this.wly = _wly;
  
  this.wrx = _wrx;
  this.wuy = _wuy;
  
  this.dx = Math.abs(_wrx - _wlx) + 1;
  this.dy = Math.abs(_wuy - _wly) + 1;
  
  this.mx = ( this.width - 1 ) / ( this.wrx - this.wlx );
  this.bx = -this.mx * this.wlx;
  
  this.my = ( this.height - 1 ) / ( this.wly - this.wuy );
  
  this.by = -this.my * this.wuy;
  
  
  this.map2 = function(wx, wy){
    return [Math.round(this.mx * wx + this.bx) , Math.round(this.my * wy + this.by) ];
  };
  
  this.map = function(i, j, color){
    var x = Math.abs(i - this.wlx);
    var y = Math.abs(j - this.wuy);
    
    var rx = x * (this.width / this.dx);
    var ry = y * (this.height / this.dy);
    
    if(color){
      ctx.fillStyle = color;
    }
    else{
      ctx.fillStyle = "#000000";
    }
    
    ctx.fillRect(rx, ry, this.width / this.dx, this.height / this.dy);
    canvas.draw;
  }
  
}

var canvas = document.getElementById('canvas');
var k = new R2(canvas, -3,-5, 15,5);
k.map(0,0, 'blue');
k.map(1,1, 'yellow');
k.map(2,2, 'lightgray');
k.map(-3,0, 'red');
k.map(5,5, 'green');
k.map(15,5, 'purple');

},{}]},{},[1]);
