class PrimaryButton {
	constructor(name, text, font, fontSize, divType) {
		this.ObjectName = name;
		this.ButtonElement = null;
		this.ButtonGradient = null;
		this.ButtonTextLabel = null;
		this.DivType = (divType !== undefined) ? divType : "span";
		this.content = this.GenerateContent();
		
		this.SetText(text);
		this.SetFont(font);
		this.SetFontSize(fontSize);
	}
	
	GenerateContent() {
		let highlightGradient = "linear-gradient(to right, rgba(200, 200, 200, 0.6), rgba(170, 170, 170, 0.4))";
		let mouseDownGradient = "linear-gradient(to right, rgba(140, 140, 140, 0.6), rgba(170, 170, 170, 0.4))";
		
		//  Create the main button, a rounded box
		this.ButtonElement = document.createElement(this.DivType);
		this.ButtonElement.id = this.ObjectName + "PrimaryButton";
		this.ButtonElement.style.width = "200px";
		this.ButtonElement.style.height = "50px";
		this.ButtonElement.style.borderRadius = "5px";
		this.ButtonElement.style.backgroundColor = "orange";
		
		this.ButtonGradient = document.createElement(this.DivType);
		this.ButtonGradient.id = this.ObjectName + "ButtonGradient";
		this.ButtonGradient.style.width = "100%";
		this.ButtonGradient.style.height = "100%";
		this.ButtonGradient.style.lineHeight = "25px";
		this.ButtonGradient.style.borderRadius = "5px";
		this.ButtonElement.appendChild(this.ButtonGradient);
		
		//  Create a centered label on the button
		this.ButtonTextLabel = new Label(this.ObjectName + "ButtonTextLabel", "", "'Titillium Web', sans-serif", "20px", "div");
		this.ButtonTextLabel.content.style.fontWeight = "bold";
		this.ButtonTextLabel.content.style.position = "relative";
		this.ButtonTextLabel.content.style.margin = "auto";
		this.ButtonTextLabel.content.style.cursor = "default";
		this.ButtonTextLabel.content.style.userSelect = "none";
		this.ButtonGradient.appendChild(this.ButtonTextLabel.content);
		
		//  Set mouse reactions
		this.ButtonElement.onmouseover = () => {
			if (this.ButtonElement.disabled) { return; }
			this.ButtonGradient.style.backgroundImage = highlightGradient;
		}
		this.ButtonElement.onmouseout = () => {
			if (this.ButtonElement.disabled) { return; }
			this.ButtonGradient.style.backgroundImage = "";
		}
		this.ButtonElement.onmousedown = () => {
			if (this.ButtonElement.disabled) { return; }
			this.ButtonGradient.style.backgroundImage = mouseDownGradient;
		}
		this.ButtonElement.onmouseup = () => {
			if (this.ButtonElement.disabled) { return; }
			this.ButtonGradient.style.backgroundImage = highlightGradient;
		}
		
		return this.ButtonElement;
	}
	
	SetText(text) { this.ButtonTextLabel.SetText(text); }
	SetFont(font) { this.ButtonTextLabel.SetFont(font); }
	SetFontSize(size) { this.ButtonTextLabel.SetFontSize(size); }
	
	SetOnClick(callback) { this.ButtonElement.onclick = () => { if (this.ButtonElement.disabled) { return; } callback(); }; }
	
	SetEnabledState(enabled) {
		this.ButtonElement.disabled = (!enabled);
		this.ButtonGradient.disabled = (!enabled);
		
		if (!enabled) { this.ButtonGradient.style.backgroundImage = ""; }
	}
}