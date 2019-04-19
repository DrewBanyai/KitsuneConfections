class GooglePay {
	constructor() {
		this.GooglePayButton = null;
		this.PaymentPrice = 0;
		this.PaymentDataRequest = null;
		this.PaymentToken = null;
		this.content = this.GenerateContent();
	}
	
	GenerateContent() {
		let container = document.createElement("div");
		container.id = "GooglePayButtonContainer";
		
		this.GooglePayButton = document.createElement("div");
		container.appendChild(this.GooglePayButton);
		
		this.WaitForPaymentReady();
		
		container.PayButtonCallback = () => this.PayButtonCallback();
		
		return container;
	}
	
	GetBaseRequest() { return { apiVersion: 2, apiVersionMinor: 0 }; }
	GetTokenizationSpec() { return { type: 'PAYMENT_GATEWAY', parameters: { 'gateway': 'example', 'gatewayMerchantId': 'exampleGatewayMerchantId' } }; }
	GetAllowedCardNetworks() { return ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"]; }
	GetAllowedCartAuthMethods() { return ["PAN_ONLY", "CRYPTOGRAM_3DS"]; }
	GetBaseCardPaymentMethod() { return { type: 'CARD', parameters: { allowedAuthMethods: this.GetAllowedCartAuthMethods(), allowedCardNetworks: this.GetAllowedCardNetworks() } }; }
	GetCardPaymentMethod() { return Object.assign({ tokenizationSpecification: this.GetTokenizationSpec() }, this.GetBaseCardPaymentMethod()); }
	
	GetPaymentTransactionInfo() { return { totalPriceStatus: 'FINAL', totalPrice: GetPriceString(this.PaymentPrice, false), currencyCode: 'USD' }; }
	GetMerchantInfo() { return { merchantName: SiteName }; }
	
	SetPaymentPrice(price) {
		this.PaymentPrice = price;
		this.GooglePayButton.style.display = (this.PaymentPrice == 0) ? "none" : "block";
		if (this.PaymentPrice !== 0) { this.PrefetchPaymentRequest(); }
	}
	
	async WaitForPaymentReady() {
		//  Create a function to check if the payment system is ready
		let paymentReadyCheck = async () => {
			if (GooglePaymentsClient === null) return false;
			const isReadyToPayRequest = Object.assign({}, this.GetBaseRequest()); isReadyToPayRequest.allowedPaymentMethods = [this.GetBaseCardPaymentMethod()];
			let response = await GooglePaymentsClient.isReadyToPay(isReadyToPayRequest);
			return (response.result != null);
		}
		
		//  Check if the payment system is ready, and set an interval to keep checking if it is not. Create a button to pay when the system is ready.
		let paymentReady = await paymentReadyCheck();
		if (paymentReady === false) {
			let paymentReadyCheckLoop = setInterval(async () => {
				if ((await paymentReadyCheck()) === true) {
					clearInterval(paymentReadyCheckLoop);
					this.CreateGooglePayButton();
				}
			}, 250);
		}
		else { this.CreateGooglePayButton(); }
	}
	
	CreateGooglePayButton() {
		let googlePayButton = GooglePaymentsClient.createButton({onClick: () => this.PayButtonCallback()});
		googlePayButton.id = "GooglePayButton";
		googlePayButton.style.marginTop = "6px";
		this.GooglePayButton.innerHTML = "";
		this.GooglePayButton.appendChild(googlePayButton);
	}
	
	async PayButtonCallback() {
		//  Load the payment data
		let paymentData = await GooglePaymentsClient.loadPaymentData(this.PaymentDataRequest).catch(function(error) {
			if ((error === null) || (error.statusCode === null)) { console.error("Unknown error occurred when loading payment data for Google Pay."); return; }
			switch (error.statusCode) {
				case "CANCELED": 	{ console.log("Google Pay: Payment canceled"); return; }
				default:			{ console.error(error); return; }
			}
		});
		if ((paymentData === null) || (paymentData === undefined)) { return; }
		
		//  If we're using gateway tokenization, pass this token without modification
		this.PaymentToken = paymentData.paymentMethodData.tokenizationData.token;
		console.log(`Payment Successful (Token: ${this.PaymentToken})`);
	}
	
	PrefetchPaymentRequest() {
		this.PaymentDataRequest = Object.assign({}, this.GetBaseRequest());
		this.PaymentDataRequest.allowedPaymentMethods = [this.GetCardPaymentMethod()];
		this.PaymentDataRequest.transactionInfo = this.GetPaymentTransactionInfo();
		this.PaymentDataRequest.merchantInfo = this.GetMerchantInfo();
		
		GooglePaymentsClient.prefetchPaymentData(this.PaymentDataRequest);
	}
}