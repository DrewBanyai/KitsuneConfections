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
		
		let foodItemList = new FoodItemList(3, SiteWidth);
		foodItemList.AddFoodItem("images/ProductPreviews/ThinMintCakepops_01.png", "Thin Mint Cakepops", "$17.99");
		foodItemList.AddFoodItem("images/ProductPreviews/UnicornCupcakes_01.png", "Unicorn Cupcakes", "$24.99", true);
		foodItemList.AddFoodItem("images/ProductPreviews/PokeballCakepops_01.png", "Pokeball Cakepops", "$21.99");
		foodItemList.AddFoodItem("images/ProductPreviews/MousseBitesWithRaspberry_01.png", "Mousse Bites (with raspberry)", "$14.99");
		foodItemList.AddFoodItem("images/ProductPreviews/PumpkinCakepops_01.png", "Pumpkin Cakepops", "$19.99");
		foodItemList.AddFoodItem("images/ProductPreviews/Tiramasu_01.png", "Tiramasu", "$21.99");
		foodItemList.AddFoodItem("images/ProductPreviews/StarCakepops_01.png", "Star Cakepops", "$12.99", true);
		pageContent.appendChild(foodItemList.content);
		
		let siteFooter = new SiteFooter();
		container.appendChild(siteFooter.content);
		
		return container;
	}
}