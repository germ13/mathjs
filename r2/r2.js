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
