class Label {
	constructor(name, text, font, size, divType, userSelect = "none") {
		this.LabelName = name;
		this.LabelElement = null;
		this.DivType = (divType !== undefined) ? divType : "span";
		this.content = this.GenerateContent();
		this.content.style.userSelect = userSelect;
		this.SetText(text);
		this.SetFont(font);
		this.SetFontSize(size);
		
	}
	
	GenerateContent() {
		this.LabelElement = document.createElement(this.DivType);
		this.LabelElement.id = this.LabelName + "Label";
		this.LabelElement.style.height = "20px";
		
		this.LabelElement.SetText = (text) => this.SetText(text);
		
		return this.LabelElement;
	}
	
	SetText(text) { this.LabelElement.innerHTML = text; }
	SetFont(font) { this.LabelElement.style.fontFamily = font; }
	SetFontSize(size) { this.LabelElement.style.fontSize = size; }
	SetColor(color) { this.LabelElement.style.color = color; }
}