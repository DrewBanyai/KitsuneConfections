class MainPage {
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
		pageContent.style.margin = "15px auto";
		pageContent.style.width = SiteWidth;
		pageContent.style.minHeight = "700px";
		
		container.appendChild(pageContent);
		
		let foodItemList = new FoodItemList(3, SiteWidth);
		foodItemList.AddFoodItem("Images/ProductPreviews/MousseBitesWithRaspberry_01.png", "Mousse Bites (with raspberry)", 1499);
		foodItemList.AddFoodItem("Images/ProductPreviews/PumpkinCakepops_01.png", "Pumpkin Cakepops", 1999);
		foodItemList.AddFoodItem("Images/ProductPreviews/Tiramasu_01.png", "Tiramasu", 2199);
		foodItemList.AddFoodItem("Images/ProductPreviews/StarCakepops_01.png", "Star Cakepops", 1299, true, "$19.99");
		foodItemList.AddFoodItem("Images/ProductPreviews/ThinMintCakepops_01.png", "Thin Mint Cakepops", 1799);
		foodItemList.AddFoodItem("Images/ProductPreviews/UnicornCupcakes_01.png", "Unicorn Cupcakes", 2599, true, "$32.99");
		foodItemList.AddFoodItem("Images/ProductPreviews/PokeballCakepops_01.png", "Pokeball Cakepops", 2199);
		pageContent.appendChild(foodItemList.content);
		
		let shoppingCartDisplay = new ShoppingCartDisplay();
		shoppingCartDisplay.content.style.display = "none";
		pageContent.appendChild(shoppingCartDisplay.content);
		
		let siteFooter = new SiteFooter();
		container.appendChild(siteFooter.content);
		
		return container;
	}
}