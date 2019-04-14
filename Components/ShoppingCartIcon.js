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
		container.style.height = "40px";
		
		let shoppingCartIcon = document.createElement("div");
		shoppingCartIcon.id = "ShoppingCartIcon";
		shoppingCartIcon.className = "fa fa-shopping-cart";
		shoppingCartIcon.style.width = "100%";
		shoppingCartIcon.style.height = "100%";
		shoppingCartIcon.style.fontSize = "40px";
		shoppingCartIcon.style.margin = "auto";
		shoppingCartIcon.style.cursor = "pointer";
		shoppingCartIcon.onclick = () => {
			LoadPage(new ShoppingCartPage());
		};
		container.appendChild(shoppingCartIcon);
		
		this.CountTag = document.createElement("div");
		this.CountTag.id = "CountTag";
		this.CountTag.style.height = "14px";
		this.CountTag.style.backgroundColor = "skyblue";
		this.CountTag.style.borderRadius = "15%";
		this.CountTag.style.position = "5%";
		this.CountTag.style.display = "flex";
		this.CountTag.style.padding = "0px 5px";
		shoppingCartIcon.appendChild(this.CountTag);
		
		this.CountLabel = new Label("Count", "1", "'Raleway', sans-serif", "11px", "div");
		this.CountLabel.content.style.color = "white";
		this.CountLabel.content.style.fontWeight = "bold";
		this.CountLabel.content.style.margin = "auto";
		this.CountLabel.content.style.marginBottom = "2px";
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
		this.CountTag.style.display = (count === 0) ? "none" : "flex";
	}
}