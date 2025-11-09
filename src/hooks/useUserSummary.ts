import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const useUserSummary = () => {
	const user = useSelector((state: RootState) => state.user)

	const name = user.name
	const phone = user.phone
	const birthday = user.birthday
	const email = user.email
	const adv = user.adv

	const cards = user.cards
	const purchaseHistory = user.purchaseHistory
	const purchaseQuantity = purchaseHistory.length

	return {
		user,
		name,
		phone,
		birthday,
		email,
		adv,
		cards,
		purchaseHistory,
		purchaseQuantity,
	}
}
