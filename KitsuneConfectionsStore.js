let MainContent = null;

let SiteWidth = "920px";

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
	console.log(MainContent);
	
	LoadPage(new MainPage(SiteWidth));
}