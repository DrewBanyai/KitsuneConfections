class ShoppingCartIcon {
	constructor() {
		this.CountTag
		this.CountLabel = null;
		this.content = this.GenerateContent();
		this.SetItemCount(CartItemCount);
	}
	
	GenerateContent() {
		let container = document.createElement("span");
		container.id = "ShoppingCartIcon";
		container.style.width = "40px";
		container.style.height = "60px";
		
		let shoppingCartImage = document.createElement("div");
		shoppingCartImage.id = "ShoppingCartImage";
		shoppingCartImage.className = "fa fa-shopping-cart";
		shoppingCartImage.style.width = "100%";
		shoppingCartImage.style.height = "100%";
		shoppingCartImage.style.fontSize = "40px";
		shoppingCartImage.style.margin = "auto";
		shoppingCartImage.style.cursor = "pointer";
		shoppingCartImage.style.justifyContent = "center";
		shoppingCartImage.style.alignContent = "center";
		shoppingCartImage.style.textAlign = "center";
		shoppingCartImage.style.display = "inline-grid";
		shoppingCartImage.onclick = () => { this.LoadShoppingCart(); };
		container.appendChild(shoppingCartImage);
		
		this.CountTag = document.createElement("div");
		this.CountTag.id = "CountTag";
		this.CountTag.style.width = "fit-content";
		this.CountTag.style.height = "14px";
		this.CountTag.style.backgroundColor = "rgba(185, 25, 30, 0.95)";
		this.CountTag.style.borderRadius = "15%";
		this.CountTag.style.display = "flex";
		this.CountTag.style.margin = "auto";
		this.CountTag.style.padding = "0px 4px";
		this.CountTag.style.position = "relative";
		this.CountTag.style.top = "-27px";
		shoppingCartImage.appendChild(this.CountTag);
		
		this.CountLabel = new Label("Count", "1", "'Titillium Web', sans-serif", "11px", "div");
		this.CountLabel.content.style.color = "white";
		this.CountLabel.content.style.fontWeight = "bold";
		this.CountLabel.content.style.margin = "1px auto 0px";
		this.CountTag.appendChild(this.CountLabel.content);
		
		//  The hover-over zoom (shoppingCartIconZoom)
		container.onmouseover = () => {
			container.className = "shoppingCartIconZoom";
		}
		
		container.SetItemCount = (count) => this.SetItemCount(count);
		
		return container;
	}
	
	SetItemCount(count) {
		this.CountLabel.SetText(count);
		this.CountTag.style.visibility = (count === 0) ? "hidden" : "visible";
	}
	
	LoadShoppingCart() {
		let foodItemList = document.getElementById("FoodItemList");
		if (foodItemList !== null) { foodItemList.SetVisible(false); }
		
		let shoppingCartDisplay = document.getElementById("ShoppingCartDisplay");
		if (shoppingCartDisplay !== null) { shoppingCartDisplay.SetVisible(true); }
		
		shoppingCartDisplay.UpdateShoppingCartDisplay(true);
	}
}