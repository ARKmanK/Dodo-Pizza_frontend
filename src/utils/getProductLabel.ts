export const getProductLabel = (quantity: number): string => {
	if (quantity === 1) return 'товар'
	if (quantity >= 2 && quantity <= 4) return 'товара'
	return 'товаров'
}
