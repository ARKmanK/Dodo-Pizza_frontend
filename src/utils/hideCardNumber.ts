export const hideCardNumber = (cardNumber: string) => {
	const parts = cardNumber.split('-')
	if (parts.length === 4) {
		return `${parts[0]} •••• •••• ${parts[3]}`
	}
	return cardNumber
}
