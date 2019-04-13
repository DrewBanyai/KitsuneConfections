class PrimaryButton {
	constructor(name, text, font, size, divType) {
		this.ObjectName = name;
		this.ButtonElement = null;
		this.ButtonTextLabel = null;
		this.DivType = (divType !== undefined) ? divType : "span";
		this.content = this.GenerateContent();
		this.SetText(text);
		this.SetFont(font);
		this.SetFontSize(size);
	}
	
	GenerateContent() {
		//  Create the main button, a rounded box
		this.ButtonElement = document.createElement(this.DivType);
		this.ButtonElement.id = this.ObjectName + "PrimaryButton";
		this.ButtonElement.style.width = "200px";
		this.ButtonElement.style.height = "50px";
		this.ButtonElement.style.borderRadius = "5px";
		this.ButtonElement.style.backgroundColor = "orange";
		
		//  Create a centered label on the button
		this.ButtonTextLabel = new Label(this.ObjectName + "ButtonTextLabel", "", "'Titillium Web', sans-serif", "20px", "div");
		this.ButtonTextLabel.content.style.fontWeight = "bold";
		this.ButtonTextLabel.content.style.position = "relative";
		this.ButtonTextLabel.content.style.margin = "auto";
		this.ButtonElement.appendChild(this.ButtonTextLabel.content);
		
		return this.ButtonElement;
	}
	
	SetText(text) { this.ButtonTextLabel.SetText(text); }
	SetFont(font) { this.ButtonTextLabel.SetFont(font); }
	SetFontSize(size) { this.ButtonTextLabel.SetFontSize(size); }
}