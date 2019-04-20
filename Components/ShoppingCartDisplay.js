class ShoppingCartDisplay {
	constructor() {
		this.EmptyCartSign = null;
		this.TotalDueAmountLabel = null;
		this.ShoppingCartEntryList = [];
		this.ShoppingListContainer = null;
		this.TotalDueContainer = null;
		this.content = this.GenerateContent();
		this.DetermineTotalDue();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "ShoppingCartDisplay";
		container.style.width = "100%";
		
		let shoppingCartLabel = new Label("ShoppingCartTop", "Your Shopping Cart:", "'Ubuntu', sans-serif", "24px", "div", "none");
		shoppingCartLabel.content.style.color = "rgb(200, 200, 200)";
		shoppingCartLabel.content.style.marginTop = "20px";
		container.appendChild(shoppingCartLabel.content);
		
		let headerBreak1 = document.createElement("hr");
		headerBreak1.style.borderColor = "rgba(200, 200, 200, 0.2)";
		headerBreak1.style.marginTop = "10px";
		headerBreak1.style.marginBottom = "10px";
		container.appendChild(headerBreak1);
		
		this.ShoppingListContainer = document.createElement("div");
		this.ShoppingListContainer.id = "ShoppingListContainer";
		this.ShoppingListContainer.style.minHeight = "600px";
		container.appendChild(this.ShoppingListContainer);
		
		this.ShoppingListArea = document.createElement("div");
		this.ShoppingListArea.id = "ShoppingListArea";
		this.ShoppingListContainer.appendChild(this.ShoppingListArea);
		
		this.EmptyCartSign = document.createElement("div");
		this.EmptyCartSign.id = "EmptyCartSign";
		this.ShoppingListContainer.appendChild(this.EmptyCartSign);
		
		let emptyCartLabel = new Label("EmptyCart", "You currently have no items in your cart.", "'Ubuntu', sans-serif", "24px", "div", "none");
		emptyCartLabel.content.style.color = "rgb(200, 200, 200)";
		emptyCartLabel.content.style.margin = "14px auto 0px";
		emptyCartLabel.content.style.textAlign = "center";
		this.EmptyCartSign.appendChild(emptyCartLabel.content);
		
		let returnToShopButton = new PrimaryButton("ReturnToShop", "RETURN TO SHOP", "'Titillium Web', sans-serif", "10px", "div");
		returnToShopButton.content.style.margin = "16px auto 20px";
		returnToShopButton.content.onclick = () => { this.LoadFoodItemList(); }
		this.EmptyCartSign.appendChild(returnToShopButton.content);
		
		let headerBreak2 = document.createElement("hr");
		headerBreak2.style.borderColor = "rgba(200, 200, 200, 0.2)";
		headerBreak2.style.marginBottom = "10px";
		this.ShoppingListContainer.appendChild(headerBreak2);
		
		this.TotalDueContainer = document.createElement("div");
		this.TotalDueContainer.id = "TotalDueContainer";
		this.TotalDueContainer.style.width = "100%";
		this.TotalDueContainer.style.textAlign = "end";
		this.TotalDueContainer.style.display = "inline-block";
		this.ShoppingListContainer.appendChild(this.TotalDueContainer);
		
		let totalDueTextContainer = document.createElement("div");
		totalDueTextContainer.id = "TotalDueTextContainer";
		totalDueTextContainer.style.display = "inline-flex";
		this.TotalDueContainer.appendChild(totalDueTextContainer);
		
		let totalDueLabel = new Label("TotalDue", "Total Due:", "'Ubuntu', sans-serif", "18px", "div", "none");
		totalDueLabel.content.style.color = "rgb(200, 200, 200)";
		totalDueLabel.content.style.width = "85px";
		totalDueTextContainer.appendChild(totalDueLabel.content);
		
		this.TotalDueAmountLabel = new Label("TotalDueAmount", "$99.99", "'Ubuntu', sans-serif", "18px", "div", "none");
		this.TotalDueAmountLabel.content.style.color = "rgb(200, 200, 200)";
		this.TotalDueAmountLabel.content.style.width = "145px";
		this.TotalDueAmountLabel.content.style.textAlign = "right";
		this.TotalDueAmountLabel.content.style.marginRight = "10px";
		totalDueTextContainer.appendChild(this.TotalDueAmountLabel.content);
		
		this.GooglePay = new GooglePay();
		this.GooglePay.content.style.marginTop = "6px";
		this.GooglePay.content.style.display = "unset";
		this.GooglePay.content.style.width = totalDueTextContainer.offsetWidth;
		this.TotalDueContainer.appendChild(this.GooglePay.content);
		
		//  Set the function to 
		this.GooglePay.SetSuccessCallback(this.SuccessfulPaymentCallback);
		
		container.SetVisible = (visible) => this.SetVisible(visible);
		container.UpdateShoppingCartDisplay = (rebuild) => this.UpdateShoppingCartDisplay(rebuild);
		
		return container;
	}
	
	SuccessfulPaymentCallback(token, price) {
		console.log("Google Pay: Payment successful!");
		console.log("Payment token: " + token);
		console.log("Payment price: " + GetPriceString(price));
		
		let purchaseCompleteDisplay = document.getElementById("PurchaseCompleteDisplay");
		if (purchaseCompleteDisplay !== null) { purchaseCompleteDisplay.SetVisible(true); }
	}
	
	SetVisible(visible) { this.content.style.display = (visible ? "block" : "none"); }
	
	LoadFoodItemList() {
		let foodItemList = document.getElementById("FoodItemList");
		if (foodItemList !== null) { foodItemList.SetVisible(true); }
		
		let shoppingCartDisplay = document.getElementById("ShoppingCartDisplay");
		if (shoppingCartDisplay !== null) { shoppingCartDisplay.SetVisible(false); }
	}
	
	UpdateShoppingCartDisplay(rebuild) {
		if (rebuild) {
			this.ShoppingListArea.innerHTML = "";
			this.ShoppingCartEntryList = [];
			this.EmptyCartSign.style.display = (ShoppingCartList.length > 0) ? "none" : "block";
			this.TotalDueContainer.style.display = (ShoppingCartList.length > 0) ? "inline-block" : "none";
			ShoppingCartList.forEach((element) => {
				let newEntry = new ShoppingCartDisplayEntry(element.name, element.count, element.price, element.previewURL);
				newEntry.ShoppingListUpdate = (rebuild) => { this.UpdateShoppingCartDisplay(rebuild); };
				this.ShoppingListArea.appendChild(newEntry.content);
				this.ShoppingCartEntryList.push(newEntry.content);
			});
		}
		
		this.DetermineTotalDue();
	}
	
	DetermineTotalDue() {
		let totalAmountDue = 0;
		ShoppingCartList.forEach((element) => {
			totalAmountDue += (element.price * element.count);
		});
		this.TotalDueAmountLabel.SetText(GetPriceString(totalAmountDue));
		this.GooglePay.SetPaymentPrice(totalAmountDue);
	}
	
	RemoveItemEntry(name) {
		console.log("test 1");
		SetShoppingCartItemCount(name, 0);
		console.log("test 2");
		this.UpdateShoppingCartDisplay();
	}
}