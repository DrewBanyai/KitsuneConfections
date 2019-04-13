class FoodItemListEntry {
	constructor(previewImageURL, itemName, itemPrice) {
		this.PreviewImageURL = previewImageURL;
		this.ItemName = itemName;
		this.ItemPrice = itemPrice;
		this.OnSaleTag = null;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let entryWidth = "240px";
		let entryHeight = "240px";
		let entryBoxShadow = "1px 3px 5px lightgray";
		let previewImageHeight = "180px";
		let borderRadius = "5px";
		let entryMargin = "10px";
		
		//  Outer container
		let container = document.createElement("div");
		container.id = "FoodItemListEntry";
		container.style.display = "inline-block";
		container.style.width = entryWidth;
		container.style.height = entryHeight;
		container.style.borderRadius = borderRadius;
		container.style.margin = entryMargin;
		container.style.boxShadow = entryBoxShadow;
		container.style.backgroundImage = "linear-gradient(to right, rgb(245, 245, 245), rgb(230, 230, 230))";
		
		//  Image preview
		let imageContainer = document.createElement("div");
		imageContainer.id = "ImageContainer";
		imageContainer.style.width = entryWidth;
		imageContainer.style.height = previewImageHeight;
		imageContainer.style.background = "url(" + this.PreviewImageURL + ")";
		imageContainer.style.borderRadius = `${borderRadius} ${borderRadius} 0px 0px`;
		imageContainer.style.backgroundSize = "cover";
		imageContainer.style.overflow = "hidden";
		container.appendChild(imageContainer);
		
		this.OnSaleTag = document.createElement("div");
		this.OnSaleTag.className = "corner-ribbon FoodItemListEntry-sale sticky green shadow";
		this.OnSaleTag.style.position = "relative";
		this.OnSaleTag.style.display = "none";
		this.OnSaleTag.innerHTML = "On Sale";
		imageContainer.appendChild(this.OnSaleTag);
		
		//  Item name label
		let itemNameLabel = new Label("ItemName", this.ItemName, "'Titillium Web', sans-serif", "14px", "div");
		itemNameLabel.content.style.fontWeight = "bold";
		itemNameLabel.content.style.marginLeft = "8px";
		itemNameLabel.content.style.textAlign = "left";
		itemNameLabel.content.style.position = "relative";
		container.appendChild(itemNameLabel.content);
		
		let addToCartPlusPriceContainer = document.createElement("div");
		addToCartPlusPriceContainer.id = "AddToCardPlusPriceContainer";
		addToCartPlusPriceContainer.style.display = "flex";
		addToCartPlusPriceContainer.style.margin = "8px 5px";
		addToCartPlusPriceContainer.style.justifyContent = "space-between";
		container.appendChild(addToCartPlusPriceContainer);
		
		let buttonTest = new PrimaryButton("AddToCart", "ADD TO CART", "'Titillium Web', sans-serif", "10px", "span");
		buttonTest.content.style.width = "100px";
		buttonTest.content.style.height = "25px";
		buttonTest.content.style.display = "flex";
		addToCartPlusPriceContainer.appendChild(buttonTest.content);
		
		let itemPriceLabel = new Label("ItemPrice", this.ItemPrice, "'Titillium Web', sans-serif", "18px", "span");
		itemPriceLabel.content.style.fontWeight = "bold";
		addToCartPlusPriceContainer.appendChild(itemPriceLabel.content);
		
		return container;
	}
	
	SetSaleStatus(onSale) {
		this.OnSaleTag.style.display = onSale ? "inline-block" : "hidden";
	}
}