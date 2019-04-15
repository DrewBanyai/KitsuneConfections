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
	
		//  Create a function to check if the payment system is ready
		let paymentReadyCheck = () => {
			if (GooglePaymentsClient === null) return false;
			const isReadyToPayRequest = Object.assign({}, this.GetBaseRequest()); isReadyToPayRequest.allowedPaymentMethods = [this.GetBaseCardPaymentMethod()];
			GooglePaymentsClient.isReadyToPay(isReadyToPayRequest).then(function(response) {
					return (response.result != null);
				}).catch(function(err) {
					// show error in developer console for debugging
					console.error(err);
					return false;
				});
		}
		
		//  Check if the payment system is ready, and set an interval to keep checking if it is not. Create a button to pay when the system is ready.
		if (paymentReadyCheck() === false) {
			let paymentReadyCheckLoop = setInterval(() => {
				if (paymentReadyCheck() === true) {
					clearInterval(paymentReadyCheckLoop);
					
					// add a Google Pay payment button
					this.GooglePayButton = GooglePaymentsClient.createButton({onClick: () => container.PayButtonCallback()});
					this.GooglePayButton.id = "GooglePayButton";
					this.GooglePayButton.style.marginTop = "6px";
					container.appendChild(this.GooglePayButton);
				}
			}, 250);
		}
		else {
			// add a Google Pay payment button
			this.GooglePayButton = GooglePaymentsClient.createButton({onClick: () => container.PayButtonCallback()});
			this.GooglePayButton.id = "GooglePayButton";
			this.GooglePayButton.style.marginTop = "6px";
			container.appendChild(this.GooglePayButton);
		}
		
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
		this.GooglePayButton.style.display = (price == 0) ? "none" : "block";
		if (price !== 0) { this.PrefetchPaymentRequest(); }
	}
	
	async PayButtonCallback() {
		//  Load the payment data
		let paymentData = await GooglePaymentsClient.loadPaymentData(this.PaymentDataRequest).catch(function(error) { console.error(error); });
		
		//  If we're using gateway tokenization, pass this token without modification
		this.PaymentToken = paymentData.paymentMethodData.tokenizationData.token;
		console.log(`Payment Token: ${this.PaymentToken}`);
	}
	
	PrefetchPaymentRequest() {
		this.PaymentDataRequest = Object.assign({}, this.GetBaseRequest());
		this.PaymentDataRequest.allowedPaymentMethods = [this.GetCardPaymentMethod()];
		this.PaymentDataRequest.transactionInfo = this.GetPaymentTransactionInfo();
		this.PaymentDataRequest.merchantInfo = this.GetMerchantInfo();
		
		GooglePaymentsClient.prefetchPaymentData(this.PaymentDataRequest);
	}
}