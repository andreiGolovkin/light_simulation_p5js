let src;
let map;

function setup(){
	createCanvas(800, 600);

	src = new Source(200, 200);
	map = new Map();
}

function draw(){
	map.update();
	src.moveTo(mouseX, mouseY);

	background(0);

	src.draw(map);
	map.draw();
}
