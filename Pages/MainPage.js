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
		
		let siteHeader = new SiteHeader("Kitsune Confections");
		container.appendChild(siteHeader.content);
		
		let foodEntryRow1 = document.createElement("div");
		foodEntryRow1.id = "FoodListEntryRow";
		foodEntryRow1.style.width = "100%";
		foodEntryRow1.style.textAlign = "center";
		container.appendChild(foodEntryRow1);
		
		let foodItemList = new FoodItemList(3, this.PageWidth);
		foodItemList.AddFoodItem("images/ProductPreviews/MousseBitesWithRaspberry_01.png", "Mousse Bites (with raspberry)", "$14.99");
		foodItemList.AddFoodItem("images/ProductPreviews/PumpkinCakepops_01.png", "Pumpkin Cakepops", "$19.99");
		foodItemList.AddFoodItem("images/ProductPreviews/Tiramasu_01.png", "Tiramasu", "$21.99");
		foodItemList.AddFoodItem("images/ProductPreviews/StarCakepops_01.png", "Star Cakepops", "$12.99", true);
		foodItemList.AddFoodItem("images/ProductPreviews/ThinMintCakepops_01.png", "Thin Mint Cakepops", "$17.99");
		foodItemList.AddFoodItem("images/ProductPreviews/UnicornCupcakes_01.png", "Unicorn Cupcakes", "$24.99", true);
		foodItemList.AddFoodItem("images/ProductPreviews/PokeballCakepops_01.png", "Pokeball Cakepops", "$21.99");
		container.appendChild(foodItemList.content);
		
		let siteFooter = new SiteFooter("Kitsune Confections");
		container.appendChild(siteFooter.content);
		
		return container;
	}
}