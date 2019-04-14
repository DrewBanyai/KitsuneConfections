class ShoppingCartPage {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		console.log("ShoppingCartPage");
		console.log(ShoppingCartList);
		
		let container = document.createElement("div");
		container.id = "MainPageContainer";
		
		let siteHeader = new SiteHeader();
		container.appendChild(siteHeader.content);
		
		let pageContent = document.createElement("div");
		pageContent.id = "PageContent";
		pageContent.style.margin = "auto";
		pageContent.style.width = SiteWidth;
		pageContent.style.borderRadius = "15px";
		container.appendChild(pageContent);
		
		let shoppingCartDisplay = new ShoppingCartDisplay();
		pageContent.appendChild(shoppingCartDisplay.content);
		
		let siteFooter = new SiteFooter();
		container.appendChild(siteFooter.content);
		
		return container;
	}
}