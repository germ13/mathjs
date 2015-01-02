var Point = require('./Point2D.js');

proc();

function proc(){
  var x_max = 100;
  var i = 1;
  //var count = 1;
  var m = new Mover();

  outer:
  do {
    //console.log(m.getPoint());
    for(var j = 0; j < 2; j++){
      for(var k = 0; k < i; k++){
        m.move();
        if (m.getPoint().value > x_max) break outer;
      }
      m.changeDirection();
    }
    i++;
  } while(1 === 1);

  console.log(m.getSequence());
}

function Mover(){
  var directions = ['r', 'u', 'l', 'd'];
  var index = 0;
  var currentDirection = directions[index];
  var point = new Point(0,0,1);
  var sequence = [];
  sequence.push(new Point(point.x, point.y, point.value));

  this.getPoint = function(){
    return point;
  };

  this.move = function(){
    switch(currentDirection){
     case 'l' :
       point.x = point.x - 1;
       break;
     case 'r':
       point.x = point.x + 1;
       break;
     case 'u':
       point.y = point.y + 1;
       break;
     case 'd':
       point.y = point.y - 1;
       break;
     default:
      break;
    }
    point.value = point.value + 1;
    insertPoint();
  };

  this.getSequence = function(){
    return sequence;
  };

  function insertPoint(){
    sequence.push(new Point(point.x, point.y, point.value));
  }

  this.changeDirection = function(){
    index = (index + 1) % directions.length;
    currentDirection = directions[index];
  };
}
