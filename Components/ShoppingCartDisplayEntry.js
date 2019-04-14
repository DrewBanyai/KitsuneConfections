class ShoppingCartDisplayEntry {
	constructor(itemName, itemCount, itemPrice, previewImageURL) {
		this.ItemName = itemName;
		this.ItemCount = itemCount;
		this.ItemPrice = itemPrice;
		this.ItemPriceString = GetPriceString(this.ItemPrice);
		this.TotalPriceLabel = null;
		this.PreviewImageURL = previewImageURL;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let centerMargin = "28px";
		
		let container = document.createElement("div");
		container.id = "ShoppingCartDisplayEntry";
		container.style.width = "100%";
		container.style.height = "80px";
		container.style.display = "flex";
		container.style.marginTop = "3px";
		container.style.marginBottom = "12px";
		container.style.backgroundColor = "rgba(200, 200, 200, 0.1)";
		container.style.borderRadius = "8px";
		
		//  Image preview
		let imageContainer = document.createElement("div");
		imageContainer.id = "ImageContainer";
		imageContainer.style.width = container.style.height;
		imageContainer.style.height = "100%";
		imageContainer.style.background = "url(" + this.PreviewImageURL + ")";
		imageContainer.style.borderRadius = "6px";
		imageContainer.style.backgroundSize = "cover";
		imageContainer.style.overflow = "hidden";
		container.appendChild(imageContainer);
		
		let itemNameLabel = new Label("ItemName", this.ItemName, "'Ubuntu', sans-serif", "18px", "span");
		itemNameLabel.content.style.color = "rgb(200, 200, 200)";
		itemNameLabel.content.style.marginTop = centerMargin;
		itemNameLabel.content.style.marginLeft = "20px";
		itemNameLabel.content.style.width = "400px";
		container.appendChild(itemNameLabel.content);
		
		let itemPriceLabel = new Label("ItemName", this.ItemPriceString, "'Ubuntu', sans-serif", "18px", "span");
		itemPriceLabel.content.style.color = "rgb(220, 220, 220)";
		itemPriceLabel.content.style.marginTop = centerMargin;
		itemPriceLabel.content.style.marginLeft = "20px";
		itemPriceLabel.content.style.width = "100px";
		container.appendChild(itemPriceLabel.content);
		
		let countInput = document.createElement("input");
		countInput.setAttribute("required", "");
		countInput.setAttribute("type", "number");
		countInput.setAttribute("min", "1");
		countInput.setAttribute("data-store-cart-unit-quantity", "");
		countInput.setAttribute("value", this.ItemCount);
		countInput.style.width = "40px";
		countInput.style.height = "20px";
		countInput.style.textAlign = "right";
		countInput.style.marginTop = centerMargin;
		countInput.style.marginRight = "10px";
		countInput.onchange = () => { this.ItemCount = countInput.value; SetShoppingCartItemCount(this.ItemName, parseInt(this.ItemCount)); this.SetItemTotalPrice(); };
		container.appendChild(countInput);
		
		let removeItemButton = new PrimaryButton("RemoveItem", "REMOVE ITEM", "'Titillium Web', sans-serif", "10px", "span");
		removeItemButton.content.style.width = "90px";
		removeItemButton.content.style.height = "25px";
		removeItemButton.content.style.cursor = "pointer";
		removeItemButton.content.style.marginTop = centerMargin;
		removeItemButton.content.onclick = () => { 
			this.ItemCount = 0;
			SetShoppingCartItemCount(this.ItemName, parseInt(this.ItemCount));
			LoadPage(new ShoppingCartPage());
		};
		container.appendChild(removeItemButton.content);
		
		this.TotalPriceLabel = new Label("ItemName", GetPriceString(this.ItemPrice * this.ItemCount), "'Ubuntu', sans-serif", "18px", "span");
		this.TotalPriceLabel.content.style.color = "rgb(220, 220, 220)";
		this.TotalPriceLabel.content.style.marginTop = centerMargin;
		this.TotalPriceLabel.content.style.width = "150px";
		this.TotalPriceLabel.content.style.textAlign = "right";
		container.appendChild(this.TotalPriceLabel.content);
		
		return container;
	}
	
	SetItemTotalPrice() {
		this.TotalPriceLabel.SetText(GetPriceString(this.ItemPrice * this.ItemCount));
	}
}