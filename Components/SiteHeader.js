class SiteHeader {
	constructor() {
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "SiteHeader";
		container.style.width = "100%";
		container.style.height = `${SiteHeader.GetHeight()}px`;
		container.style.backgroundImage = "linear-gradient(to right, rgb(255, 99, 0), rgb(255, 165, 0))";
		
		let contentContainer = document.createElement("div");
		contentContainer.id = "ContentContainer";
		contentContainer.style.width = SiteWidth;
		contentContainer.style.height = "100%";
		contentContainer.style.margin = "auto";
		contentContainer.style.display = "flex";
		contentContainer.style.justifyContent = "space-between";
		container.appendChild(contentContainer);
		
		let siteTitleLabel = new Label("SiteTitle", SiteName, "'Titillium Web', sans-serif", "28px", "span", "none");
		siteTitleLabel.content.style.position = "relative";
		siteTitleLabel.content.style.top = "20px";
		siteTitleLabel.content.style.cursor = "pointer";
		siteTitleLabel.content.onclick = () => { this.LoadFoodItemList(); };
		contentContainer.appendChild(siteTitleLabel.content);
		
		let shoppingCartIcon = new ShoppingCartIcon();
		shoppingCartIcon.content.style.position = "relative";
		shoppingCartIcon.content.style.top = "20px";
		contentContainer.appendChild(shoppingCartIcon.content);
		
		return container;
	}
	
	LoadFoodItemList() {
		let foodItemList = document.getElementById("FoodItemList");
		if (foodItemList !== null) { foodItemList.SetVisible(true); }
		
		let shoppingCartDisplay = document.getElementById("ShoppingCartDisplay");
		if (shoppingCartDisplay !== null) { shoppingCartDisplay.SetVisible(false); }
	}
	
	static GetHeight() { return 80; }
}