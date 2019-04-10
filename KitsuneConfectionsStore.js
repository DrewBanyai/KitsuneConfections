let MainContent = null;

function LoadSiteContent() {
	MainContent = document.getElementById("KitsuneConfections");
	console.log(MainContent);
	
	let foodEntry = new FoodItemListEntry("", "200px", "200px", "Item Test");
	MainContent.appendChild(foodEntry.content);
}