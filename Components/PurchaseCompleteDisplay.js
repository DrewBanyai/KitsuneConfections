class PurchaseCompleteDisplay {
	constructor() {
		this.ExitButton = null;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "PurchaseCompleteDisplay";
		container.className = "modal";
		
		let purchaseCompleteWindow = document.createElement("div");
		purchaseCompleteWindow.id = "PurchaseCompleteWindow";
		purchaseCompleteWindow.className = "modal-content";
		container.appendChild(purchaseCompleteWindow);
		
		let purchaseCompleteTopGradient = document.createElement("div");
		purchaseCompleteTopGradient.id = "PurchaseCompleteTopGradient";
		purchaseCompleteTopGradient.className = "modal-header";
		purchaseCompleteTopGradient.style.height = "34px";
		purchaseCompleteWindow.appendChild(purchaseCompleteTopGradient);
		
		this.ExitButton = document.createElement("span");
		this.ExitButton.id = "ExitButton";
		this.ExitButton.className = "close";
		this.ExitButton.style.fontFamily = "'Titillium Web', sans-serif";
		this.ExitButton.style.fontSize = "22px";
		this.ExitButton.style.height = "100%";
		this.ExitButton.style.marginTop = "-3px";
		this.ExitButton.style.marginRight = "-7px";
		this.ExitButton.innerHTML = "x";
		purchaseCompleteTopGradient.appendChild(this.ExitButton);
		
		let purchaseCompleteLabel = new Label("PurchaseCompleteLabel", "Purchase Complete!", "'Titillium Web', sans-serif", "20px", "div");
		purchaseCompleteLabel.content.style.height = "100%";
		purchaseCompleteTopGradient.appendChild(purchaseCompleteLabel.content);
		
		let purchaseCompleteBody = document.createElement("div");
		purchaseCompleteBody.id = "PurchaseCompleteBody";
		purchaseCompleteBody.className = "modal-body";
		purchaseCompleteBody.style.textAlign = "center";
		purchaseCompleteBody.style.height = "400px";
		purchaseCompleteWindow.appendChild(purchaseCompleteBody);
		
		let orderPlacedSuccessContainer = document.createElement("div");
		orderPlacedSuccessContainer.style.height = "24px";
		orderPlacedSuccessContainer.style.margin = "auto";
		orderPlacedSuccessContainer.style.marginTop = "16px";
		orderPlacedSuccessContainer.style.display = "inline-flex";
		purchaseCompleteBody.appendChild(orderPlacedSuccessContainer);
		
		let orderPlacesSuccessPart1 = new Label("orderPlacesSuccessPart1", "Your order was successfully processed using", "'Titillium Web', sans-serif", "18px", "div");
		orderPlacesSuccessPart1.content.style.height = "100%";
		orderPlacedSuccessContainer.appendChild(orderPlacesSuccessPart1.content);
		
		let orderPlacesSuccessPart2 = new Label("orderPlacesSuccessPart2", "Google Pay", "'Titillium Web', sans-serif", "18px", "div");
		orderPlacesSuccessPart2.content.style.fontWeight = "bold";
		orderPlacesSuccessPart2.content.style.height = "100%";
		orderPlacesSuccessPart2.content.style.marginLeft = "7px";
		orderPlacedSuccessContainer.appendChild(orderPlacesSuccessPart2.content);
		
		let purchaseCompleteBottomGradient = document.createElement("div");
		purchaseCompleteBottomGradient.id = "PurchaseCompleteBottomGradient";
		purchaseCompleteBottomGradient.className = "modal-footer";
		purchaseCompleteBottomGradient.style.height = "36px";
		purchaseCompleteWindow.appendChild(purchaseCompleteBottomGradient);
		
		let returnToShopButton = new PrimaryButton("ReturnToShop", "RETURN TO SHOP", "'Titillium Web', sans-serif", "10px", "div");
		returnToShopButton.content.style.margin = "auto";
		returnToShopButton.content.style.marginTop = "6px";
		returnToShopButton.content.onclick = () => { this.LoadFoodItemList(); }
		purchaseCompleteBottomGradient.appendChild(returnToShopButton.content);
		
		this.ExitButton.onclick = () => this.SetVisible(false);
		container.onclick = () => { if (event.target == container) { this.SetVisible(false); } }
		
		container.SetVisible = (visible) => this.SetVisible(visible);
		
		return container;
	}
	
	SetVisible(visible) { this.content.style.display = (visible ? "block" : "none"); }
	
	LoadFoodItemList() {
		let foodItemList = document.getElementById("FoodItemList");
		if (foodItemList !== null) { foodItemList.SetVisible(true); }
		
		let shoppingCartDisplay = document.getElementById("ShoppingCartDisplay");
		if (shoppingCartDisplay !== null) { shoppingCartDisplay.SetVisible(false); }
		
		let purchaseCompleteDisplay = document.getElementById("PurchaseCompleteDisplay");
		if (purchaseCompleteDisplay !== null) { purchaseCompleteDisplay.SetVisible(false); }
	}
}