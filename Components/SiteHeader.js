class SiteHeader {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "SiteHeader";
		container.style.width = SiteWidth;
		container.style.height = "80px";
		container.style.margin = "auto";
		container.style.backgroundColor = "rgb(255, 100, 100)";
		container.style.marginBottom = "5px";
		
		return container;
	}
}