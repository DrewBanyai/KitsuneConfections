class SiteFooter {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "SiteFooter";
		container.style.width = "100%";
		container.style.height = "80px";
		container.style.backgroundColor = "rgb(255, 100, 100)";
		
		let contentContainer = document.createElement("div");
		contentContainer.id = "ContentContainer";
		contentContainer.style.width = SiteWidth;
		contentContainer.style.height = "100%";
		contentContainer.style.margin = "auto";
		contentContainer.style.display = "flex";
		contentContainer.style.justifyContent = "space-between";
		container.appendChild(contentContainer);
		
		let siteTitleLabel = new Label("SiteTitle", SiteName, "'Titillium Web', sans-serif", "28px");
		siteTitleLabel.content.style.position = "relative";
		siteTitleLabel.content.style.top = "20px";
		siteTitleLabel.content.style.cursor = "pointer";
		siteTitleLabel.content.onclick = () => { LoadPage(new MainPage()); };
		contentContainer.appendChild(siteTitleLabel.content);
		
		return container;
	}
}