class FoodItemListEntry {
	constructor(previewImageURL, width, height, itemName) {
		this.PreviewImageURL = previewImageURL;
		this.Width = width;
		this.Height = height;
		this.ItemName = itemName;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.style.width = this.Width;
		container.style.height = this.Height;
		container.style.borderRadius = "5px";
		container.style.boxShadow = "1px 3px 5px lightgray";
		
		return container;
	}
}