class ShoppingCartPage {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "MainPageContainer";
		
		let siteHeader = new SiteHeader();
		container.appendChild(siteHeader.content);
		
		let pageContent = document.createElement("div");
		pageContent.id = "PageContent";
		pageContent.style.margin = "auto";
		pageContent.style.width = SiteWidth;
		//pageContent.style.backgroundImage = "linear-gradient(to right, rgba(100, 100, 100, 0.2), rgba(150, 150, 150, 0.2))";
		pageContent.style.borderRadius = "15px";
		container.appendChild(pageContent);
		
		let shoppingCartDisplay = new ShoppingCartDisplay();
		pageContent.appendChild(shoppingCartDisplay.content);
		
		let siteFooter = new SiteFooter();
		container.appendChild(siteFooter.content);
		
		return container;
	}
}