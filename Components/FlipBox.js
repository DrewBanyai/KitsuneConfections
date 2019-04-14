class FlipBox {
	constructor(name, divType) {
		this.FlipBoxSide1 = null;
		this.FlipBoxSide2 = null;
		this.content = this.GenerateContent();
		this.content.id = name + "FlipBox";
		this.content.type = divType;
	}
	
	GenerateContent() {
		//  Flip Box Test
		let flipBox = document.createElement("div");
		flipBox.className = "flip-box";
		
		let flipBoxInner = document.createElement("div");
		flipBoxInner.className = "flip-box-inner";
		flipBox.appendChild(flipBoxInner);
		
		this.FlipBoxSide1 = document.createElement("div");
		this.FlipBoxSide1.className = "flip-box-front";
		flipBoxInner.appendChild(this.FlipBoxSide1);
		
		this.FlipBoxSide2 = document.createElement("div");
		this.FlipBoxSide2.className = "flip-box-back";
		flipBoxInner.appendChild(this.FlipBoxSide2);
		
		return flipBox;
	}
	
	DefineSide1(container) { this.FlipBoxSide1.innerHTML = []; this.FlipBoxSide1.appendChild(container); }
	DefineSide2(container) { this.FlipBoxSide2.innerHTML = []; this.FlipBoxSide2.appendChild(container); }
}