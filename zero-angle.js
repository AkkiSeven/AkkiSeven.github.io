var point1 = new Point(100, 100);
var point2 = new Point(600, 0);
var path = new Path();

path.strokeColor = 'white';

path.moveTo(point1);

path.lineTo(point1 + point2);