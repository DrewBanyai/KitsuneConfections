class ShoppingCartDisplay {
	constructor() {
		this.EmptyCartSign = null;
		this.TotalDueAmountLabel = null;
		this.ShoppingCartEntryList = [];
		this.ShoppingListContainer = null;
		this.content = this.GenerateContent();
		this.DetermineTotalDue();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.style.width = "100%";
		
		let shoppingCartLabel = new Label("ShoppingCartTop", "Your Shopping Cart:", "'Ubuntu', sans-serif", "24px", "div");
		shoppingCartLabel.content.style.color = "rgb(200, 200, 200)";
		shoppingCartLabel.content.style.marginTop = "20px";
		container.appendChild(shoppingCartLabel.content);
		
		let headerBreak1 = document.createElement("hr");
		headerBreak1.style.borderColor = "rgba(200, 200, 200, 0.2)";
		headerBreak1.style.marginTop = "10px";
		headerBreak1.style.marginBottom = "10px";
		container.appendChild(headerBreak1);
		
		this.ShoppingListContainer = document.createElement("div");
		this.ShoppingListContainer.style.minHeight = "600px";
		container.appendChild(this.ShoppingListContainer);
		
		this.EmptyCartSign = document.createElement("div");
		this.EmptyCartSign.id = "EmptyCartSign";
		this.ShoppingListContainer.appendChild(this.EmptyCartSign);
		
		let emptyCartLabel = new Label("EmptyCart", "You currently have no items in your cart.", "'Ubuntu', sans-serif", "24px", "div");
		emptyCartLabel.content.style.color = "rgb(200, 200, 200)";
		emptyCartLabel.content.style.margin = "14px auto 0px";
		emptyCartLabel.content.style.textAlign = "center";
		this.EmptyCartSign.appendChild(emptyCartLabel.content);
		
		let returnToShopButton = new PrimaryButton("ReturnToShop", "RETURN TO SHOP", "'Titillium Web', sans-serif", "10px", "div");
		returnToShopButton.content.style.margin = "16px auto 20px";
		returnToShopButton.content.onclick = () => { LoadPage(new MainPage()); }
		this.EmptyCartSign.appendChild(returnToShopButton.content);
		
		if (ShoppingCartList.length > 0) { this.EmptyCartSign.style.display = "none"; }
		ShoppingCartList.forEach((element) => {
			let index = this.ShoppingCartEntryList.length;
			let newEntry = new ShoppingCartDisplayEntry(element.name, element.count, element.price, element.previewURL);
			newEntry.content.ShoppingListCheck = () => {
				if (newEntry.GetItemCount() == 0) { this.RemoveItemEntry(element.name); }
				this.DetermineTotalDue(); 
			};
			this.ShoppingListContainer.appendChild(newEntry.content);
			this.ShoppingCartEntryList.push(newEntry.content);
		});
		
		let headerBreak2 = document.createElement("hr");
		headerBreak2.style.borderColor = "rgba(200, 200, 200, 0.2)";
		headerBreak2.style.marginBottom = "10px";
		this.ShoppingListContainer.appendChild(headerBreak2);
		
		let totalDueContainer = document.createElement("div");
		totalDueContainer.id = "TotalDueContainer";
		totalDueContainer.style.width = "100%";
		totalDueContainer.style.textAlign = "end";
		totalDueContainer.style.display = "inline-block";
		this.ShoppingListContainer.appendChild(totalDueContainer);
		
		let totalDueTextContainer = document.createElement("div");
		totalDueTextContainer.id = "TotalDueTextContainer";
		totalDueTextContainer.style.display = "inline-flex";
		totalDueContainer.appendChild(totalDueTextContainer);
		
		let totalDueLabel = new Label("TotalDue", "Total Due:", "'Ubuntu', sans-serif", "18px", "div");
		totalDueLabel.content.style.color = "rgb(200, 200, 200)";
		totalDueTextContainer.appendChild(totalDueLabel.content);
		
		this.TotalDueAmountLabel = new Label("TotalDueAmount", "$99.99", "'Ubuntu', sans-serif", "18px", "div");
		this.TotalDueAmountLabel.content.style.color = "rgb(200, 200, 200)";
		this.TotalDueAmountLabel.content.style.width = "150px";
		this.TotalDueAmountLabel.content.style.textAlign = "right";
		this.TotalDueAmountLabel.content.style.marginRight = "10px";
		totalDueTextContainer.appendChild(this.TotalDueAmountLabel.content);
		
		return container;
	}
	
	DetermineTotalDue() {
		let totalAmountDue = 0;
		ShoppingCartList.forEach((element) => {
			totalAmountDue += (element.price * element.count);
		});
		this.TotalDueAmountLabel.SetText(GetPriceString(totalAmountDue));
	}
	
	RemoveItemEntry(name) {
		let foundTagList = this.ShoppingCartEntryList.filter(function(element) { return (element.GetItemName() === name); });
		if (foundTagList.length === 0) { console.log("ERROR: Attempting to remove a shopping cart item entry that does not exist! (" + name + ")"); return; }
		if (foundTagList.length > 1) { console.log("ERROR: Attempting to remove a shopping cart item, but multiple of this type exist! (" + name + ")"); return; }
		this.ShoppingListContainer.removeChild(foundTagList[0]);
		
		this.ShoppingCartEntryList = this.ShoppingCartEntryList.filter(function(element) { return (element.GetItemName() !== name); });
		this.EmptyCartSign.style.display = (ShoppingCartList.length > 0) ? "none" : "block";
	}
}