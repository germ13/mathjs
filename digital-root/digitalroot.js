'use strict';

var piString = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067";

var pi = piString.replace(' ', '').split('');


var digitalSum = function(number, base){
    var lb = Math.floor( log_b(number, base) );
    // console.log("number, base, lb" + number + ' ' + base + ' ' + lb );
    var sum = 0;
    for( var index = 0; index <= lb; index++ ){
    	 sum += partialSum(number, base, index);
    }
    return sum;
};

var digitalSum10 = function(number){
    var req = number.toString().replace(' ', '').replace('.', '');
    var sum = 0;
    for(var i = 0, len = req.length; i < len; i++){
	sum += parseInt(req[i], 10);
    }    
    return sum;
};

var digitalRoot10 = function(number){
    var result = digitalSum10(number);
    console.log("digitalRoot10::result : " + result );
    while ( result  > 9 ){
	result = digitalSum10(result);
    };
    return result;
};

var log_b = function(number, base){
    return ( Math.log( number ) /  Math.log(base)) ;
};

var partialSum = function (number, base, index ) { 
    var result = ( (number % Math.pow(base, index + 1)) - (number % Math.pow(base, index )) ) 
	/ Math.pow(base, index);
    return result;
};


var digitalRoot = function(number, base){
    var x = number;
    do{
	x = digitalSum(x, base);
    } while(x >= base)
    return x;
};


var digitalRootOfPi = function(depth){
    depth = (depth === undefined) ? 0 : depth;
    
    for(var i = 0, len = piString.length; i < len; i++){
	var num = piString.substring(0,i);
	console.log(i + ', ' + digitalRoot(num, 10));
    }
    

    
};

//console.log( Math.floor( log_b(8887, 10) ) );
// console.log( digitalRoot(8887, 16) );
// console.log( digitalRoot(8888, 16) );
// console.log( digitalRoot(8889, 16) );
// console.log( digitalRoot(8890, 16) );
// console.log( digitalRoot(8001, 16) );


//digitalRootOfSumPi(99);
console.log(digitalSum10(piString));
console.log(' - - -  ' + digitalRoot10(piString));




var plusB = function(n1, n2, base){
    
};

var dmap = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    A : 10,
    B : 11,
    C : 12,
    D : 13,
    E : 14,
    F : 15,
    G : 16,
    H : 17, 
    I : 18,
    J : 19,
    K : 20,
    L : 21,
    M : 22,
    N : 23,
    O : 24,
    P : 25,
    Q : 26,
    R : 27,
    S : 28,
    T : 29,
    U : 30,
    V : 31,
    W : 32,
    X : 33,
    Y : 34,
    Z : 35
}


