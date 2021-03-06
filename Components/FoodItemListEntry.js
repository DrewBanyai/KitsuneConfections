class FoodItemListEntry {
	constructor(previewImageURL, itemName, itemPrice) {
		this.PreviewImageURL = previewImageURL;
		this.ItemName = itemName;
		this.ItemPrice = itemPrice;
		this.ItemPriceString = GetPriceString(this.ItemPrice);
		this.ItemOriginalPriceLabel = null;
		this.ItemPriceLabel = null;
		this.OnSaleTag = null;
		this.HoverZoomRatio = 1.0;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let entryWidth = "286px";
		let entryHeight = "240px";
		let entryBoxShadow = "1px 3px 5px lightgray";
		let previewImageHeight = "180px";
		let borderRadius = "5px";
		let entryMargin = "10px";
		let maxHoverZoomRatio = 1.2;
		let hoverZoomSpeed = 0.01;
		
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
		this.OnSaleTag.className = "corner-ribbon FoodItemListEntry-sale sticky shadow";
		this.OnSaleTag.style.background = "rgb(224, 128, 32)";
		this.OnSaleTag.style.fontFamily = "'Noto Sans', sans-serif";
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
		buttonTest.SetOnClick(() => { 
			AddToShoppingCart({name: this.ItemName, count: 1, price: this.ItemPrice, previewURL: this.PreviewImageURL });
		});
		addToCartPlusPriceContainer.appendChild(buttonTest.content);
		
		this.ItemOriginalPriceLabel = new Label("ItemOriginalPrice", "XXXXX", "'Titillium Web', sans-serif", "14px", "span");
		this.ItemOriginalPriceLabel.content.style.color = "rgba(130, 130, 130, 0.8)";
		this.ItemOriginalPriceLabel.content.style.marginLeft = "50px";
		addToCartPlusPriceContainer.appendChild(this.ItemOriginalPriceLabel.content);
		
		this.ItemPriceLabel = new Label("ItemPrice", this.ItemPriceString, "'Titillium Web', sans-serif", "18px", "span");
		this.ItemPriceLabel.content.style.fontWeight = "bold";
		addToCartPlusPriceContainer.appendChild(this.ItemPriceLabel.content);
		
		//  The hover-over zoom (foodItemListEntryZoom)
		container.onmouseover = () => { container.className = "foodItemListEntryZoom"; }
		
		return container;
	}
	
	SetSaleStatus(onSale, originalPrice) {
		this.OnSaleTag.style.display = onSale ? "inline-block" : "none";
		this.ItemOriginalPriceLabel.SetText(originalPrice.strike());
		this.ItemOriginalPriceLabel.content.style.display = onSale ? "inline-block" : "none";
		this.ItemPriceLabel.content.style.color = onSale ? "rgb(10, 140, 10)" : "black";
	}
}