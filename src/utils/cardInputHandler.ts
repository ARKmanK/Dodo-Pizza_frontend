export const formatCardNumber = (value: string) => {
	const v = value.replace(/\D/g, '')
	const parts = []
	for (let i = 0; i < v.length; i += 4) {
		parts.push(v.slice(i, i + 4))
	}
	return parts.join('-').replace(/-$/, '')
}

export const formatExpiryDate = (value: string, prevValue: string) => {
	if (value.length < prevValue.length) {
		return value
	}

	const v = value.replace(/\D/g, '')
	let formattedValue = ''
	if (v.length >= 2) {
		formattedValue = `${v.slice(0, 2)}/${v.slice(2, 4)}`
	} else {
		formattedValue = v
	}
	return formattedValue
}

export const validateExpiryDate = (value: string) => {
	const v = value.replace(/\D/g, '')
	if (v.length !== 4) return false

	const month = parseInt(v.slice(0, 2), 10)
	const expiryYear = parseInt(v.slice(2, 4), 10)
	const currentYear = new Date().getFullYear() % 100
	const currentMonth = new Date().getMonth() + 1

	if (month < 1 || month > 12) return false
	if (expiryYear < currentYear - 2 || expiryYear > currentYear + 2) return false

	return true
}

export const formatCVV = (value: string) => {
	return value.replace(/\D/g, '')
}
