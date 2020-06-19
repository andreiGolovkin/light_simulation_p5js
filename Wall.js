class Wall{
	constructor(x1, y1, x2, y2){
		this.pos1 = createVector(x1, y1);
		this.pos2 = createVector(x2, y2);
		this.checked = false;
	}

	draw(){
		if(this.checked)
			stroke(255);
		else
			stroke(0, 0, 0);
		line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
	}
}
