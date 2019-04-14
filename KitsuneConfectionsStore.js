let MainContent = null;

let SiteName = "KitsuneConfections";
let SiteWidth = "920px";

let ShoppingCartList = [];

function LoadPage(page) {
	if (MainContent === null) {
		console.log("MainContent is null! Can not load new page");
		return;
	}
	if (page === undefined || page === null) {
		console.log("Given page is undefined or null! Can not load new page");
		return;
	}
	
	MainContent.innerHTML = "";
	MainContent.appendChild(page.content);
}

function LoadSiteContent() {
	MainContent = document.getElementById("KitsuneConfections");
	MainContent.style.width = "100%";
	MainContent.style.margin = "-8px -8px 0px -8px";
	MainContent.style.backgroundImage = "linear-gradient(to bottom right, rgb(10, 10, 10), rgb(70, 70, 70))";
	
	//  Load the default first page users should see
	LoadPage(new MainPage());
}

function AddToShoppingCart(cartEntry) {
	//  Create a new entry or tack the count onto an existing entry if one is already in the cart
	let entry = ShoppingCartList.find(function(element) { return (element.name === cartEntry.name); });
	if (entry === undefined) { ShoppingCartList.push(cartEntry); }
	else { entry.count += cartEntry.count; }
	
	//  Loop through all entries and get the total count of shopping cart objects
	let shoppingItemCount = 0;
	ShoppingCartList.forEach(function(entry) { shoppingItemCount += entry.count; });
	
	let shoppingCartIcon = document.getElementById("ShoppingCartIcon");
	if (shoppingCartIcon !== null) {  shoppingCartIcon.SetItemCount(shoppingItemCount); }
}