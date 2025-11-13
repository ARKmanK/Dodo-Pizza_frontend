import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const useUserSummary = () => {
	const user = useSelector((state: RootState) => state.user)
	const dodoCoins = user.dodoCoins

	const name = user.name
	const phone = user.phone
	const birthday = user.birthday
	const email = user.email
	const adv = user.adv

	const cards = user.cards
	const purchaseHistory = user.purchaseHistory
	const deliveryAddress = user.deliveryAddress
	const purchaseQuantity = purchaseHistory.length

	return {
		user,
		dodoCoins,
		name,
		phone,
		birthday,
		email,
		adv,
		cards,
		purchaseHistory,
		deliveryAddress,
		purchaseQuantity,
	}
}
