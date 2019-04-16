class ShoppingCartPage {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let marginTop = `${(SiteHeader.GetHeight() + 15)}px`;
		
		let container = document.createElement("div");
		container.id = "MainPageContainer";
		container.style.width = "100%";
		container.style.position = "relative";
		container.style.top = `${SiteHeader.GetHeight()}`;
		container.style.backgroundImage = "linear-gradient(to bottom right, rgb(10, 10, 10), rgb(70, 70, 70))";
		
		let siteHeader = new SiteHeader();
		container.appendChild(siteHeader.content);
		
		let pageContent = document.createElement("div");
		pageContent.id = "PageContent";
		pageContent.style.margin = "auto";
		pageContent.style.width = SiteWidth;
		pageContent.style.minHeight = "700px";
		pageContent.style.borderRadius = "15px";
		container.appendChild(pageContent);
		
		let shoppingCartDisplay = new ShoppingCartDisplay();
		pageContent.appendChild(shoppingCartDisplay.content);
		
		let siteFooter = new SiteFooter();
		container.appendChild(siteFooter.content);
		
		return container;
	}
}