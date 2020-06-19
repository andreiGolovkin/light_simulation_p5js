class Map{
	constructor(){
		this.walls = [];
		this.res = 5;

		this.addRect(200, 200, 100, 100);
		this.addRect(150, 150, 100, 100);
		this.addCircle(300, 300, 100);
	}

	addLine(x1, y1, x2, y2){
		let start = createVector(x1, y1);
		let finish = createVector(x2, y2);
		let dir = createVector(finish.x, finish.y).sub(start).normalize();
		let len = dist(start.x, start.y, finish.x, finish.y);

		let amount = len / this.res;
		amount += amount * this.res == len ? 0 : 1;
		//console.log(amount);
		//this.walls.push(new Wall(start.x, start.y, finish.x, finish.y));

		for(let n = 1; n < amount; n++){
			if(n < amount - 1){
				this.walls.push(new Wall(start.x + dir.x * (n - 1) * len / amount, start.y + dir.y * (n - 1) * len / amount, start.x + dir.x * n * len / amount, start.y + dir.y * n * len / amount));
			}
			else this.walls.push(new Wall(start.x + dir.x * (n - 1) * len / amount, start.y + dir.y * (n - 1) * len / amount, finish.x, finish.y));
		}
	}

	addRect(x, y, w, h){
		this.addLine(x, y, x + w, y);
		this.addLine(x, y, x, y + h);
		this.addLine(x, y + h, x + w, y + h);
		this.addLine(x + w, y, x + w, y + h);
	}

	addCircle(x, y, r){
		let w = r;
		for(let n = 1.0; n <= w; n++){
			//console.log((n / w) * PI * 2);
			let rate = n / w;
			let prevRate = (n - 1) / w;

			let x1 = x + cos(prevRate * PI * 2) * r;
			let x2 = x + cos(rate * PI * 2) * r;
			let y1 = y + sin(prevRate * PI * 2) * r;
			let y2 = y + sin(rate * PI * 2) * r;

			this.addLine(x1, y1, x2, y2);
		}
	}

	draw(){
		for(let wall of this.walls){
			wall.draw();
		}
	}

	update(){
		for(let wall of this.walls){
			wall.checked = false;
		}
	}
}
