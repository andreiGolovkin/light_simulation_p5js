class Ray{
	constructor(pos){
		this.pos = pos;
		this.dir = createVector(1, 0);

		this.length = 2000000;
	}

	draw(){
		stroke(255);
		fill(255);

		if(this.point){
			//ellipse(this.point.x, this.point.y, 10, 10);
			line(this.pos.x, this.pos.y, this.point.x, this.point.y);
		}
		else line(this.pos.x, this.pos.y, this.pos.x + this.dir.x * this.length, this.pos.y + this.dir.y * this.length);
	}

	check(map){
		this.point = null;

		let x1 = this.pos.x;
		let y1 = this.pos.y;
		let x2 = this.pos.x + this.dir.x;
		let y2 = this.pos.y + this.dir.y;

		let smallestDist = Infinity;
		let w;

		for(let wall of map.walls){
			let x3 = wall.pos1.x;
			let y3 = wall.pos1.y;
			let x4 = wall.pos2.x;
			let y4 = wall.pos2.y;

			const div = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

			if(div != 0){

				let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / div;
				let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / div;

				if(t >= 0 && u >= 0 && u <= 1){
					let px = x1 + t * (x2 - x1);
					let py = y1 + t * (y2 - y1);

					let d = dist(px, py, this.pos.x, this.pos.y);

					if(d < smallestDist){
						w = wall;
						smallestDist = d;
						if(this.point){
							this.point.x = px;
							this.point.y = py;
						}
						else{
							this.point = createVector(px, py);
						}
					}
				}
			}
		}
		if(w) w.checked = true;

		//return t >= 0 && u >= 0 && u <= 1;
	}

	lookAt(x, y){
		this.dir.x = x - this.pos.x;
		this.dir.y = y - this.pos.y;

		this.dir.normalize();
	}

	turn(angle){
		this.dir.rotate(angle);
	}
}
