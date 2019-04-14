let MainContent = null;

let SiteName = "KitsuneConfections";
let SiteWidth = "920px";

let CartItemCount = 0;
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
	UpdateShoppingCartIcon();
}

function SetShoppingCartItemCount(itemName, itemCount) {
	//  Create a new entry or tack the count onto an existing entry if one is already in the cart
	let entry = ShoppingCartList.find(function(element) { return (element.name === itemName); });
	if (entry === undefined) { console.log("ERROR: Attempted to update a shopping cart entry which does not exist (" + itemName + ")"); return; }
	else {
		entry.count = itemCount;
		if (itemCount === 0) { ShoppingCartList = ShoppingCartList.filter(function(element) { return (element.count !== 0); }); }
		console.log(itemCount);
		console.log(ShoppingCartList);
	}
	UpdateShoppingCartIcon();
}

function UpdateShoppingCartIcon() {
	//  Loop through all entries and get the total count of shopping cart objects
	CartItemCount = 0;
	ShoppingCartList.forEach(function(entry) { CartItemCount += entry.count; });
	
	let shoppingCartIcon = document.getElementById("ShoppingCartIcon");
	if (shoppingCartIcon !== null) {  shoppingCartIcon.SetItemCount(CartItemCount); }
}

function GetPriceString(priceInPennies) {
	let float = parseFloat(priceInPennies / 100.0).toFixed(2);
	return (`$${float}`);
}