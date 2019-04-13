class SiteFooter {
	constructor(siteTitle) {
		this.SiteTitle = siteTitle;
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
		
		let siteTitle = new Label("SiteTitle", this.SiteTitle, "'Titillium Web', sans-serif", "28px");
		siteTitle.content.style.position = "relative";
		siteTitle.content.style.top = "19px";
		siteTitle.content.style.marginLeft = "20px";
		container.appendChild(siteTitle.content);
		
		return container;
	}
}