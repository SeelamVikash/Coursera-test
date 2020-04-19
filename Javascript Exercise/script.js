function Circle(radius){
	this.radius =radius;
	console.log(this.radius)
	
	this.getarea = function (){
		this.area = Math.PI*Math.pow(this.radius,2);
		return this.area;
	};
};

var mycircle = new Circle(10);
console.log(mycircle.getarea());

var Circle = {
	radius:10,
	area: function (){
		var self = this

	var increased_area = function(){
		self.radius=20;
	};
	this.area1 = Math.PI*Math.pow(this.radius,2);
	increased_area();
	this.area2 = Math.PI*Math.pow(self.radius,2);
	return [this.area2,this.area1];
	}
};
console.log(Circle.area());