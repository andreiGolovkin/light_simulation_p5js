class Source{
	constructor(x, y){
		this.pos = createVector(x, y);

		this.rays = [];
		for(let n = 0; n < 360; n++){
			this.rays.push(new Ray(this.pos));
			this.rays[n].turn(2 * PI * (n / 360));
		}
	}

	draw(walls){
		for(let ray of this.rays){
			ray.check(walls);
			ray.draw();
		}
	}

	moveTo(x, y){
		this.pos.x = x;
		this.pos.y = y;
	}
}
