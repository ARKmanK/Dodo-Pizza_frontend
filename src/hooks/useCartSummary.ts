import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const useCartSummary = () => {
	const cart = useSelector((state: RootState) => state.cart)

	const price = cart.products.reduce(
		(sum, product) => sum + product.price * (product.quantity || 1),
		0
	)
	const discountCode = cart.promoCode?.promo || ''
	const discount = cart.promoCode?.discount || 0

	const priceWithDiscount = price - discount < 0 ? 0 : price - discount

	const quantity = cart.products.reduce((total, product) => total + (product.quantity || 1), 0)

	return {
		cart,
		price,
		discountCode,
		discount,
		priceWithDiscount,
		quantity,
	}
}
