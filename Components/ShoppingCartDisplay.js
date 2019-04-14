class ShoppingCartDisplay {
	constructor() {
		this.EmptyCartLabel = null;
		this.content = this.GenerateContent();
		
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
		
		let shoppingListContainer = document.createElement("div");
		shoppingListContainer.style.minHeight = "600px";
		container.appendChild(shoppingListContainer);
		
		this.EmptyCartLabel = new Label("EmptyCart", "You currently have no items in your cart.", "'Ubuntu', sans-serif", "24px", "div");
		this.EmptyCartLabel.content.style.color = "rgb(200, 200, 200)";
		this.EmptyCartLabel.content.style.position = "relative";
		this.EmptyCartLabel.content.style.margin = "auto";
		this.EmptyCartLabel.content.style.textAlign = "center";
		this.EmptyCartLabel.content.style.top = "240px";
		shoppingListContainer.appendChild(this.EmptyCartLabel.content);
		
		if (ShoppingCartList.length > 0) { this.EmptyCartLabel.content.style.display = "none"; }
		ShoppingCartList.forEach((element) => {
			let listEntry = new ShoppingCartDisplayEntry(element.name, element.count, element.price, element.previewURL);
			shoppingListContainer.appendChild(listEntry.content);
		});
		
		let headerBreak2 = document.createElement("hr");
		headerBreak2.style.borderColor = "rgba(200, 200, 200, 0.2)";
		headerBreak2.style.marginTop = "10px";
		headerBreak2.style.marginBottom = "10px";
		container.appendChild(headerBreak2);
		
		return container;
	}
}