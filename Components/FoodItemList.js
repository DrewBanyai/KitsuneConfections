class FoodItemList {
	constructor(itemsPerRow, listWidth) {
		this.ItemsPerRow = itemsPerRow;
		this.ItemCount = 0;
		this.LastRow = null;
		this.content = this.GenerateContent();
		this.content.style.width = listWidth;
	}
	
	GenerateContent() {
		//  Outer container
		let container = document.createElement("div");
		
		return container;
	}
	
	AddNewRow() {
		let rowContainer = document.createElement("div");
		rowContainer.id = "FoodItemListRow";
		rowContainer.style.width = "100%";
		rowContainer.style.textAlign = "center";
		rowContainer.style.display = "inline-block";
		this.content.appendChild(rowContainer);
		
		return rowContainer;
	}
	
	AddFoodItem(imagePath, itemName, itemPrice, onSale = false) {
		//  Grab the last row in the main container. Create a new one if it is time to do so.
		let row = ((this.ItemCount % this.ItemsPerRow) == 0) ? this.AddNewRow() : this.LastRow;
		
		let foodEntry = new FoodItemListEntry(imagePath, itemName, itemPrice);
		foodEntry.SetSaleStatus(onSale);
		row.appendChild(foodEntry.content);
		
		this.ItemCount++;
		this.LastRow = row;
	}
}