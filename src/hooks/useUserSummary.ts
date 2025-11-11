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
	const deliveryAddress = user.deliveryAddress
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
		deliveryAddress,
		purchaseQuantity,
	}
}
/* <input
	type='radio'
	name='address'
	value={rest.address}
	checked={field.value === rest.address}
	onChange={e => {
		e.stopPropagation()
	}}
	className='form-radio h-5 w-5 appearance-none rounded-full bg-[#f1f3f6] border-2 border-gray-300 checked:border-[6px] checked:border-orange-500 checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 mt-1'
/>
 */
