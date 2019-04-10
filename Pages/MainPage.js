class MainPage {
	constructor(siteWidth) {
		this.PageWidth = siteWidth;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "MainPageContainer";
		container.style.width = this.PageWidth;
		container.style.margin = "auto";
		
		let siteHeader = new SiteHeader();
		container.appendChild(siteHeader.content);
		
		let foodEntry = new FoodItemListEntry("", "200px", "200px", "Item Test");
		container.appendChild(foodEntry.content);
		
		return container;
	}
}