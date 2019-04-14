class SiteFooter {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "SiteFooter";
		container.style.width = SiteWidth;
		container.style.height = "80px";
		container.style.margin = "auto";
		container.style.backgroundColor = "rgb(255, 100, 100)";
		container.style.marginBottom = "5px";
		
		let siteTitleLabel = new Label("SiteTitle", SiteName, "'Titillium Web', sans-serif", "28px");
		siteTitleLabel.content.style.position = "relative";
		siteTitleLabel.content.style.top = "19px";
		siteTitleLabel.content.style.marginLeft = "20px";
		container.appendChild(siteTitleLabel.content);
		
		return container;
	}
}