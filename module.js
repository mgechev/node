var Pi = 3.14;

//circle area
var circleA = function(r) {
	return Pi*r*r;
};

//circle perimeter
var circleP = function(r) {
	return Pi*r*2;
};

//square area
var rectangleA = function(a, b) {
	return 2*(a+b);
};

//square perimeter
var rectangleP = function(a, b) {
	return a*b;
};

//triangle area
var triangleA = function(b, h) {
	return 1/2*b*h;
};

//triangle perimeter
var triangleP = function(a, b, c) {
	return a+b+c;
};

//it needs to be exported in order to require it from the console
exports = {
	circleA: circleA,
	circleP: circleP,
	rectangleA: rectangleA,
	rectangleP: rectangleP,
	triangleA: triangleA,
	triangleP: triangleP
}

