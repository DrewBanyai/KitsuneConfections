class SiteHeader {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "SiteHeader";
		container.style.width = "100%";
		container.style.height = "80px";
		container.style.margin = "auto";
		container.style.backgroundColor = "rgb(255, 100, 100)";
		container.style.marginBottom = "5px";
		
		let headerContainer = document.createElement("div");
		headerContainer.id = "HeaderContainer";
		headerContainer.style.width = SiteWidth;
		headerContainer.style.height = "100%";
		headerContainer.style.margin = "auto";
		headerContainer.style.display = "flex";
		headerContainer.style.justifyContent = "space-between";
		container.appendChild(headerContainer);
		
		let siteTitleLabel = new Label("SiteTitle", SiteName, "'Titillium Web', sans-serif", "28px");
		siteTitleLabel.content.style.position = "relative";
		siteTitleLabel.content.style.top = "20px";
		siteTitleLabel.content.style.marginLeft = "20px";
		headerContainer.appendChild(siteTitleLabel.content);
		
		let shoppingCartIcon = new ShoppingCartIcon();
		shoppingCartIcon.content.style.position = "relative";
		shoppingCartIcon.content.style.top = "20px";
		headerContainer.appendChild(shoppingCartIcon.content);
		
		return container;
	}
}